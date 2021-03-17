<template>
  <v-card v-if="movieDetails">
    <v-img
      :src="`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`"
    ></v-img>
    <v-card-title color="red">{{ movieDetails.title }}</v-card-title>
    <v-card-subtitle>
      <div>
        <v-icon>mdi-clock</v-icon>
        {{ movieDetails.runtime }} mins
      </div>
      <div class="mt-2">
        <v-icon>mdi-calendar</v-icon>
        Released {{ movieDetails.release_date }}
      </div>
    </v-card-subtitle>
    <v-card-text>
      {{ movieDetails.overview }}
      <v-row align-content="center" justify="space-between">
        <div class="mt-4">
          <v-chip
            class="mr-1"
            v-for="genre in movieDetails.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </v-chip>
        </div>
        <div class="py-2 mx-1 mt-1">
          <v-btn rounded @click="getStreaming(movieDetails)"
            >Where To Watch</v-btn
          >
        </div>
      </v-row>
      <div class="mt-4" v-if="streamingResults.length > 1">
        <v-chip
          class="mr-1 mb-1"
          v-for="service in streamingResults"
          :key="service.id"
          :href="service.url"
          target="_blank"
          >{{ service.display_name }}</v-chip
        >
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
  import { mapState, mapActions } from "vuex";

  export default {
    computed: {
      ...mapState(["movieDetails", "streamingResults"]),
    },
    methods: {
      ...mapActions(["getStreaming"]),
    },
  };
</script>

<style></style>
