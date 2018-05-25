<template>
  <el-container>
    <el-main>
      <el-row>
        <el-radio v-model="value" label="1" disabled>备选项</el-radio>
        <el-radio v-model="value" label="2">备选项</el-radio>
      </el-row>

      <el-row>
        <el-radio-group v-model="value">
          <el-radio :label="1">备选项</el-radio>
          <el-radio :label="2">备选项</el-radio>
          <el-radio :label="3">备选项</el-radio>
          <el-radio :label="4">备选项</el-radio>
        </el-radio-group>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      value: 1
    }
  }
}
</script>

<style>

</style>
