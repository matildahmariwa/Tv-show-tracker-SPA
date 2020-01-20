<template>
    <div>
        <h4 id="welcome">ADMIN DASHBOARD</h4>
        <div>
            <button @click="selectedComponent = 'adminMovies'" class="bins">All movies</button>
            <button @click="selectedComponent = 'add'" class="bins">Add Movie</button>
            <button @click="selectedComponent = 'ad'" class="bins">Active subscriptions</button>
        </div>
        <div class="">
            <keep-alive>
                <component :is="selectedComponent"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    import adminMovies from '../components/adminMovies'
    import add from '../components/addMovie'
    import subscriptions from "./subscriptions";
    export default {
        name: 'app',
        components: {
            adminMovies,
            add,
            subscriptions
        },
        data() {
            return {
                selectedComponent: 'adminMovies',
                show: false
            }
        }

    }
</script>

