<script>
import { store } from '../state/store'

export default {
    name: "CustomComponent",
    data() {
        return {
            store
        }
    },
    methods: {
        addCounter() {
            store.counter++;
        }
    },
    mounted() {
        console.log("CustomComponent mounted")
    },
}

</script>

<template>
    <div class="ms-2 me-auto">
        <div class="fw-bold">Components like this one!</div>
        <button class="btn btn-secondary" @click="addCounter">Click me!</button>
    </div>
    <span class="badge bg-primary rounded-pill">{{ store.counter }}</span>
</template>

<style scoped></style>