import { createRouter, createWebHistory } from "vue-router"
import NotFound from '../components/NotFound.vue'
import Login from '../components/authentication/Login.vue'
import SignUp from '../components/authentication/SignUp.vue'
import CreateCompetition from '../components/competitions/CreateCompetition.vue'
import Profile from '../components/Profile.vue'

const routes = [
    {
        path: "/",
        redirect: "/global/competitions"
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
    },
    {
        path: "/global",
        redirect: "/global/competitions"
    },
    {
        path: "/global/competitions",
        redirect: "/404"                    // TODO
    },
    {
        path: "/my",
        redirect: "/my/competitions"
    },
    {
        path: "/my/competitions",
        redirect: "/"                       // TODO
    },
    {
        path: "/my/bets",
        name: "MyBets",                     // TODO
        component: NotFound
    },
    {
        path: "/competition",
        redirect: "/global/competition"
    },
    {
        path: "/create",
        redirect: "/create/competition"
    },
    {
        path: "/create/competition",
        name: "CreateCompetition",
        component: CreateCompetition
    },
    {
        path: "/profile",
        redirect: "/profile/:username"      // TODO
    },
    {
        path: "/profile/:username",         // TODO
        name: "Profile",
        component: Profile
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
