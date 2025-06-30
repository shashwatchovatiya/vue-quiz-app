<!-- <script setup lang="ts"></script>

<template>
  <main>This is Quiz answer</main>
</template> -->

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface Question {
  id: number
  question: string
  options: string[]
  answer: string
  selectedAnswer?: string
}

const answeredQuestions = ref<Question[]>([])

onMounted(() => {
  const data = localStorage.getItem('quizAnswers')
  if (data) {
    answeredQuestions.value = JSON.parse(data)
  }
})
// onMounted(() => {
//   const data = localStorage.getItem('quizAnswers')
//   if (data) {
//     const raw = JSON.parse(data)
//     answeredQuestions.value = raw.map((q: Question) => ({
//       ...q,
//       answer: q.answer.trim(),
//       selectedAnswer: q.selectedAnswer?.trim(),
//       options: q.options.map(o => o.trim()),
//     }))
//   }
// })
console.log(answeredQuestions)
</script>

<template>
  <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Your Answers</h2>

    <div v-for="q in answeredQuestions" :key="q.id" class="mb-4 p-4 border rounded shadow">
      <p class="mb-2 font-medium">{{ q.question }}</p>
      <ul class="space-y-1">
        <li
          v-for="opt in q.options"
          :key="opt"
          class="p-2 border rounded"
          :class="{
            'bg-green-200': opt === q.answer,
            'bg-red-200': opt === q.selectedAnswer && q.selectedAnswer !== q.answer,
          }"
        >
          {{ opt }}
          <span v-if="opt === q.answer">✅</span>
          <span v-else-if="opt === q.selectedAnswer && q.selectedAnswer !== q.answer">❌</span>
        </li>
      </ul>
      <p class="mt-2 text-sm">
        Your Answer: <strong>{{ q.selectedAnswer || 'No answer' }}</strong>
      </p>
      <p class="mt-2 text-sm">
        Correct Answer: <strong>{{ q.answer }}</strong>
      </p>
    </div>
  </div>

  <RouterLink to="/quiz">Retake Quiz</RouterLink>
</template>
