<template>
<div>

  <el-time-select
    v-model="val"
    :picker-options="{
      start: '13:00',
      step: '02:00',
      end: '19:30'
      }">

  </el-time-select>
  {{val}}

  <el-time-picker
    v-model="val2"
    arrow-control
    placeholder="xxxx"
    :picker-options="{
      selectableRange: '19:30:00 - 19:35:00'
    }">

  </el-time-picker>
  {{val2}}

  <el-time-picker
    v-model="startTime"
    :picker-options="{
      start: '08:30',
      end: '18:30',
      step: '15'
    }">

  </el-time-picker>

  
  <el-time-picker
    v-model="endTime"
    :picker-options="{
      start: '08:30',
      end: '18:30',
      step: '15',
      minTime: startTime
    }">

  </el-time-picker>

  start:{{startTime}}
  end:{{endTime}}

  <el-time-picker
    is-range
    range-separator="值"
    start-placeholder="起始时间"
    end-placeholder="结束时间"
  >

  </el-time-picker>

  <el-badge :max="99" :value="990">
    <el-button size="small">评论</el-button>
  </el-badge>
  <el-badge :max="99" value="hot" is-dot="true">
    <el-button size="small">评论</el-button>
  </el-badge>
</div>
</template>

<script>
export default {
  data() {
    return {
      val: '',
      startTime: '',
      endTime: '',
      val2: new Date()
    }
  }
}
</script>

<style>

</style>
