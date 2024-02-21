<script>
import SimpleComponent from './SimpleComponent.vue';
import CustomComponent from './CustomComponent.vue';
export default {
    name: "TheWelcome",
    components: {
        SimpleComponent,
        CustomComponent
    }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>Welcome to your new project!</h2>
                </div>
                <div class="col-6">
                    <h3>Built with:</h3>
                    <ul class="list-group list-group-flush bg-transparent">
                        <li class="list-group-item"><a class="vue-color fw-bold text-decoration-none"
                                href="https://vuejs.org/">Vite + Vue 3</a>
                        </li>
                        <li class="list-group-item"><a class="bootstrap-color text-decoration-none"
                                href="https://getbootstrap.com/">Bootstrap</a></li>
                    </ul>

                    <h3>Enhanced with</h3>
                    <ul class="list-group list-group-flush bg-transparent">
                        <li class="list-group-item"><a class="router-color text-decoration-none" href="">Vue Router</a></li>
                        <li class="list-group-item">
                            <SimpleComponent />
                        </li>
                        <li class="list-group-item"><a class="fw-bold"
                                href="https://github.com/Giuliano1993/make-js-component">Make JS
                                Component</a> to create:
                            <div
                                class="d-flex justify-content-between align-items-start p-2 border border-dark-subtle border-1 rounded">
                                <CustomComponent />
                            </div>
                        </li>
                        <li class="list-group-item"><a class="vitest-color text-decoration-none"
                                href="https://vitest.dev/">Vitest</a></li>
                        <li class="list-group-item"><a class="sass-color" href="https://sass-lang.com/">Sass</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.sass-color {
    color: #CF649A;
}

.vitest-color {
    color: #1B1B1F;
    text-shadow: 4px 3px 5px rgba(252, 199, 43, 0.79);

}

.vue-color {
    color: #42D392;
}

.router-color {
    color: #34495E;
}

.bootstrap-color {
    color: #702CF6;
}
</style>