<script setup>
import { ref } from 'vue';
import router from '../../router'
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';

const URL = ""


const globalCompetitionFromApi = {
    success: true,
    competition: {
        name: "EURO 2020",
        slug: "euro-2020",
        admin: "gymjibet",
        global: true,
        id: 1,
    }
}


const redirectToCompetition = (data) => {
    if (data.success) {
        router.push({
            name: "competition",
            params: {
                username: data.competition.admin,
                competitionSlug: data.competition.slug
            },
        })
    }
    noCompetitionsClasses.value = ""
}

// TODO: fetch data from my rest api
const fetchData = async () => {
    // const response = await fetch(URL)
    // return response.json()
    return globalCompetitionFromApi
}

fetchData().then((data) => { redirectToCompetition(data) })


const loadingClasses = ref("")
const noCompetitionsClasses = ref("d-none")

</script>

<template>
    <header>
        <Navbar active="global" />
    </header>
    <main>
        <div class="bg-secondary">
            <div class="container p-2">
                <div :class="loadingClasses">
                    <h1 class="m-5 text-center">Loading... {{ loadingClasses }}</h1>
                </div>
                <div :class="noCompetitionsClasses">
                    <h1 class="m-5 text-center">No Competitions</h1>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <Footer />
    </footer>
</template>
