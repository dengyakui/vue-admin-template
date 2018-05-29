<template>
  <div>
  <transition name="fade">
    <span :key="123" v-if="show">{{msg}}</span>
  </transition>
  <el-button @click="show=!show">click</el-button>
  <el-button type="text" @click="dialogVisible = true">点击打开</el-button>
  <el-button type="text" @click="dialogTableVisible = true">嵌套表格的dialog</el-button>
  <el-button type="text" @click="dialogFormVisible = true">嵌套表单的dialog</el-button>
  <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>
  <el-dialog
    title="提示"
    width="30%"
    :visible.sync="dialogVisible"
    :before-close="handleClose">
    <span>这是一段信息</span>  
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">确定</el-button>
      <el-button @click="dialogVisible = false" type="primary">取消</el-button>
    </span>
  </el-dialog>

  <!-- 表格dialog -->
  <el-dialog title="收货地址" center :visible.sync="dialogTableVisible">
    <h1 slot="title">hello,world</h1>
    <el-table :data="gridData">
      <el-table-column property="date" label="日期"></el-table-column>
      <el-table-column property="name" label="名称"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
    <template slot="footer">
      <el-button type="primary" @click="dialogTableVisible = false">确认</el-button>
      <el-button type="danger" @click="dialogTableVisible = false">取消</el-button>
    </template>
  </el-dialog>

  <!-- 表单dialog -->
  <el-dialog title="表单" :visible.sync="dialogFormVisible">
    <el-form label-width="80px" inline>
      <el-form-item label="活动名称">
        <el-input type="text" v-modle="form.name"></el-input>
      </el-form-item>
      
      <el-form-item label="活动区域">
        <el-select clearable v-model="form.region">
          <el-option label="区域1" :value="1"></el-option>
          <el-option label="区域2" :value="2"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-dialog>
  </div>
</template>

<script>
export default {
  mounted() {
    setInterval(() => { this.msg = +new Date() }, 1000)
  },
  data() {
    return {
      msg: '123',
      show: true,
      dialogVisible: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: ''
      },
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  },
  methods: {
    handleClose() {
      this.$confirm('确认关闭?')
        .then(_ => {
          console.log('closed')
        })
        .catch(_ => {})
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
