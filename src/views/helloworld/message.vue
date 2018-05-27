<template>
  <div>
    <el-button @click="open">打开消息提示</el-button>
    <el-button @click="openVn">VNODE</el-button>
    <el-button @click="openType('success')">success</el-button>
    <el-button @click="openType('warning')">warning</el-button>
    <el-button @click="openType('info')">info</el-button>
    <el-button @click="openType('error')">error</el-button>
    <el-button @click="openMsg">click by message</el-button>
  </div>
</template>

<script>
import { Message } from 'element-ui'

export default {
  methods: {
    open() {
      this.$message('hello,msg')
    },
    openVn() {
      const h = this.$createElement
      this.$message({ message: h('p', null, [
        h('span', null, '内容可以是'),
        h('i', { style: 'color:teal' }, 'VNode')
      ]) })
    },
    openType(type) {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<h1>这是一条消息</h1><h3>213213</h3>',
        type: type,
        showClose: true,
        center: true
      })
    },
    openMsg() {
      const m = Message({ type: 'success', message: 'ok', showClose: true, center: true })
      setTimeout(() => {
        m.close()
      }, 5000)
    }
  }
}
</script>

<style>

</style>
