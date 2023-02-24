<template>
  <section
    id="projects"
    class="relative min-h-screen w-screen p-12 snap-start bg-gradient-to-b from-purple-300 to-red-400 dark:from-purple-700 dark:to-red-600"
  >
    <p class="font-extrabold text-7xl">Projects!</p>
    ✨tadaa✨
    <div class="grid grid-cols-4 gap-5 m-3">
      <a
        href="https://github.com/Eyepan/FlashReads-dart/tree/master/NewsApp"
        target="_blank"
        class="col-span-4 hover:bg-transparent hover:outline-double dark:hover:outline-white dark:hover:text-white transition-all ease-in-out cursor-pointer relative flex flex-row min-h-[33vh] text-purple-900 dark:text-black bg-purple-100 dark:bg-white p-5 rounded-3xl"
      >
        <img
          src="@/assets/images/projects/flashreads/newsapp_main.png"
          alt="Project Picture"
          class="rounded-xl md:ml-[5vw] md:w-[33vw] lg:ml-[10vw] lg:w-1/4 mr-5 bg-[50%_100%] hover:-translate-y-10 ease-in-out transition"
        />
        <div class="m-3 absolute left-1/2 right-3 text-right">
          <div class="text-5xl font-extrabold">FlashReads</div>
          <div class="mt-5 text-xl">
            Consolidated newsfeed app developed using Dart and Flutter. Used The
            Washington Post's API to fetch articles and scraped articles using
            Selenium.
          </div>
        </div>
      </a>

      <a
        href="https://github.com/Eyepan/notime-vue"
        target="_blank"
        class="col-span-3 hover:bg-transparent hover:outline-double dark:hover:outline-white dark:hover:text-white transition-all ease-in-out cursor-pointer relative flex flex-row min-h-[33vh] text-purple-900 dark:text-black bg-purple-100 dark:bg-white p-5 rounded-3xl"
      >
        <div class="m-3 left-3">
          <div class="text-3xl font-extrabold">Notime</div>
          <div class="mt-5 text-m">
            Note-taking application that mimics how you take notes in real life
          </div>
        </div>
        <img
          src="@/assets/images/projects/notime/notime-screenshot.png"
          alt=""
          srcset=""
          class="rounded-xl w-[48%] hover:-translate-y-10 transition-all ease-in-out"
        />
      </a>

      <a
        href="https://github.com/Eyepan/scoopman"
        target="_blank"
        class="col-span-1 hover:bg-transparent hover:outline-double dark:hover:outline-white dark:hover:text-white transition-all ease-in-out cursor-pointer relative flex flex-row min-h-[33vh] text-purple-900 dark:text-black bg-purple-100 dark:bg-white p-5 rounded-3xl"
      >
        <div class="m-3">
          <div class="text-2xl font-extrabold">Scoopman</div>
          <div class="mt-5 text-m">
            An Arch-Pacman like wrapper for scoop.sh written in C++.
          </div>
        </div>
      </a>

      <a
        href="https://github.com/Eyepan/dev-portfolio"
        target="_blank"
        class="col-span-2 hover:bg-transparent hover:outline-double dark:hover:outline-white dark:hover:text-white transition-all ease-in-out cursor-pointer relative flex flex-row min-h-[33vh] text-purple-900 dark:text-black bg-purple-100 dark:bg-white p-5 rounded-3xl"
      >
        <div class="m-3">
          <div class="text-3xl font-extrabold">Portfolio</div>
          <div class="mt-5 text-m">You're seeing it right now!</div>
        </div>
      </a>

      <a
        href="https://github.com/Eyepan/spotify-clone-vue"
        target="_blank"
        class="col-span-1 hover:bg-transparent hover:outline-double dark:hover:outline-white dark:hover:text-white transition-all ease-in-out cursor-pointer relative flex flex-row min-h-[33vh] text-purple-900 dark:text-black bg-purple-100 dark:bg-white p-5 rounded-3xl"
      >
        <div class="m-3">
          <div class="text-3xl font-extrabold">spotify-clone</div>
          <div class="mt-5 text-m">Spotify Clone with Gesture Recognition</div>
        </div>
      </a>
      <a
        href="https://github.com/Eyepan"
        target="_blank"
        class="col-span-1 text-xl hover:text-3xl bg-transparent outline hover:outline-none dark:outline-white dark:text-white transition-all ease-in-out cursor-pointer relative flex flex-row min-h-[33vh] text-purple-900 hover:bg-green-100 dark:hover:bg-green-500 p-5 rounded-3xl"
      >
        <div class="m-3">
          <div class="mt-5">And a lot more!</div>
        </div>
      </a>
    </div>
  </section>
</template>
