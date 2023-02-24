<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import Socials from "./Socials.vue";
const { loader } = storeToRefs(useAppStore());
const showPicture = ref(false);

async function incrementLoader() {
  let intervalId = setInterval(() => {
    loader.value += 0.2;
    console.log(loader.value);
    if (loader.value > 1.2) {
      clearInterval(intervalId); // Stop the interval
    }
  }, 300);
}

incrementLoader();

function showVisible(amount: number) {
  return loader.value > amount ? 1 : 0;
}
</script>

<template>
  <section id="home" class="min-h-screen w-screen p-12 snap-start">
    <p class="text-7xl">Hi! I'm</p>
    <div class="flex flex-row justify-between">
      <p
        @mouseover="showPicture = true"
        @mouseleave="showPicture = false"
        class="inline py-4 font-black tracking-wide text-9xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600 hover:text-purple-500 hover:tracking-widest hover:font-light ease-in-out transition-all"
      >
        IYAPPAN
      </p>
      <img
        v-show="showPicture"
        src="https://eyepan.github.io/cv/images/iyappan.png"
        alt=""
        srcset=""
        class="inline transition-all"
      />
    </div>
    <div class="flex flex-row text-3xl text-gray-700 dark:text-gray-400">
      <div
        :style="{ opacity: showVisible(0.2) }"
        class="hover:text-blue-500 hover:tracking-widest transition-all ease-in-out"
      >
        Engineer
      </div>
      <div :style="{ opacity: showVisible(0.4) }" class="px-2">|</div>
      <div
        :style="{ opacity: showVisible(0.6) }"
        class="hover:text-green-500 hover:tracking-widest transition-all ease-in-out"
      >
        Full Stack Developer
      </div>
      <div class="px-2" :style="{ opacity: showVisible(0.8) }">|</div>
      <div
        :style="{ opacity: showVisible(1.0) }"
        class="hover:text-red-500 hover:tracking-widest transition-all ease-in-out"
      >
        Problem Solver
      </div>
    </div>
    <div class="absolute bottom-8 right-8">Scroll down to see more</div>

    <Socials :style="{ opacity: showVisible(1.2) }" />
  </section>
</template>

<style scoped>
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
