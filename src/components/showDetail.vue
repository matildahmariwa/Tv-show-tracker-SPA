<template>
    <div>
<!--        {{ item.genre }}<br/>-->
<!--        {{ item.rating }}<br/>-->
<!--        {{ item.cast }}<br/>-->
        {{$route.params.id}}
    </div>
</template>

<script>
    export default {
        name: "showMovie"
    }
</script>

<style scoped>

</style>
