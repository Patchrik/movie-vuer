<template>
  <v-app>
    <app-header />
    <v-main>
      <v-container>
        <search-results />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
  import AppHeader from "./components/AppHeader.vue";
  import SearchResults from "./components/SearchResults.vue";
  export default {
    name: "App",

    components: { SearchResults, AppHeader },

    data: () => ({
      //
    }),
  };
</script>
