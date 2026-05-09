<template>
  <nav class="scroll-nav" :class="{ 'is-visible': isVisible }" aria-label="Section quick navigation">
    <a href="#top" class="logo-pill" aria-label="Back to top">
      <img class="logo-image" src="/exporigen/exporigen-logo.png" alt="EXPORIGEN" />
    </a>
    <a href="#tickets" class="nav-pill">Program</a>
    <a href="#lineup" class="nav-pill">Lineup</a>
    <a href="#lineup" class="nav-pill nav-pill-muted">
      Leadership Events
      <span class="badge-new">NEW</span>
    </a>
    <a href="#lineup" class="nav-pill">Partners</a>
    <a href="https://ti.to/ae-events/ae-conference/with/conference-pass" class="nav-pill nav-pill-cta">Tickets</a>
  </nav>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';

const isVisible = ref(false);
let onScroll;
let onResize;

onMounted(() => {
  const firstSection = document.querySelector('.hero-shell');

  if (!firstSection) {
    return;
  }

  const updateVisibility = () => {
    const heroBottom = firstSection.getBoundingClientRect().bottom;
    isVisible.value = heroBottom <= 120;
  };

  onScroll = () => updateVisibility();
  onResize = () => updateVisibility();

  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onResize);

  updateVisibility();
});

onBeforeUnmount(() => {
  if (onScroll) {
    window.removeEventListener('scroll', onScroll);
  }

  if (onResize) {
    window.removeEventListener('resize', onResize);
  }
});
</script>

<style scoped>
.scroll-nav {
  position: fixed;
  top: 22px;
  left: 50%;
  transform: translateX(-50%) translateY(-12px);
  z-index: 80;
  display: flex;
  align-items: center;
  width: min(1600px, calc(100% - 16px));
  gap: 0.45rem;
  opacity: 0;
  pointer-events: none;
  transition: opacity 220ms ease, transform 220ms ease;
}

.scroll-nav.is-visible {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.nav-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  text-decoration: none;
  padding: 0.58rem 1rem;
  border-radius: 999px;
  background: #f1f1f1;
  color: #202225;
  font-weight: 700;
  font-size: 0.95rem;
  line-height: 1;
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5), 0 8px 18px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
}

.logo-pill {
  width: 38px;
  height: 38px;
  border-radius: 999px;
  text-decoration: none;
  background: rgb(255 255 255 / 92%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: grid;
  place-items: center;
  box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
}

.logo-image {
  width: 22px;
  height: 22px;
  object-fit: contain;
  display: block;
}

.nav-pill-muted {
  background: #6a6f77;
  color: #fff;
}

.badge-new {
  font-size: 0.6rem;
  font-weight: 700;
  line-height: 1;
  padding: 0.2rem 0.34rem;
  border-radius: 999px;
  background: #7e47d3;
  color: #fff;
}

.nav-pill-cta {
  margin-left: auto;
  background: #B5621A;
  color: #fff;
}

@media (max-width: 1280px) {
  .scroll-nav {
    width: calc(100% - 1rem);
    left: 0.5rem;
    transform: translateX(0) translateY(-12px);
    overflow-x: auto;
    top: 10px;
    padding-bottom: 0.25rem;
    scrollbar-width: none;
  }

  .scroll-nav::-webkit-scrollbar {
    display: none;
  }

  .nav-pill-cta {
    margin-left: 0;
  }

  .scroll-nav.is-visible {
    transform: translateX(0) translateY(0);
  }
}

@media (max-width: 900px) {
  .scroll-nav {
    gap: 0.36rem;
  }

  .nav-pill {
    padding: 0.52rem 0.88rem;
    font-size: 0.88rem;
  }

  .logo-pill {
    width: 34px;
    height: 34px;
  }
}
</style>
