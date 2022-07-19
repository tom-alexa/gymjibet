import { createRouter, createWebHistory } from "vue-router"
import Login from '../views/authentication/Login.vue'
import SignUp from '../views/authentication/SignUp.vue'

const routes = [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        path: "/signup",
        name: "SignUp",
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
