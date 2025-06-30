<script setup lang="ts">
import { ref, watch } from 'vue'
import question from '@/assets/question.json'
import { useRouter } from 'vue-router'

interface Question {
  id: number
  question: string
  options: string[]
  answer: string
  selectedAnswer?: string
}

const router = useRouter()

const questions = ref<Question[]>([...question].sort(() => 0.5 - Math.random()).slice(0, 4))

const currentQuestionIndex = ref(0)

function finishQuiz() {
  localStorage.setItem('quizAnswers', JSON.stringify(questions.value))
  router.push('/quiz-answer')
}

// Watch and update localStorage whenever answers change
watch(
  questions,
  (newVal) => {
    localStorage.setItem('quizAnswers', JSON.stringify(newVal))
  },
  { deep: true },
)

function selectAnswer(option: string) {
  questions.value[currentQuestionIndex.value].selectedAnswer = option
}

function nextQuestion() {
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++
  } else {
    router.push('/quiz-answer') // navigate to AnswerPage
  }
}
</script>

<template>
  <div class="p-6 max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">Quiz</h2>

    <div class="p-4 border rounded shadow">
      <p class="font-semibold">
        {{ currentQuestionIndex + 1 }}. {{ questions[currentQuestionIndex].question }}
      </p>
      <ul class="mt-4 space-y-2">
        <li
          v-for="opt in questions[currentQuestionIndex].options"
          :key="opt"
          @click="selectAnswer(opt)"
          :class="{
            'bg-green-200': questions[currentQuestionIndex].selectedAnswer === opt,
            'hover:bg-blue-100': true,
          }"
          class="p-2 border rounded cursor-pointer"
        >
          {{ opt }}
        </li>
      </ul>
      <div class="mt-4 flex justify-end">
        <button
          class="px-4 py-2 bg-blue-600 text-white rounded"
          :disabled="!questions[currentQuestionIndex].selectedAnswer"
          @click="nextQuestion"
        >
          {{ currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next' }}
        </button>
      </div>

      <button @click="finishQuiz" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
        Submit Quiz
      </button>
    </div>
  </div>
</template>
