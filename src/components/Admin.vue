<template>
    <div>
        <h4 id="welcome">ADMIN DASHBOARD</h4>
        <div>
            <button @click="selectedComponent = 'adminMovies'" class="bins">Add Visitor</button>
            <button @click="selectedComponent = 'add'" class="bins">All Visitors</button>
            <button @click="selectedComponent = 'subscriptions'" class="bins">All Visitors</button>
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

