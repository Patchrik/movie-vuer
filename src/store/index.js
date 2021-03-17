import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchTerm: "",
    movieResults: [],
    movieDetails: null,
    movieReviews: [],
    streamingResults: [],
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
    setStreamingResults(state, newStreamingResults) {
      state.streamingResults = newStreamingResults;
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
        commit("setMovieDetails", null);
        commit("setMovieReviews", []);
        commit("setStreamingResults", []);
      } catch (error) {
        console.log(error);
      }
    },

    async selectMovie({ commit }, movie) {
      const apiBaseUrl = "https://api.themoviedb.org/3";
      const apiKey = process.env.VUE_APP_MOVIE_API_KEY;
      const movieDetailsURL = `${apiBaseUrl}/movie/${movie.id}?api_key=${apiKey}`;
      const movieReviewURL = `${apiBaseUrl}/movie/${movie.id}/reviews?api_key=${apiKey}`;

      try {
        const movieDetailsRes = fetch(movieDetailsURL);
        const movieReviewRes = fetch(movieReviewURL);
        // We're allowing both of these to fire at the same time, so that if one takes 2 sec and the other takes 1 sec we're only waiting 2 secs
        const [movieDetailsData, movieReviewData] = await Promise.all([
          // Here we're again making using await. We're waiting for movieDetailsRes and movieReviewRes to receive the data. Then we're running .json() to convert the Res to usable
          // data then placing it in two variables called movieDetailsData and movieReviewData.
          (await movieDetailsRes).json(),
          (await movieReviewRes).json(),
        ]);

        commit("setMovieDetails", movieDetailsData);
        commit("setMovieReviews", movieReviewData.results);
        commit("setStreamingResults", []);
      } catch (error) {
        console.log(error);
      }
    },

    async getStreaming({ commit }, movieDetails) {
      const utellyKey = process.env.VUE_APP_UTELLY_KEY;
      const selectedMovieIMDBid = movieDetails.imdb_id;
      const utellyURL = `https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=${selectedMovieIMDBid}&source=imdb&country=us`;

      console.log(
        "This is the movie details that is passed in to the getStreaming",
        movieDetails
      );

      try {
        const res = await fetch(utellyURL, {
          method: "GET",
          headers: {
            "x-rapidapi-key": utellyKey,
            "x-rapidapi-host":
              "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          },
        });
        const data = await res.json();

        commit("setStreamingResults", data.collection.locations);

        console.log(data);
      } catch (error) {
        console.log("ERROR!", error);
      }
    },
  },
  modules: {},
  getters: {
    viewableMovies(state) {
      if (!state.movieResults.results) {
        return [];
      }
      return state.movieResults.results.filter((movie) => !!movie.poster_path);
    },
  },
});
