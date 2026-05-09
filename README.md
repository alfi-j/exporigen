# EXPORIGEN

Centro comercial de ferias y exposiciones en Santo Domingo de los Colorados, Ecuador.

## Descripcion del Proyecto

**EXPORIGEN** (expo + origen) conecta emprendedores locales autenticos con su comunidad. El concepto de marca se basa en la autenticidad e identidad local.

**Propietario:** Firok, Santo Domingo de los Colorados
**Etapa:** Pagina de inicio en desarrollo activo. Sin backend aun.
**Uso principal:** Atraer exhibidores (expositores) e informar al publico sobre las proximas ediciones de la feria.

## Estructura de Archivos

```
/exporigen/
├── index.html                       ← prototipo original (archivo)
├── version-a.html                  ← ARCHIVO DE TRABAJO ACTIVO
├── version-b.html                  ← archivo (prueba de paleta rechazada)
├── AGENTS.md                       ← contexto del proyecto / sistema de diseno
├── README.md                       ← este archivo
└── EXPORIGEN_logo_final.svg        ← icono de arbol
```

## Archivos

| Archivo | Descripcion |
|---|---|
| `version-a.html` | Pagina de inicio activa — "verde cobre v3" |
| `index.html` | Archivo — prototipo original |
| `version-b.html` | Archivo — prueba de paleta de logo rechazada |
| `exporigen-logo-svg.html` | Exportacion — copia de version-a en la ultima entrega |
| `EXPORIGEN_logo_final.svg` | Icono de arbol con anillos concéntricos de crecimiento |

## Sistema de Diseno

### Colores

| Token | Hex | Uso |
|---|---|---|
| `--tierra` | `#1f2f14` | Verde primario — nav, estadisticas, footer, encabezados de seccion |
| `--tierra-lt` | `#324d1f` | Estados hover, bordes |
| `--crema` | `#F4F2EB` | Fondos claros, tarjetas |
| `--crema-dk` | `#D9D5C4` | Divisores, bordes |
| `--verde` | `#131e0d` | Fondos de seccion oscuros |
| `--verde-lt` | `#476e22` | Badges activos, etiquetas |
| `--dorado` | `#B5621A` | **COBRE** — unico acento calido, usar con moderacion |
| `--dorado-lt` | `#D4783A` | Hover en elementos de cobre |
| `--negro` | `#0c140a` | Texto en fondos claros |
| `--blanco` | `#FAFAF5` | Superficies de tarjetas, fondos principales |

### Tipografia

| Rol | Fuente | Pesos |
|---|---|---|
| Display / Logo | `Rye` (Google Fonts) | regular |
| Serif / Citas | `Playfair Display` | 700, italic 400 |
| Cuerpo | `Barlow` | 300, 400, 500, 600 |

### Logo

El isotipo esta dividido: **EXPO** en crema `#fffcde` · **RIGEN** en cobre `#B5621A`. El icono SVG del arbol substituye visualmente la "O" en EXPO. Todas las implementaciones usan SVG inline con `color: currentColor` — sin archivos de imagen.

## Secciones

1. Navbar — fijo, verde con backdrop-blur
2. Hero — negro puro `#080808`, logo grande, 2 CTAs
3. Barra de Estadisticas — verde, 4 metricas
4. Sobre la Feria — blanco, 4 pilares
5. Ediciones — casi negro, 3 tarjetas de edicion
6. Categorias — crema, 5 tarjetas de categoria
7. Galeria — casi negro, marcadores de color
8. Registro Expositores — verde, formulario de 2 columnas
9. Testimonios — blanco, 3 tarjetas
10. Newsletter — negro puro `#080808`
11. Footer — casi negro, 4 columnas

## Stack Tecnologico

Archivo HTML unico. Sin herramientas de construccion, sin dependencias — el propietario puede abrir y editar en cualquier lugar. Logo SVG inline, Google Fonts CDN, JS vanilla (scroll reveal + transparencia del navbar).

## Pendiente

- [ ] Reemplazar marcadores de galeria con fotos reales
- [ ] Conectar formulario de registro a backend (Google Forms o similar)
- [ ] Incrustar Google Maps para la ubicacion del venue
- [ ] Menu hamburguesa para movil (actualmente oculto bajo 900px)
- [ ] Testimonios reales despues de la primera edicion
- [ ] Paginas de inicio separadas por edicion
- [ ] SEO: meta description, etiquetas OG, favicon
- [ ] Dominio: exporigen.ec