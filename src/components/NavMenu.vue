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
      <el-menu-item index="/">首页</el-menu-item>
      <el-submenu index="gbf">
        <template slot="title">GBF相关工具</template>
        <el-menu-item index="crystal">井井计算器</el-menu-item>
      </el-submenu>
      <el-menu-item style="float:right">
        <el-button>
          <el-link :underline="false" href="https://blog.granbluefantasy.app" type="info">个人博客</el-link>
        </el-button>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    //设置当前激活的导航
    activeIndex() {
      //获取路由路径
      let path = this.$route.path;
      //判断如果为根路径的话则不替换掉'/'
      if (path !== '/') {
        path = path.replace(/\//g, '');
      }
      //返回路径用于激活当前标签
      return path;
    }
  },
  methods: {
    handleSelect(key, keyPath) {

    }
  }
};
</script>

<style lang="scss" scoped>
</style>