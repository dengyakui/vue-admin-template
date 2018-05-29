<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">
      <el-input placeholder="标题" @keyup.enter.native="handleFilter" v-model="listQuery.title" style="width:200px;"></el-input>
      <el-select v-model="listQuery.importance"
       clearable
       placeholder="重要性">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item"></el-option>
      </el-select>
      <el-select v-model="listQuery.type"
        clearable
        placeholder="type">
        <el-option v-for="item in calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key"></el-option>
      </el-select>
      <!-- 搜索按钮 -->
      <el-button class='el-icon-search' type="primary" @click.native="handleFilter">搜索</el-button>
      <!-- 添加按钮 -->
      <el-button class="el-icon-edit" type="primary">添加</el-button>
    </div>
    <el-table :data="list"
    v-loading="listLoading"
    element-loading-test="loading..."
    border
    fit
    highlight-current-row>
      <el-table-column label="序号">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题">
        <template slot-scope="scope">
          <span>{{scope.row.title}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="type" label="type"></el-table-column>
       <el-table-column label="重要性">
        <template slot-scope="scope">
          {{scope.row.importance}}
        </template>
      </el-table-column>

      <el-table-column label="作者">
        <template slot-scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>

        <el-table-column class-name="status-col" label="状态" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status|statusFilter">{{scope.row.status}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column>
        <template slot-scope="scope">
          <el-button size="mini" type="primary">编辑</el-button>
          <el-button v-if="scope.row.status!='published'" size="mini" type="primary" >发布</el-button>
          <el-button v-if="scope.row.status!='draft'" size="mini" type="warning" >草稿</el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination-container">
      <el-pagination
        background
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="listQuery.page"
        :page-size="listQuery.limit"
        :page-sizes="[10,20,30,50]"
        :total="total"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"></el-pagination>
    </div>
  </div>
</template>

<script>
import { fetchList } from '@/api/article'
const calendarTypeOptions = [
  { key: 'CN', display_name: 'China' },
  { key: 'US', display_name: 'USA' },
  { key: 'JP', display_name: 'Japan' },
  { key: 'EU', display_name: 'Eurozone' }
]

const types = calendarTypeOptions.reduce((prev, cur) => { prev[cur.key] = cur.display_name; return prev })

export default {
  name: 'complexTable',
  data() {
    return {
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      listQuery: {
        importance: undefined,
        page: 1,
        limit: 20,
        title: '',
        type: ''
      },
      total: 0,
      list: null,
      listLoading: false
    }
  },
  methods: {
    handleFilter() {
      this.listQuery.page = 1
      this.getList()
    },
    getList() {
      this.listLoading = true
      fetchList(this.listQuery).then(response => {
        this.list = response.items
        this.total = response.total
        this.listLoading = false
        console.log(response)
      })
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    handleSizeChange(size) {
      this.listQuery.limit = size
      this.getList()
    }
  },
  created() {
    this.getList()
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'info',
        deleted: 'danger'
      }
      return statusMap[status]
    },
    typeFileter(t) {
      return types[t]
    }
  }

}
</script>

<style>

</style>
