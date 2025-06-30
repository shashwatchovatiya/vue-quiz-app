<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-[#5f6e75] text-white">
    <nav class="flex justify-between items-center container mx-auto md:px-10 px-4 py-2">
      <nav class="flex items-center justify-center">
        <img alt="Vue logo" class="logo text" src="@/assets/logo.svg" width="50" height="50" />
        <div>Quiz App</div>
      </nav>

      <div class="wrapper">
        <nav class="flex space-x-6">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/quiz">Quiz Page</RouterLink>
          <RouterLink to="/quiz-answer">Quiz Answer</RouterLink>
        </nav>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
