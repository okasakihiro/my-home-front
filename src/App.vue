<template>
  <div id="app">
    <NavMenu></NavMenu>
    <router-view/>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import FooterBar from "@/components/FooterBar";
export default {
  name: "App",
  components: {
    NavMenu,
    FooterBar
  }
};
</script>

<style>
#app {
  background: url(./assets/background.jpg);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-position: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
