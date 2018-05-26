<template>
  <div>
    <el-switch
      v-model="checked"
      active-color="green"
      inactive-color="red"
      active-text="年付"
      inactive-text="月付"></el-switch>

      <el-switch
        v-model="val"
        active-value="10"
        active-text="10"
        inactive-value="1"
        inactive-text="1">
      </el-switch>
      {{val}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      val: 1
    }
  }
}
</script>

<style>

</style>
