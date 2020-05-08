<template>
  <div class="col-md-12">
    <div class="card card-container">
      <img
        src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
        id="profile-img"
        alt
        class="profile-img-card"
      />
      <form name="form" @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="user.name" class="form-control" name="name" />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="user.email" class="form-control" name="email" />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="user.password" class="form-control" name="password" />
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block" type="submit">Sign Up</button>
        </div>
      </form>

      <div v-if="message" class="alert alert-danger">{{message}}</div>
    </div>
  </div>
</template>

<script>
import User from "../models/user";

export default {
  name: "Register",
  data() {
    return {
      user: new User("", "", ""),
      submitted: false,
      message: ""
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },
  methods: {
    handleRegister() {
      this.message = "";
      if (this.user.name && this.user.email && this.user.password) {
        this.$store.dispatch("auth/register", this.user).then(
          () => {
            this.$router.push("/");
          },
          error => {
            this.message = error.response.data.message;
          }
        );
      }
    }
  }
};
</script>

<style scoped>
label {
  display: block;
  margin-top: 10px;
}

.card-container.card {
  max-width: 350px;
  padding: 40px 40px;
}

.card {
  background-color: #f7f7f7;
  padding: 20px 25px 30px;
  margin: 0 auto 25px;
  margin-top: 50px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.profile-img-card {
  width: 96px;
  height: 96px;
  margin: 0 auto 10px;
  display: block;
  border-radius: 50%;
}
</style>