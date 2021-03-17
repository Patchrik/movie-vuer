<template>
  <div v-if="movieReviews && movieReviews.length > 0">
    <h3 class="red--text">User Reviews</h3>
    <v-list three-line>
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
          <v-expansion-panels inset>
            <v-expansion-panel>
              <v-expansion-panel-header
                expand-icon="mdi-book-open-blank-variant"
                >{{ wordLimit(review.content, 15) }}</v-expansion-panel-header
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
    methods: {
      wordLimit(string, wordCount) {
        const shortendStr = string
          .split(" ")
          .splice(0, wordCount)
          .join(" ");
        console.log(shortendStr);
        return shortendStr + " ... Read More";
      },
    },
    computed: {
      ...mapState(["movieReviews"]),
    },
    mixins: [dateMixin],
  };
</script>
