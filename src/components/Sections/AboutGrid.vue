<template>
  <section class="relative grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5">
    <div
      class="bg-gray-700 md:col-span-2 xl:col-span-3 h-[600px] lg:h-screen about-img-1"
    ></div>
    <div
      class="bg-white md:col-span-2 xl:col-span-2 md:h-full flex flex-col justify-center"
    >
      <Padding>
        <h2 class="uppercase font-black text-4xl lg:text-5xl text-dark mb-4">
          Beautiful stories, told by me.
        </h2>
        <p class="text-gray-700 text-lg lg:text-xl">
          To be remembered is to live forever.
        </p>
        <p class="text-gray-700 text-lg lg:text-xl mb-8">
          Document your moment and tell your story in photos, that you may never
          forget them.
        </p>
        <button
          class="uppercase py-2 pr-4 border-b-2 border-gray-800 text-dark hover:pr-8 duration-500 font-bold"
        >
          View my work
        </button>
      </Padding>
    </div>
  </section>
  <section
    class="relative grid-cols-1 md:grid-cols-4 xl:grid-cols-5 hidden md:grid"
  >
    <div
      class="bg-white md:col-span-2 xl:col-span-2 md:h-full flex flex-col justify-center"
    >
      <Padding>
        <div class="uppercase font-black text-4xl xl:text-5xl text-dark">
          <p class="mb-2">Be confident</p>
          <p class="mb-2">Be beautiful</p>
          <p class="mb-4">Be you.</p>
        </div>
        <p class="text-gray-700 text-lg lg:text-xl mb-8">
          My shooting methods make it easy for you to be confident on camera.
          Live in the moment, and create memories.
        </p>
        <button
          class="uppercase py-2 pr-4 border-b-2 border-gray-800 text-dark hover:pr-8 duration-500 font-bold"
        >
          Book a shoot
        </button>
      </Padding>
    </div>
    <div
      class="bg-gray-700 md:col-span-2 xl:col-span-3 h-[600px] lg:h-screen about-img-2"
    ></div>
  </section>
  <section
    class="relative grid-cols-1 md:grid-cols-4 xl:grid-cols-5 grid md:hidden"
  >
    <div
      class="bg-gray-700 md:col-span-2 xl:col-span-3 h-[600px] lg:h-screen about-img-2"
    ></div>
    <div class="bg-white md:col-span-2 xl:col-span-2 md:h-[500px]">
      <Padding>
        <div class="uppercase font-black text-4xl sm:text-5xl text-dark">
          <p class="mb-2">Be confident</p>
          <p class="mb-2">Be beautiful</p>
          <p class="mb-4">Be you.</p>
        </div>
        <p class="text-gray-700 text-lg lg:text-xl mb-8">
          My shooting methods make it easy for you to be confident on camera.
          Live in the moment, and create memories.
        </p>
        <button
          class="uppercase py-2 pr-4 border-b-2 border-gray-800 text-dark hover:pr-8 duration-500 font-bold"
        >
          Book a shoot
        </button>
      </Padding>
    </div>
  </section>
</template>

<script>
import Padding from '../Slots/Padding.vue';

export default {
  components: {},
};
</script>

<style scoped>
.about-img-1 {
  background: url('../../assets/image-2.jpg') no-repeat center center/cover;
  filter: saturate(0.4);
}
.about-img-2 {
  background: url('../../assets/image-4.jpg') no-repeat center center/cover;
  filter: saturate(0.4);
}
</style>
