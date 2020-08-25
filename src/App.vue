<template>
  <div id="app">
    <!-- navigation -->
    <!-- router ui -->
    <AppNavigation class="navigation"></AppNavigation>
    <router-view clas="view" />
  </div>
</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";
export default {
  name: "app",
  components: {
    AppNavigation
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,
body {
  margin: 0;
  height: 100%;
  width: 100%;
  background: pink;
}

#app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  background: ;
}

#code {
  background-color: beige;
}

/* Themes from Material UI 
   Blue:
   https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=1565C0&secondary.color=82B1FF 
   
   Red
   https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=C62828&secondary.color=006064
*/

.primary-color {
  /* Blue */

  /* Red */
  background: #c62828;
  color: white;
}

.primary-color-light {
  /* Blue */

  /* Red */
  background: #ff5f52;
  color: black;
}

.primary-color-dark {
  /* Blue */

  /* Red */
  background: #8e0000;
  color: white;
}

.secondary-color {
  /* Blue */

  /* Red */
  background: #006064;
  color: white;
}

.secondary-color-light {
  /* Blue */

  /* Red */
  background: #428e92;
  color: black;
}

.secondary-color-dark {
  /* Blue */

  /* Red */
  background: #00363a;
  color: white;
}

.theme-background {
  color: black;
  background: white;
}

a {
  color: inherit;
}
</style>
