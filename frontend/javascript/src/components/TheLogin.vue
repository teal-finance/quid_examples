<template>
  <b-card title="Login" style="max-width: 20rem" class="mb-2">
    <b-form @submit.prevent="postForm">
      <b-card-text>
        <b-form-group>
          <b-form-input
            v-model="form.username"
            placeholder="name"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-input
            type="password"
            v-model="form.password"
            placeholder="password"
          ></b-form-input>
        </b-form-group>
      </b-card-text>
      <b-button variant="primary" type="submit">Submit</b-button>
    </b-form>
  </b-card>
</template>

<script>
import requests from "@/requests";
import Conf from "@/conf";

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async postForm() {
      console.log("POST FORM");
      try {
        await requests.getRefreshToken({
          namespace: Conf.namespace,
          username: this.form.username,
          password: this.form.password,
        });
        console.log("Logged in", requests.refreshToken);
        this.$emit("logged-in");
      } catch (error) {
        console.log("ERR", error);
        if (error.unauthorized) {
          console.log("Unauthorized");
          return;
        }
        throw error.error;
      }
    },
  },
};
</script>
