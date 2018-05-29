<template>
  <div>
    <el-button @click="noti1">auto closed notification</el-button>
    <el-button @click="noti2">not auto closed notification</el-button>
    <el-button @click="noti2('success')">success</el-button>
    <el-button @click="noti2('info')">info</el-button>
    <el-button @click="noti2('error')">error</el-button>
    <el-button @click="noti2('warning')">warning</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    noti1() {
      this.$notify({
        title: '自动关闭',
        message: '可以自动关闭'
      })
    },
    noti2(type) {
      for (var i = 0; i < 10; i++) {
        this.$notify({
          type: type,
          title: 'no自动关闭',
          duration: 0,
          offset: 100,
          message: 'no可以自动关闭'
        })
      }
    }
  }
}
</script>

<style>

</style>
