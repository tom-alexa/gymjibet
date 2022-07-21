<script setup>
import { ref } from 'vue';
import router from '../../router';
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';


const getFrom = () => {
    const backRoute = router.options.history.state.back
    if (!backRoute) {
        return ""
    }
    const from = backRoute.split("/")
    if (from[1] === "global") {
        if (from[2] === "competitions") {
            return "global"
        }
    }
    else if (from[1] === "my") {
        if (from[2] === "competitions") {
            return "myCompetitions"
        }
    }
    return ""
}
const activePage = getFrom()


</script>

<template>
    <header>
        <Navbar :active="activePage" />
    </header>
    <main>
    </main>
    <footer>
        <Footer />
    </footer>

</template>
