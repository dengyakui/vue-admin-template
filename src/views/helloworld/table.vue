<template>
<el-container>
<el-row>
  <el-col :span="24">
     <el-button @click="select2(tableData[1])">选中第二行</el-button>
    <el-button @click="toggleSelection([tableData[1],tableData[2]])">选中第2,3行</el-button>
  </el-col>
</el-row>

  <el-row>
    <el-table
    ref="singleTable"
    max-height="350"
    style="width:100%"
    border
    highlight-current-row
    :data="tableData"
    :row-class-name="tableRowClassName">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column type="index" width="50"></el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          :width="width">
        </el-table-column>
        <el-table-column
          prop="name"
          label="名称"
          :width="width">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :width="width">
        </el-table-column>
        <el-table-column label="测试">
           <el-table-column
          prop="address"
          label="地址"
          :width="width">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :width="width">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :width="width">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :width="width">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          :width="width">
        </el-table-column>
        </el-table-column>
       
        <el-table-column
        label="操作"
        width="100"
        fixed="right">
          <template slot-scope="scope">
            <span>{{scope.$index+1}}</span>
            <el-button type="text" size="small" @click="handleClick(scope)">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
      </el-table-column>
      <div slot="append">
        <el-button round>append</el-button>
      </div>
  </el-table>
  </el-row>

  </el-container>
</template>

<script>

export default {
  methods: {
    handleClick(scope) {
      alert(`点击了第${scope.$index + 1}行,\n当前行的数据为日期:${scope.row.date},名称:${scope.row.name},地址:${scope.row.address}`)
    },
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    },
    toggleSelection(rows) {
      if (rows && rows.length) {
        rows.forEach(r => {
          debugger
          this.$refs.singleTable.toggleRowSelection(r)
        })
      } else {
        this.$refs.singleTable.clearSelection()
      }
    },
    select2(row) {
      this.$refs.singleTable.setCurrentRow(row)
    }
  },
  data() {
    return {
      width: 300,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
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
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>


<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #333;
  }
</style>


