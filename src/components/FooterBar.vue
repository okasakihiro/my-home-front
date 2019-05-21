<template>
  <div id="footer">{{ message }}</div>
</template>

<script>
export default {
  data() {
    return { message: "Power By 水原西守歌" };
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