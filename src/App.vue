<script setup>
import Hero from './components/Hero.vue';
import Padding from './components/Slots/Padding.vue';
import AboutGrid from './components/Sections/AboutGrid.vue';
import MyPrices from './components/Sections/MyPrices.vue';
</script>

<template>
  <HeroSection />
  <Padding>
    <div class="h-[1px] w-full bg-gray-300"></div>
  </Padding>
  <AboutGrid />
  <MyPrices />
</template>

<script>
export default {
  components: { HeroSection: Hero, AboutGrid },
};
</script>

<style></style>
