<script setup lang="ts">
import Socials from "./Socials.vue";
</script>

<template>
  <section
    id="contact"
    class="relative min-h-screen w-screen p-12 snap-start bg-red-300 dark:bg-red-600"
  >
    <p
      class="font-extrabold text-6xl dark:hover:text-red-200 hover:text-red-700 hover:tracking-widest transition-all ease-in-out"
    >
      Let's not be strangers
    </p>
    <p class="text-4xl mt-20 text-neutral-400 dark:text-neutral-200">
      A curated list of my socials:
    </p>
    <Socials />

    <p class="text-3xl mt-20 text-neutral-400 dark:text-neutral-200">
      And here's my &gt
      <a
        href="https://drive.google.com/file/d/11wbrgaH6HBxQrBXw65DLM9qQ30ttSIST/view?usp=share_link"
        target="_blank"
        class="link link-underline link-underline-black"
        >resume</a
      >
      &lt;
    </p>

    <div class="w-[100vw] absolute bottom-10 text-center">
      ©️ Iyappan G S | 2023
    </div>
  </section>
</template>

<style scoped>
.link-underline {
  border-bottom-width: 100;
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#000, #000);
  background-size: 0 3px;
  background-position: 0 100%;
  background-repeat: no-repeat;
  transition: background-size 0.2s ease-in-out;
}

.link-underline-black {
  background-image: linear-gradient(transparent, transparent),
    linear-gradient(#fff, #fff);
}

.link-underline:hover {
  background-size: 100% 3px;
  background-position: 0 100%;
}
</style>
