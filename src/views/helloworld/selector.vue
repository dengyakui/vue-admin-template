<template>
  <el-container>
  
  
  
    <el-row>
  
      <el-col-4>
  
        <el-select v-model="value" multiple >
  
          <el-option v-for='item in options' :key="item.value" :label="item.label" :value="item" :disabled="item.disabled"></el-option>
  
        </el-select>
          {{value}}
      </el-col-4>

  
      <el-col-4>
        <el-select v-model="city" filterable>
          <el-option v-for="item in cities"
          :key="item.value"
          :value="item.value"
          :label="item.label">
            <span style="float:left">{{item.label}}</span>
            <span style="float:right">{{item.value}}</span>
          </el-option>
        </el-select>
      </el-col-4>
     <el-col-4>
       <el-select v-model="selectedState"
       filterable
       multiple
       allow-create
       remote
       default-first-option
       :remote-method="queryState"
       placeholder="请选择state"
       :loading="loading">
        <el-option
          v-for="item in options4"
          :key="item.value"
          :label="item.label"
          :value="item.value">
          <span style="float:left">{{item.value}}</span>
          <span style="float:right">{{item.label[0]}}</span>
        </el-option>
       </el-select>
       {{selectedState}}
     </el-col-4>
  
    </el-row>
  
  </el-container>
</template>


<script>
  export default {
    methods: {
      queryState(query) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          if (query !== '') {
            this.options4 = this.allStates.filter(item => { return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1 })
          } else {
            this.options4 = []
          }
        }, 2000)
      }
    },
    mounted() {
      this.allStates = this.states.map(item => {
        return { value: item, label: item }
      })
    },
    data() {
      return {
  
        value: [],
        options4: [],
        allStates: [],
        city: '',
        selectedState: [],
        loading: false,
        options: [{
  
          value: '选项1',
          label: '黄金糕'
  
        },
  
        {
  
          value: '选项2',
  
          label: '双皮奶',
  
          disabled: true
  
        },
  
        {
  
          value: '选项3',
  
          label: '蚵仔煎'
  
        },
  
        {
  
          value: '选项4',
  
          label: '龙须面'
  
        },
  
        {
  
          value: '选项5',
  
          label: '北京烤鸭'
  
        }
  
        ],
        cities: [{
          value: 'Beijing',
          label: '北京'
        }, {
          value: 'Shanghai',
          label: '上海'
        }, {
          value: 'Nanjing',
          label: '南京'
        }, {
          value: 'Chengdu',
          label: '成都'
        }, {
          value: 'Shenzhen',
          label: '深圳'
        }, {
          value: 'Guangzhou',
          label: '广州'
        }],
        states: ['Alabama', 'Alaska', 'Arizona',
          'Arkansas', 'California', 'Colorado',
          'Connecticut', 'Delaware', 'Florida',
          'Georgia', 'Hawaii', 'Idaho', 'Illinois',
          'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota',
          'Mississippi', 'Missouri', 'Montana',
          'Nebraska', 'Nevada', 'New Hampshire',
          'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Ohio',
          'Oklahoma', 'Oregon', 'Pennsylvania',
          'Rhode Island', 'South Carolina',
          'South Dakota', 'Tennessee', 'Texas',
          'Utah', 'Vermont', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin',
          'Wyoming']
  
      }
    }
  
  }
</script>


<style>
  
</style>
