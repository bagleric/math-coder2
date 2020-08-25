<template>
  <div id="app" class="theme-background">
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
  /* background: pink; */
}

#app {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
}

#code {
  background-color: beige;
}

.card {
  box-shadow: 0 0px 8px 0px rgba(0, 0, 0, 0.2);
  place-content: center;
  padding: 1em;
  margin: 1em;
  background: white;
  border-radius: 5px;
  transition: ease 0.2s;
  display: grid;
  place-content: center;
  font-size: larger;
}

a.card {
  text-decoration-line: none;
}

.card:hover {
  box-shadow: 0 0px 8px 2px rgba(0, 0, 0, 0.2);
}

a.card:hover {
  text-decoration-line: underline;
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
