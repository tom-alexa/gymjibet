<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'


</script>

<template>
  <header>
    <Navbar />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <Footer />
  </footer>

</template>
