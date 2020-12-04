import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        themes: {
            light: {
                primary: "#1583d8",
                secondary: "#607d8b",
                accent: "#673ab7",
                error: "#f44336",
                warning: "#ff9800",
                info: "#00bcd4",
                success: "#4caf50"
            },
        },
    }
});
