<template>
<div>
  <el-slider
    :min="10"
    :max="80"
    :show-stops="true"
    vertical
    @change="handleChange"
    range="true"
    height="200px"
    :step="10">

  </el-slider>
</div>

</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleChange(val) {
      console.log(val)
    }
  }
}
</script>

<style>

</style>
