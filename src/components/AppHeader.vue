<template>
  <v-app-bar app color="primary" dark>
    <v-row justify="space-between" align="center">
      <v-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6">
        <div class="d-flex align-center title-header">
          <h1 class="ma-1 pa-1">where to vue</h1>
        </div>
      </v-col>

      <v-col :sm="2" class="mt-5">
        <form @submit.prevent="handleSubmit">
          <v-text-field
            v-model="query"
            dense
            rounded
            filled
            placeholder="Search movie titles"
            background-color="indigo darken-2"
            prepend-inner-icon="mdi-magnify"
            class="search-box"
          ></v-text-field>
        </form>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
  import { mapActions } from "vuex";

  export default {
    data() {
      return {
        query: "",
      };
    },
    methods: {
      ...mapActions(["searchMovies"]),

      handleSubmit() {
        this.searchMovies(this.query);
      },
    },
  };
</script>

<style scoped>
  .title-header {
    font-size: 3vw;
  }
</style>
