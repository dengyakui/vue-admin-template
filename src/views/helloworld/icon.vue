<template>
<div class="app-container">

  <el-row>

  <i class="el-icon-edit"></i>
  <i class="el-icon-share"></i>
  <i class="el-icon-delete"></i>
  <el-button type="success" icon="el-icon-picture">搜索</el-button>

  </el-row>

  <el-row gutter="20">
    <el-button disabled="true">默认按钮</el-button>
    <el-button type="primary">主要</el-button>
    <el-button type="success">成功</el-button>
    <el-button type="info">信息</el-button>
    <el-button type="warning">警告</el-button>
    <el-button type="danger">危险</el-button>

  </el-row>

  <el-row gutter="20">
    <el-button round>圆角按钮</el-button>
    <el-button type="primary" round disabled>主要</el-button>
    <el-button type="success" round>成功</el-button>
    <el-button type="info" round>信息</el-button>
    <el-button type="warning" round>警告</el-button>
    <el-button type="danger" round>危险</el-button>
  </el-row>


  <el-row gutter="20">
    <el-button circle>圆形按钮</el-button>
    <el-button type="primary" circle disabled>主要</el-button>
    <el-button icon="el-icon-edit" circle></el-button>
    <el-button type="info" circle>信息</el-button>
    <el-button type="warning" circle>警告</el-button>
    <el-button type="danger" circle>危险</el-button>
  </el-row>

  <el-row>
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
    <el-button icon="el-icon-search" type="primary">搜索按钮</el-button>
  </el-row>

  <el-row>
    <el-button-group>
    <el-button icon="el-icon-prev" type="primary" :loading="true">上一页</el-button>
    <el-button icon="el-icon-next" type="primary">下一页</el-button>
    </el-button-group>
  </el-row>

  <el-row>
    <el-button>默认尺寸</el-button>
    <el-button size="midium">默认尺寸</el-button>
    <el-button size="small">默认尺寸</el-button>
    <el-button size="mini">默认尺寸</el-button>
  </el-row>

</div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style>

</style>
