import { createRouter, createWebHistory } from "vue-router"
import NotFound from '../components/NotFound.vue'
import Login from '../components/authentication/Login.vue'
import SignUp from '../components/authentication/SignUp.vue'
import Profile from '../components/Profile.vue'
import Competition from '../components/competitions/Competition.vue'
import GlobalCompetitions from '../components/competitions/GlobalCompetitions.vue'
import MyCompetitions from '../components/competitions/MyCompetitions.vue'

const routes = [
    {
        path: "/",
        redirect: "/global/competitions"
    },
    {
        path: "/login",
        name: "login",
        component: Login
    },
    {
        path: "/signup",
        name: "signUp",
        component: SignUp
    },
    {
        path: "/global",
        redirect: "/global/competitions"
    },
    {
        path: "/global/competitions",
        name: "globalCompetition",
        component: GlobalCompetitions
    },
    {
        path: "/my",
        redirect: "/my/competitions"
    },
    {
        path: "/my/competitions",
        name: "myCompetitions",             // TODO
        component: MyCompetitions
    },
    {
        path: "/my/bets",
        name: "myBets",                     // TODO
        component: NotFound
    },
    {
        path: "/competition",
        redirect: "/global/competitions"
    },
    {
        path: "/competitions",
        redirect: "/global/competitions"
    },
    {
        path: "/competition/:username"      // TODO
    },
    {
        path: "/competition/:username/:competitionSlug",   // TODO
        name: "competition",
        component: Competition
    },
    {
        path: "/create",
        redirect: "/create/competition"
    },
    {
        path: "/create/competition",
        name: "createCompetition",
        component: NotFound
    },
    {
        path: "/profile",
        redirect: "/profile/:username"      // TODO
    },
    {
        path: "/profile/:username",         // TODO
        name: "profile",
        component: Profile
    },
    {
        path: "/admin-of",
        redirect: "/admin-of/competitions"
    },
    {
        path: "/admin-of/competitions",
        name: "adminOfCompetitions",
        component: GlobalCompetitions       // TODO
    },
    {
        path: '/:pathMatch(.*)*',
        name: "notFound",
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
