<script setup>
import router from '../router'
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

const username = router.currentRoute.value.params.username

</script>

<template>
    <header>
        <Navbar active="profile" />
    </header>
    <main>
        <div class="bg-secondary">
            <div class="container">
                <div class="p-1">
                    <h1 class="text-align-center">Profile</h1>
                    <h2>{{ username }}</h2>
                </div>
            </div>
        </div>
    </main>
    <footer>
        <Footer />
    </footer>
</template>
