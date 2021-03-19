<template>
  <v-app :style="{ background: $vuetify.theme.themes[theme].background }">
    <app-header />
    <v-main>
      <v-container fluid>
        <search-results />
        <v-row class="mt-6">
          <v-col :sm="12" :md="6">
            <movie-details />
          </v-col>
          <v-col :sm="12" :md="6">
            <movie-reviews />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import MovieDetails from "./components/MovieDetails.vue";
  import MovieReviews from "./components/MovieReviews.vue";
  import SearchResults from "./components/SearchResults";

  export default {
    components: {
      SearchResults,
      AppHeader,
      MovieDetails,
      MovieReviews,
    },
    computed: {
      theme() {
        return this.$vuetify.theme.dark ? "dark" : "light";
      },
    },
  };
</script>

<style></style>
