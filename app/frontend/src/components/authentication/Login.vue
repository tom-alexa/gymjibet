<script setup>
defineEmits(["activePage"])

const itemContainers = "my-2 mx-3"
const inputClasses = "mx-2"


</script>

<template>
    <div class="bg-secondary">
        <div class="container py-5">
            <h1 class="d-flex justify-content-center">Login</h1>
            <div class="d-flex justify-content-center">
                <div class="">
                    <form @submit.prevent class="d-flex flex-column align-items-end border-top border-5 p-4">
                        <div :class="itemContainers">
                            <label for="username">Username or Email</label>
                            <input id="usernameEmail" :class="inputClasses" type="text">
                        </div>
                        <div :class="itemContainers">
                            <label for="password">Password</label>
                            <input id="password" :class="inputClasses" type="password">
                        </div>
                        <button type="submit" class="btn btn-dark m-3 w-50 align-self-center">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
