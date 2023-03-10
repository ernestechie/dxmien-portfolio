<template>
  <header class="relative grid grid-cols-1 md:grid-cols-3 h-screen">
    <div class="bg-white hidden md:block md:col-span-1"></div>
    <div class="bg-gray-700 md:col-span-2 hero-img"></div>

    <h1
      class="absolute top-[75%] left-[25%] -translate-x-[25%] -translate-y-[50%] text-7xl sm:text-8xl uppercase font-black md:top-[60%] text-gray-100 md:text-dark"
    >
      Dxmien <br />
      Obesi
    </h1>
  </header>
</template>

<style scoped>
.hero-img {
  background: url('../assets/image-1.jpg') no-repeat center top/cover;
  /* filter: saturate(0.2); */
}
</style>
