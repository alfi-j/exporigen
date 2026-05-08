export type CmsSpeaker = {
  name: string;
  role: string;
  company: string;
  image: string;
  logo?: string;
};

type StrapiRecord = {
  id?: number | string;
  attributes?: Record<string, unknown>;
  [key: string]: unknown;
};

const env = (import.meta as { env?: Record<string, string | undefined> }).env || {};
const baseUrl = (env.STRAPI_BASE_URL || process.env.STRAPI_BASE_URL || '').replace(/\/$/, '');
const apiToken = env.STRAPI_API_TOKEN || process.env.STRAPI_API_TOKEN || '';

function readStrapiField(record: StrapiRecord, key: string): unknown {
  if (record.attributes && key in record.attributes) {
    return record.attributes[key];
  }
  return record[key];
}

function toAbsoluteMediaUrl(value: unknown): string {
  if (typeof value !== 'string' || value.length === 0) {
    return '';
  }

  if (value.startsWith('http://') || value.startsWith('https://')) {
    return value;
  }

  if (!baseUrl) {
    return value;
  }

  return `${baseUrl}${value.startsWith('/') ? '' : '/'}${value}`;
}

function normalizeSpeaker(record: StrapiRecord): CmsSpeaker | null {
  const name = String(readStrapiField(record, 'name') || '').trim();
  const role = String(readStrapiField(record, 'role') || '').trim();
  const company = String(readStrapiField(record, 'company') || '').trim();
  const logo = String(readStrapiField(record, 'logo') || '').trim();

  const imageField =
    readStrapiField(record, 'imageUrl') ||
    readStrapiField(record, 'image') ||
    readStrapiField(record, 'photo');

  let image = '';

  if (typeof imageField === 'string') {
    image = toAbsoluteMediaUrl(imageField);
  } else if (imageField && typeof imageField === 'object') {
    const mediaRecord = imageField as StrapiRecord;
    const mediaData = (mediaRecord.data as StrapiRecord) || mediaRecord;
    const url = readStrapiField(mediaData, 'url');
    image = toAbsoluteMediaUrl(url);
  }

  if (!name || !role || !company || !image) {
    return null;
  }

  return {
    name,
    role,
    company,
    image,
    logo: logo || undefined,
  };
}

async function fetchStrapiCollection(path: string): Promise<StrapiRecord[] | null> {
  if (!baseUrl) {
    return null;
  }

  const url = `${baseUrl}${path.startsWith('/') ? '' : '/'}${path}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (apiToken) {
    headers.Authorization = `Bearer ${apiToken}`;
  }

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      return null;
    }

    const payload = await response.json();
    const records = Array.isArray(payload?.data) ? payload.data : [];
    return records as StrapiRecord[];
  } catch {
    return null;
  }
}

export async function fetchSpeakers(): Promise<CmsSpeaker[] | null> {
  const records = await fetchStrapiCollection('/api/speakers?populate=*');
  if (!records || records.length === 0) {
    return null;
  }

  const normalized = records
    .map((record) => normalizeSpeaker(record))
    .filter((record): record is CmsSpeaker => Boolean(record));

  return normalized.length > 0 ? normalized : null;
}
