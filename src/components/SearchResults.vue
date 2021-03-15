<template>
  <v-sheet v-if="searchTerm" elevation="1" class="mx-auto" max-width="1000">
    <h3 class="pl-5 mt-5">
      Found {{ movieResults.total_results }} results for "{{ searchTerm }}"
    </h3>

    <v-slide-group class="pb-5" show-arrows>
      <v-slide-item v-for="movie in movieResults.results" :key="movie.id">
        <v-img
          contain
          :src="`https://image.tmdb.org/t/p/w200${movie.poster_path}`"
          height="200"
          width="150"
        ></v-img>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    computed: {
      ...mapState(["movieResults", "searchTerm"]),
    },
  };
</script>

<style></style>
