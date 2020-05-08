<template>
  <div>
    <div>Home</div>
    <ul v-if="user">
      <li>{{user.name}}</li>
      <li>{{user.email}}</li>
      <li>{{user._id}}</li>
    </ul>
    <div>
      <button class="btn btn-primary" @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    user() {
      return this.$store.state.auth.user;
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  }
};
</script>