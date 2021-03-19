import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.purple.darken4,
        secondary: colors.indigo.darken4,
        accent: colors.shades.black,
        error: colors.pink.darken3,
        background: colors.deepPurple.lighten5,
        text: colors.shades.white,
      },
      dark: {
        primary: colors.blue.lighten3,
        background: colors.deepPurple.darken4,
      },
    },
  },
});
