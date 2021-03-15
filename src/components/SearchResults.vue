<template>
  <div v-if="searchTerm">
    <h3>
      Found {{ movieResults.total_results }} results for "{{ searchTerm }}"
    </h3>
    <div v-for="movie in movieResults.results" :key="movie.id">
      {{ movie.title }}
    </div>
  </div>
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
