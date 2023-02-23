<template>
  <section
    id="projects"
    class="relative min-h-screen w-screen p-10 snap-start bg-gradient-to-b from-purple-300 to-red-400 dark:from-purple-700 dark:to-red-600"
  >
    <p class="font-extrabold text-7xl">Projects!</p>
    ✨tadaa✨
    <a
      href="https://github.com/Eyepan/FlashReads-dart/tree/master/NewsApp"
      target="_blank"
      class="cursor-pointer relative flex flex-row max-h-[45vh] text-purple-900 dark:text-black bg-purple-100 dark:bg-white m-7 p-5 rounded-3xl"
    >
      <img
        src="@/assets/images/projects/flashreads/newsapp_main.png"
        alt="Project Picture"
        class="w-[33vw] mr-5 object-cover bg-[50%_100%]"
      />
      <div class="m-5">
        <div class="text-5xl font-bold">FlashReads</div>
        <div class="mt-5 text-xl xl:text-3xl">
          Consolidated newsfeed app developed using Dart and Flutter. Used The
          Washington Post's API to fetch articles and scraped articles using
          Selenium.
        </div>
      </div>
    </a>

    <div class="absolute bottom-8 right-8">One last final scroll</div>
  </section>
</template>
