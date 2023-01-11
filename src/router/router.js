import {createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/pages/MainPage'
import LessonsListPage from '@/pages/LessonsListPage'
import LessonPage from '@/pages/LessonPage'

// import ListPage from '@/pages/ListPage'
// import AboutPage from '@/pages/AboutPage'

const routes = [
    {
        path: '/',
        name: "main",
        component: MainPage
    },
    {
        path: '/lessons',
        name: "lessonsList",
        component: LessonsListPage
    },
    {
        path: '/lessons/:id',
        name: "lesson",
        component: LessonPage
    }
]

const router = createRouter({
    routes,
    history: createWebHistory (process.env.BASE_URL)
})

export default router;