import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/quiz',
      name: 'Quiz',
      component: () => import('../views/QuizView.vue'),
    },
    {
      path: '/quiz-answer',
      name: 'Quiz-Answer',
      component: () => import('../views/QuizAnswer.vue'),
    },
  ],
})

export default router
