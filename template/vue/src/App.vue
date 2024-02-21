<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
    components: {

    }
}
</script>

<template>
    <header class="d-flex border-bottom border-dark-subtle border-1">
        <nav class="w-100 navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <RouterLink class="nav-link" to="/">Home</RouterLink>
                        <RouterLink class="nav-link" to="/about">About</RouterLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>

    <main class="pt-2">
        <RouterView />
    </main>
</template>

<style scoped>
header {
    height: 100px;
}

main {
    height: calc(100vh - 100px);
    background-color: #F8F9FA;
}
</style>
