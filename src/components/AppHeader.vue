<template>
  <v-app-bar v-if="!isMobile" app color="primary" dark>
    <v-app-bar-title>Where To Vue</v-app-bar-title>
    <v-spacer></v-spacer>
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="query"
        dense
        rounded
        filled
        placeholder="Search movie titles"
        background-color="indigo darken-2"
        prepend-inner-icon="mdi-magnify"
        class="mt-6"
      ></v-text-field>
    </form>
  </v-app-bar>
  <v-app-bar v-else app color="primary" dark>
    <form @submit.prevent="handleSubmit">
      <v-text-field
        v-model="query"
        dense
        rounded
        filled
        placeholder="Where To Vue"
        background-color="indigo darken-2"
        prepend-inner-icon="mdi-magnify"
        class="mt-6 ml-15"
      ></v-text-field>
    </form>
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
    computed: {
      isMobile() {
        let screenWidth = screen.width;
        if (screenWidth < 600) {
          return true;
        } else {
          return false;
        }
      },
    },
  };
</script>

<style scoped>
  .title-header {
    font-size: 3vw;
  }
</style>
