<template>
  <div v-if="movieReviews && movieReviews.length > 0" class="secondary">
    <h3 class="ml-2">User Reviews</h3>
    <v-list three-line class="v-list-container secondary" dark>
      <v-list-item v-for="review in movieReviews" :key="review.id">
        <v-list-item-avatar>
          <v-img
            :src="
              `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
            "
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>{{ review.author }}</v-list-item-title>
          <v-list-item-subtitle>
            {{ formatDate(review.created_at) }}
          </v-list-item-subtitle>
          <v-expansion-panels light>
            <v-expansion-panel class="background" @click="openPanel">
              <v-expansion-panel-header
                expand-icon="mdi-book-open-blank-variant"
                disable-icon-rotate
                >{{ panelHeaderText(review) }}</v-expansion-panel-header
              >
              <v-expansion-panel-content>
                {{ review.content }}
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import { dateMixin } from "../mixins/movieMixins";

  export default {
    data() {
      return {
        panelOpen: false,
      };
    },
    methods: {
      wordLimit(string, wordCount) {
        const shortendStr = string
          .split(" ")
          .splice(0, wordCount)
          .join(" ");
        console.log(shortendStr);
        return shortendStr + " ... Read More";
      },
      openPanel() {
        this.panelOpen = !this.panelOpen;
      },
      panelHeaderText(reviewObj) {
        return this.panelOpen ? "" : this.wordLimit(reviewObj.content, 15);
      },
    },
    computed: {
      ...mapState(["movieReviews"]),
    },
    mixins: [dateMixin],
  };
</script>

<style scoped>
  div {
    border-radius: 5px;
  }
  .v-list-container {
    border-radius: 5px !important;
  }
  h3 {
    color: white;
  }
</style>
