import Vue from "vue";
import Vuex from "vuex";

import { FAKE_SEARCH_RESULTS, FAKE_MOVIE_DETAILS } from "./FAKE_DATA";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "home alone",
    movieResults: FAKE_SEARCH_RESULTS,
    movieDetails: FAKE_MOVIE_DETAILS,
    movieReviews: [],
  },
  mutations: {
    setSearchTerm(state, newSearchTerm) {
      state.searchTerm = newSearchTerm;
    },
    setMovieResults(state, newMovieResults) {
      state.movieResults = newMovieResults;
    },
    setMovieDetails(state, newMovieDetails) {
      state.movieDetails = newMovieDetails;
    },
    setMovieReviews(state, newMovieReviews) {
      state.movieReviews = newMovieReviews;
    },
  },
  actions: {
    async searchMovies({ commit }, searchString) {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = process.env.VUE_APP_MOVIE_API_KEY;
      const url = `${apiBaseUrl}/search/movie?query=${searchString}&api_key=${apiKey}`;

      try {
        const res = await fetch(url);
        const data = await res.json();
        commit("setSearchTerm", searchString);
        commit("setMovieResults", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
