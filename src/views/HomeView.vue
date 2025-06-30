<script setup lang="ts"></script>

<template>
  <!-- <main>This is my Home View component.</main> -->
  <section>
    <div class="max-w-3xl mx-auto px-4 py-16">
      <h1 class="text-xl font-bold my-10">
        Hello to Our quiz app built with Vue.js and Tailwind CSS!
      </h1>
      <p class="text-start text-gray-700 mb-6">
        This app is designed to provide an engaging and interactive quiz experience. You can test
        your knowledge across various topics and track your progress.
      </p>
      <div>
        <h2>In below i am listing my all page</h2>
        <div class="flex flex-col justify-center items-start space-y-4 mt-10">
          <RouterLink
            class="bg-[#869ea3] text-white px-4 py-2 hover:bg-[#5f6e75] transition duration-300 rounded-[10px] shadow-2xl hover:-translate-y-2"
            to="/"
            >Home</RouterLink
          >
          <RouterLink
            class="bg-[#869ea3] text-white px-4 py-2 hover:bg-[#5f6e75] transition duration-300 rounded-[10px] shadow-2xl hover:-translate-y-2"
            to="/about"
            >About</RouterLink
          >
          <RouterLink
            class="bg-[#869ea3] text-white px-4 py-2 hover:bg-[#5f6e75] transition duration-300 rounded-[10px] shadow-2xl hover:-translate-y-2"
            to="/quiz"
            >Quiz Page</RouterLink
          >
          <RouterLink
            class="bg-[#869ea3] text-white px-4 py-2 hover:bg-[#5f6e75] transition duration-300 rounded-[10px] shadow-2xl hover:-translate-y-2"
            to="/quiz-answer"
            >Quiz Answer</RouterLink
          >
        </div>
      </div>
    </div>
  </section>
</template>
