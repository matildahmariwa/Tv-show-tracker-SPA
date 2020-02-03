<template>
  <div>
    <h4> These are the subscribed users</h4>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>name</th>
        <th>email</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in subscribers" :key="item.id">
        <td>{{ item.displayName }}</td>
        <td> {{item.email }}</td>

      </tr>
      </tbody>
    </table>
   <button>Notify Subscribers</button>
  </div>
</template>

<script>
    export default {
        name: "subscriptions",

      created() {
        this.$store.dispatch('setSubscribers')
      },
      computed: {
        subscribers() {
          return this.$store.getters.getSubscribers
        },

    }}

</script>

<style scoped>

  button{
    background-color: turquoise;
    height: 55px;
    margin-left: 238px;
    width: 390px;
    border-radius: 10px;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1) !important;
  }
  button:hover{
    background-color:white;
  }

</style>
