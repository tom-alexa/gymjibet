<script setup>
import { ref } from 'vue';

const props = defineProps(["active"])  // props sended from template


// each navbar link gets boolean value if is active
const isActive = (name) => {
  if (name === props.active) {
    return true;
  };
  return false;
}

// define navbar link values
const pages = ref({
  login: isActive("login"),
  signUp: isActive("signUp"),
  profile: isActive("profile"),
  global: isActive("global"),
  myCompetitions: isActive("myCompetitions"),
  myBets: isActive("myBets"),
  create: isActive("create"),
});


const styleActive = "link-warning border-bottom border-2"  // style for active navbar link

</script>

<template>
  <div class="bg-dark navbar-fixed-top">
    <div class="container py-2">
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <div>
            <router-link to="/" class="navbar-brand link-warning h1 me-4">
              <img src="/money.png" alt="logo" width="40" height="30" class="m-1" />
              GymjiBet
            </router-link>
            <router-link to="/global/competitions" class="navbar-brand" :class="[pages.global ? styleActive : '']">
              Global
            </router-link>
            <router-link to="/my/competitions" class="navbar-brand" :class="[pages.myCompetitions ? styleActive : '']">
              My competitions
            </router-link>
            <router-link to="/my/bets" class="navbar-brand" :class="[pages.myBets ? styleActive : '']">
              My bets
            </router-link>
            <router-link to="/create/competition" class="navbar-brand" :class="[pages.create ? styleActive : '']">
              Create
            </router-link>
          </div>
          <div>
            <input type="text" placeholder="Search..." class="px-3 me-4 py-1" />
            <router-link to="/login" class="navbar-brand" :class="[pages.login ? styleActive : '']">Login
            </router-link>
            <router-link to="/signup" class="navbar-brand" :class="[pages.signUp ? styleActive : '']">Sign up
            </router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>
