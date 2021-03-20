<template>
  <v-app-bar v-if="mobile" app color="primary" dark>
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
        class="mt-6"
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
        mobile: false,
      };
    },
    methods: {
      ...mapActions(["searchMovies"]),

      handleSubmit() {
        this.searchMovies(this.query);
      },
      NotMobile() {
        let screenWidth = screen.width;
        console.log(screenWidth);
        if (+screenWidth < 600) {
          console.log("this should return true you're NOT on mobile");
          this.mobile = false;
        } else {
          console.log("this should return false you're on mobile");
          this.mobile = true;
        }
      },
    },
    mounted() {
      this.NotMobile();
    },
  };
</script>

<style scoped>
  .title-header {
    font-size: 3vw;
  }
</style>
