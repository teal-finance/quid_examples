<template>
  <div>
    <h1>Quid js</h1>
    <button @click="requestData()">Request data</button>
    <p v-if="isFetching">Fetching data ...</p>
    <p v-else-if="result">{{ result }}</p>
  </div>
</template>

<script>
import requests from "@/requests";

export default {
  data() {
    return {
      result: null,
      isFetching: false,
    };
  },
  methods: {
    async requestData() {
      this.result = null;
      this.isFetching = true;
      let response = await requests.get("/");
      console.log("Resp", response);
      this.result = response.data;
      this.isFetching = false;
    },
  },
};
</script>