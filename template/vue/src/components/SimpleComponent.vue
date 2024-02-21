<script>
import { store } from '../state/store'

export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <span class="text-success">{{ store.title }}</span>
</template>