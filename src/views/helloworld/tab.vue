<template>
  <el-tabs 
   editable 
   type="border-card"
   v-model="activeName" 
   tab-position="left"
   @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first">
      <span slot="label"><i class="el-icon-date"></i>我的行程</span>
      <el-select>
        <el-option label="1"></el-option>
        <el-option label="2"></el-option>
        <el-option label="3"></el-option>
        <el-option label="4"></el-option>
      </el-select>
    </el-tab-pane>
    <el-tab-pane label="配置管理" name="second">配置管理
      <el-input type="text" value="123"></el-input>
    </el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeName: 'second'
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style>

</style>
