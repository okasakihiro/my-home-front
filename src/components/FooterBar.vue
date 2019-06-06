<template>
  <div id="footer">Copyright © 2018-{{ year }} {{ message }}</div>
</template>

<script>
export default {
  data() {
    return { 
      message: "水原西守歌",
      year: new Date().getFullYear()
    };
  },
  computed: {
  }
};
</script>

<style>
#footer {
  background: #111111;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0%;
}
</style>