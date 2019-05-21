<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#111111"
      text-color="#fff"
      active-text-color="#66ccff"
      router
    >
      <el-menu-item index="index">首页</el-menu-item>
      <el-submenu index="gbf">
        <template slot="title">GBF相关工具</template>
        <el-menu-item index="crystal">井井计算器</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    activeIndex() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>