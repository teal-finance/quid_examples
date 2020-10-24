<template>
  <div class="main">
    <div class="vertical-center" v-if="!isLoggedIn">
      <div class="inner-block">
        <the-login @logged-in="isLoggedIn = true"></the-login>
      </div>
    </div>
    <div v-else>
      <the-requests></the-requests>
    </div>
  </div>
</template>

<script>
import TheLogin from "@/components/TheLogin.vue";
import TheRequests from "@/components/TheRequests";

export default {
  name: "App",
  components: {
    TheLogin,
    TheRequests,
  },
  data() {
    return {
      isLoggedIn: false,
    };
  },
};
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
