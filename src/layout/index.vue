<template>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-header>{{$route.meta.title}}</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "index",
  setup () {

  }
}
</script>

<style scoped>

</style>