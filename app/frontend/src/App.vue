    
<script setup>
import { ref } from 'vue'
import Navbar from './views/Navbar.vue'
import Footer from './views/Footer.vue'


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
