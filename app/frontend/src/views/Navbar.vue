<template>
  <div class="bg-dark navbar-fixed-top">
    <div class="container py-2">
      <nav class="navbar navbar-expand-sm">
        <div class="container-fluid">
          <div>
            <router-link to="/" class="navbar-brand link-warning h1 me-4">
              <img src="/public/money.png" alt="logo" width="40" height="30" class="m-1" />
              GymjiBet
            </router-link>
            <router-link to="/global/competitions" class="navbar-brand">
              Global
            </router-link>
            <router-link to="/my/competitions" class="navbar-brand">
              My competitions
            </router-link>
            <router-link to="/my/bets" class="navbar-brand link-light">
              My bets
            </router-link>
            <router-link to="/create/competition" class="navbar-brand">
              Create
            </router-link>
          </div>
          <div>
            <input type="text" placeholder="Search..." class="px-3 me-4 py-1" />
            <router-link to="/login" class="navbar-brand">Login</router-link>
            <router-link to="/signup" class="navbar-brand">Sign up</router-link>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>

</script>
