<template>
  <el-button type="text" @click="open">alert</el-button>
</template>

<script>
export default {
  methods: {
    open() {
      this.$alert('message xxxxxxxxxxxxxxxxx', 'title', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({ type: 'info', duration: 1000, message: `action: ${action}` })
        } })
    }
  }
}
</script>

<style>

</style>
