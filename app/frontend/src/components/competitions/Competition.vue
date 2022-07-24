<script setup>
import { ref } from 'vue';
import router from '../../router';
import Navbar from '../Navbar.vue';
import Footer from '../Footer.vue';
import SelectSport from './competition/SelectSport.vue';
import SelectCompetition from './competition/SelectCompetition.vue';
import YearAndLogo from './competition/YearAndLogo.vue';
import Table from './competition/Table.vue';
import PlayOff from './competition/PlayOff.vue';
import SelectMatch from './competition/SelectMatch.vue';


const getFrom = () => {
    const backRoute = router.options.history.state.back
    if (!backRoute) {
        return ""
        // TODO
        // if no active page,
        // check if is in my competitions,
        // if not check if is in global,
        // if not, competition doesn't exist

        // if so, render in my competitions

        // if so, render competition in that section
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
        <div class="bg-secondary">
            <div class="container">
                <div class="d-flex justify-content-between flex-wraps p-4">
                    <div class="flex-fill">
                        <div class="d-flex flex-wrap">
                            <div class="">
                                <SelectSport />
                            </div>
                            <div class="">
                                <SelectCompetition />
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <YearAndLogo />
                    </div>
                    <div class="flex-fill">
                        <Table />
                    </div>
                </div>
                <div>
                    <SelectMatch />
                </div>
            </div>
        </div>
    </main>
    <footer>
        <Footer />
    </footer>

</template>
