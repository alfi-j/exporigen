<template>
  <section class="tickets-section" id="tickets" aria-labelledby="tickets-title">
    <div class="container tickets-wrap">
      <h2 id="tickets-title">PARTICIPA EN EXPORIGEN</h2>
      <p class="tickets-subtitle">
        ¡Reserva tu stand ahora! Plazas limitadas para cada edición.
      </p>

      <div class="ticket-tabs" role="tablist" aria-label="Ticket categories">
        <button
          v-for="(category, index) in categories"
          :key="category.key"
          type="button"
          class="ticket-tab"
          :class="{ active: index === activeCategoryIndex }"
          :aria-selected="index === activeCategoryIndex"
          role="tab"
          @click="selectCategory(index)"
        >
          {{ category.label }}
        </button>
      </div>

      <div class="ticket-grid" aria-live="polite">
        <article v-for="card in activeCategory.cards" :key="card.title" class="ticket-card">
          <div class="card-notch card-notch-top" aria-hidden="true"></div>
          <div class="card-header">
            <p class="card-dates">{{ card.dates }}</p>
            <p class="card-save">{{ card.save }}</p>
          </div>

          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-copy">{{ card.copy }}</p>

          <div class="card-pricing">
            <div>
              <p class="price-label">{{ card.priceLabel }}</p>
              <p class="price-note">{{ card.priceNote }}</p>
            </div>
            <div class="price-values">
              <p class="price-old">{{ card.oldPrice }}</p>
              <p class="price-new">{{ card.price }}</p>
              <p class="price-vat">USD</p>
            </div>
          </div>

          <a class="card-cta" :href="card.ctaUrl || '#registro'">Registrarme →</a>

          <div class="card-notch card-notch-bottom" aria-hidden="true"></div>
        </article>
      </div>

      <div class="included-block">
        <p class="included-title">Incluido con tu stand</p>
        <div class="included-list">
          <span v-for="item in activeCategory.included" :key="item" class="included-item">✓ {{ item }}</span>
        </div>
      </div>

      <div class="payment-block">
        <p class="payment-title">MÉTODOS DE PAGO</p>
        <div class="payment-list">
          <div v-for="method in activeCategory.payments" :key="method.label" class="payment-method">
            <div class="payment-icon" aria-hidden="true">{{ method.icon }}</div>
            <div>
              <p class="payment-label">{{ method.label }}</p>
              <p class="payment-note">{{ method.note }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue';

const categories = [
  {
    key: 'ferias',
    label: 'Ferias',
    cards: [
      {
        dates: 'FEBRERO 2026',
        save: 'BEST VALUE',
        title: 'Paquete Anual Completo',
        copy: 'Participa en las 3 ferias del año: Gastronómica, Tsáchila y Agro. Máxima exposición para tu negocio.',
        priceLabel: 'Precio Early Bird',
        priceNote: 'Hasta 31 de enero',
        oldPrice: '$450',
        price: '$350',
      },
      {
        dates: 'AGOSTO 2025',
        save: 'DISPONIBLE',
        title: 'Feria Gastronómica',
        description: 'La mejor gastronomía de la región.食品 y experiencias culinarias únicas.',
        priceLabel: 'Precio Regular',
        priceNote: 'Plazas limitadas',
        oldPrice: '$180',
        price: '$150',
      },
      {
        dates: 'NOVIEMBRE 2025',
        save: 'ABIERTO',
        title: 'Feria Tsáchila',
        copy: 'Cultura, arte y tradiciones del pueblo Tsáchila. Arteanía única.',
        priceLabel: 'Precio Regular',
        priceNote: 'Plazas limitadas',
        oldPrice: '$150',
        price: '$120',
      },
    ],
    included: ['Stand físicos', 'Promoción en redes', 'Kit de expositor', 'Acceso a networking'],
    payments: [
      { icon: '▣', label: 'Tarjeta de Crédito', note: 'VISA, Mastercard' },
      { icon: '◫', label: 'Transferencia', note: 'Banco local' },
    ],
  },
  {
    key: 'single',
    label: 'Una Feria',
    cards: [
      {
        dates: 'ENERO 2026',
        save: 'PROXIMA',
        title: 'Feria Agro',
        description: 'Productos del campo y tecnología agrícola. El sector más importante.',
        priceLabel: 'Precio Regular',
        priceNote: 'Plazas limitadas',
        oldPrice: '$160',
        price: '$130',
      },
      {
        dates: 'AGOSTO 2025',
        save: 'ÚLTIMOS',
        title: 'Feria Gastronómica',
        description: 'Para restaurantes, chefs y productores de alimentos.',
        priceLabel: 'Precio Regular',
        priceNote: 'Solo 5 stands left',
        oldPrice: '$180',
        price: '$150',
      },
      {
        dates: 'NOVIEMBRE 2025',
        save: 'ABIERTO',
        title: 'Feria Tsáchila',
        copy: 'Expo de cultura indigenous y arte local.',
        priceLabel: 'Precio Regular',
        priceNote: 'Plazas limitadas',
        oldPrice: '$150',
        price: '$120',
      },
    ],
    included: ['Stand físico', 'Promoción básica', 'Kit de expositor'],
    payments: [
      { icon: '▣', label: 'Tarjeta de Crédito', note: 'VISA, Mastercard' },
      { icon: '◫', label: 'Transferencia', note: 'Banco local' },
    ],
  },
  {
    key: 'visitors',
    label: 'Visitantes',
    cards: [
      {
        dates: 'ENTRADA GENERAL',
        save: 'GRATIS',
        title: 'Entrada Libre',
        description: 'Acceso general a la feria. ¡Abierto a todo público!',
        priceLabel: 'Gratis',
        priceNote: 'No requiere registro',
        oldPrice: '$0',
        price: 'FREE',
      },
      {
        dates: 'VIP PASS',
        save: 'ESPECIAL',
        title: 'Pase VIP',
        description: 'Acceso exclusivo a áreas VIP y reuniones con expositors.',
        priceLabel: 'Precio Especial',
        priceNote: 'Limitado a 50 personas',
        oldPrice: '$50',
        price: '$35',
      },
      {
        dates: 'FAMILIAR',
        save: 'PACK',
        title: 'Pase Familiar',
        description: 'Para familias completas. Incluye actividades infantiles.',
        priceLabel: 'Grupo',
        priceNote: 'Hasta 4 personas',
        oldPrice: '$80',
        price: '$60',
      },
    ],
    included: ['Acceso a la feria', 'Estacionamiento', 'Programa de actividades'],
    payments: [
      { icon: '▣', label: 'Tarjeta de Crédito', note: 'VISA, Mastercard' },
      { icon: '◫', label: 'Efectivo', note: 'En la entrada' },
    ],
  },
  {
    key: 'sponsors',
    label: 'Patrocinadores',
    cards: [
      {
        dates: 'PLATINUM',
        save: 'TOP',
        title: 'Patrocinador Platinum',
        description: 'Logo grande, stand premium y Speaking slot.',
        priceLabel: 'Contáctanos',
        priceNote: 'Solo 2 disponibles',
        oldPrice: '$2,000',
        price: '$1,500',
      },
      {
        dates: 'GOLD',
        save: 'POPULAR',
        title: 'Patrocinador Gold',
        description: 'Logo mediano, stand estándar y materiales incluidos.',
        priceLabel: 'Contáctanos',
        priceNote: 'Solo 5 disponibles',
        oldPrice: '$1,000',
        price: '$800',
      },
      {
        dates: 'SILVER',
        save: 'BASIC',
        title: 'Patrocinador Silver',
        description: 'Logo pequeño en materiales de la feria.',
        priceLabel: 'Contáctanos',
        priceNote: 'Sin límite',
        oldPrice: '$500',
        price: '$400',
      },
    ],
    included: ['Logo en todos los materiales', 'Redes sociales', 'Comunicados de prensa'],
    payments: [
      { icon: '▣', label: 'Transferencia', note: 'Contáctanos' },
      { icon: '◫', label: 'Cheque', note: 'Pago empresarial' },
    ],
  },
];

const activeCategoryIndex = ref(0);

const activeCategory = computed(() => categories[activeCategoryIndex.value]);

function selectCategory(index) {
  activeCategoryIndex.value = index;
}
</script>

<style scoped>
.tickets-section {
  background: #1f2f14;
  padding: 3rem 0 4.5rem;
  color: #FAFAF5;
  border-top: 4px solid #1f2f14;
}

.tickets-wrap {
  text-align: center;
}

.tickets-wrap h2 {
  margin: 0;
  color: #f3f3f3;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  font-size: clamp(2.2rem, 4.2vw, 3.5rem);
  line-height: 0.95;
  font-weight: 500;
  letter-spacing: -0.03em;
}

.tickets-subtitle {
  margin: 0.75rem auto 0;
  max-width: 760px;
  color: #d7dbde;
  font-size: clamp(1.1rem, 1.7vw, 1.38rem);
  line-height: 1.25;
}

.ticket-tabs {
  margin: 1.4rem auto 0;
  width: fit-content;
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  padding: 0.28rem;
  border-radius: 999px;
  background: #131e0d;
}

.ticket-tab {
  border: 0;
  background: transparent;
  color: #edf0f2;
  border-radius: 999px;
  padding: 0.55rem 0.9rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  cursor: pointer;
}

.ticket-tab.active {
  background: #B5621A;
  color: #fff;
}

.ticket-grid {
  margin: 1.85rem auto 0;
  max-width: 1120px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.ticket-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  color: #24282b;
  border-radius: 3px;
  padding: 1.1rem 1rem 2.2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: visible;
}

.card-notch {
  position: absolute;
  left: 50%;
  width: 38px;
  height: 24px;
  background: #0c140a;
  transform: translateX(-50%);
  pointer-events: none;
}

.card-notch-top {
  top: -1px;
  border-bottom-left-radius: 999px;
  border-bottom-right-radius: 999px;
}

.card-notch-bottom {
  bottom: 0;
  border-top-left-radius: 999px;
  border-top-right-radius: 999px;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.card-dates {
  margin: 0;
  font-size: 0.92rem;
  font-weight: 700;
  color: #3a4044;
}

.card-save {
  margin: 0;
  padding: 0.22rem 0.45rem;
  border-radius: 999px;
  background: #d8f0ce;
  color: #4f8a3d;
  font-size: 0.76rem;
  font-weight: 800;
  white-space: nowrap;
}

.card-title {
  margin: 0.65rem 0 0;
  text-align: left;
  font-family: "Space Grotesk", "Segoe UI", sans-serif;
  font-size: clamp(1.45rem, 2vw, 2rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  min-height: 2.04em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-copy {
  margin: 0.85rem 0 0;
  text-align: left;
  color: #2e3539;
  font-size: 1rem;
  line-height: 1.42;
  min-height: 5.68em;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-pricing {
  margin-top: 1.1rem;
  padding-top: 0.9rem;
  border-top: 1px dotted #d9d9d9;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  min-height: 5.8rem;
}

.price-label {
  margin: 0;
  text-align: left;
  font-size: 1.1rem;
  color: #373d41;
}

.price-note {
  margin: 0.05rem 0 0;
  text-align: left;
  font-size: 0.88rem;
  color: #626a71;
}

.price-values {
  text-align: right;
}

.price-old {
  margin: 0;
  font-size: 1.22rem;
  color: #8d9295;
  text-decoration: line-through;
}

.price-new {
  margin: 0;
  font-size: 1.22rem;
  color: #1e2326;
  font-weight: 700;
}

.price-vat {
  margin: 0.08rem 0 0;
  font-size: 0.72rem;
  font-weight: 700;
  color: #5d656b;
}

.card-cta {
  margin-top: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 46px;
  border-radius: 999px;
  background: #B5621A;
  color: #fff;
  text-decoration: none;
  font-weight: 800;
  font-size: 1rem;
  position: relative;
  z-index: 1;
}

.included-block {
  margin-top: 2rem;
}

.included-title {
  margin: 0;
  color: #9fa4a8;
  font-size: 1.05rem;
  font-weight: 700;
}

.included-list {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.4rem;
  flex-wrap: wrap;
}

.included-item {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: #e9eff2;
  font-size: 0.98rem;
  font-weight: 600;
}

.payment-block {
  margin-top: 2.6rem;
}

.payment-title {
  margin: 0;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  font-size: 0.98rem;
  color: #d9dddd;
  font-weight: 800;
}

.payment-list {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.6rem;
  flex-wrap: wrap;
}

.payment-method {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: #f1f5f7;
}

.payment-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.12);
  display: grid;
  place-items: center;
  font-weight: 800;
}

.payment-label {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 700;
}

.payment-note {
  margin: 0.1rem 0 0;
  font-size: 0.82rem;
  color: #c0c8cc;
}

@media (max-width: 1040px) {
  .ticket-grid {
    grid-template-columns: 1fr;
    max-width: 700px;
  }

  .card-copy {
    min-height: 0;
  }

  .card-pricing {
    min-height: 0;
  }
}

@media (max-width: 760px) {
  .tickets-section {
    padding: 2.4rem 0 3.6rem;
  }

  .ticket-tabs {
    width: 100%;
    justify-content: center;
  }

  .ticket-tab {
    font-size: 0.92rem;
    padding: 0.5rem 0.72rem;
  }

  .ticket-card {
    padding: 0.95rem 0.9rem 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .card-copy {
    font-size: 0.96rem;
  }

  .card-pricing {
    margin-top: 0.9rem;
  }

  .card-pricing {
    flex-direction: column;
    align-items: flex-start;
  }

  .price-values {
    text-align: left;
  }
}
</style>
