<script setup>
import { ref, watch } from 'vue';
import router from '../router'


const updateNavbar = () => {

  var back = r.value.options.history.state.back;
  var current = r.value.options.history.state.current;

  back = back.split("/")
  current = current.split("/")

  if (current[1] === "login") {
    active.value = "login";
  }
  else if (current[1] === "signup") {
    active.value = "signUp";
  }
  else if (current[1] === "profile") {
    active.value = "profile"
  }
  else if (current[1] === "my") {
    if (current[2] === "competitions") {
      active.value = "myCompetitions";
    }
    else if (current[2] === "bets") {
      active.value = "myBets";
    }
  }
  else if (current[1] === "create") {
    active.value = "create"
  }
  else {
    active.value = ""
  }

  pages.value.login = isActive("login")
  pages.value.signUp = isActive("signUp")
  pages.value.profile = isActive("profile")
  pages.value.global = isActive("global")
  pages.value.myCompetition = isActive("myCompetitions")
  pages.value.myBets = isActive("myBets")
  pages.value.create = isActive("create")

}

const isActive = (name) => {
  if (name === active.value) {
    return true;
  };
  return false;
}

const active = ref(String)
const pages = ref({
  login: false,
  signUp: false,
  profile: false,
  global: false,
  myCompetition: false,
  myBets: false,
  create: false,
});

const r = ref(router)
updateNavbar()
watch(r.value, updateNavbar)


const styleActive = "link-light"

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
            <router-link to="/my/competitions" class="navbar-brand" :class="[pages.myCompetition ? styleActive : '']">
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
