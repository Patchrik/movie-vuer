import Vue from "vue";
import Vuex from "vuex";

import { FAKE_MOVIE_DETAILS, FAKE_SEARCH_RESULTS } from "./Fake_DATA";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "home alone",
    movieResults: FAKE_SEARCH_RESULTS,
    movieDetails: FAKE_MOVIE_DETAILS,
    movieReviews: [],
  },
  mutations: {},
  actions: {},
  modules: {},
});
