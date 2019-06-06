<template>
  <div class="mavonEditor">
    <el-main>
      <mavon-editor
      v-model="value"
      :scrollStyle="true"
      :placeholder="placeholder"
      />
    </el-main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value:"",
        placeholder: "记录下此刻的想法吧..."
      }
    },
  }
</script>

<style>
.mavonEditor {
  width: 80%;
  height: 100%;
  max-height: 1000px;
  margin: 0 auto;
}
.v-note-wrapper{
  height: 560px;
}

</style>