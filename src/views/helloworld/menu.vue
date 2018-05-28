<template>
<div>
<el-row>
  <el-col :span="24">
    <el-menu 
      mode="horizontal"
      active-text-color="red"
      text-color="#fff"
      background-color="#000"
      :default-active="activeIndex"
      @select="handleSelect">
        <el-menu-item index="1">菜单1</el-menu-item>
        
        <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3" disabled>消息中心</el-menu-item>
        <el-menu-item index="4"><a href="http://www.baidu.com">订单中心</a></el-menu-item>
      </el-menu>
  </el-col>
  
 
</el-row>
<el-row>
  <el-col :span="12">
    <h2>defaut color</h2>
    <el-menu default-active="2">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航1</span>
        </template>
        <el-menu-item-group>
          <template slot="title">
            <i class="el-icon-edit"></i>
            <span>分组1</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        
      </el-submenu>
      <el-menu-item index="2">menu2</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="12">

  </el-col>
</el-row>
</div>


</template>

<script>
export default {
  data() {
    return {
      activeIndex: '2-4-1'
    }
  },
  methods: {
    handleSelect(index, indexPath) {
      console.log(index, indexPath)
    }
  }
}
</script>

<style>

</style>
