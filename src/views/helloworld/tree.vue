<template>
  <div>
    <el-tree :data="data" 
    show-checkbox :props="defaultProps" 
    draggable
    @node-click="handleNodeClick"
    @check-change="handleCheckChange"></el-tree>

    <h1>load node</h1>
    <el-tree 
      lazy
      empty-text="no data"
      highlight-current
      show-checkbox
      :load="loadNode">

    </el-tree>
    <h1>custom leaf</h1>
    <el-tree
      :props="defaultProps"
      lazy
      show-checkbox
      :load="loadNode2">

    </el-tree>
    <h1>defult expand/check</h1>
    <el-tree :props="defaultProps"
    show-checkbox
    ref="mytree"
    :data="data2"
    node-key="id"
    highlight-current
    :default-expanded-keys="[1]"
    :default-checked-keys="[9,10]">

    </el-tree>
    <el-button @click="getCheckedNodes">获取选中的node</el-button>
    <el-button @click="getCheckedKeys">获取选中的key</el-button>
    <el-button @click="setCheckedKeys">根据key设置</el-button>
    <h1>render content</h1>
    <el-tree :data="data4" :render-content="renderContent" :expand-on-click-node="false" default-expand-all></el-tree>
    <h1>scope content</h1>
    <el-tree :data="data5" 
    node-key="id"
    show-checkbox
    :expand-on-click-node="false"
    accordion
     default-expand-all>
      <span class="custom-tree-node" slot-scope="{ node, data}">
        <span>{{ node.label}}</span>
        <span>
          <el-button
           type="text"
           size="mini"
           @click="()=>append(data)">append</el-button>
           <el-button
           type="text"
           size="mini"
           @click="()=>remove(node,data)">delete</el-button>
        </span>
      </span>
    </el-tree>
    <h1>filter node</h1>
    <div>
      <el-input v-model="val"></el-input>
    </div>
    <div>
      <el-tree
        ref="ftree"
        :data="data3"
        default-expand-all
        :filter-node-method="filterNode"></el-tree>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    val(v) {
      this.$refs.ftree.filter(v)
    }
  },
  data() {
    return {
      val: '',
      count: 1,
      defaultProps: { label: 'label', children: 'children', isLeaf: 'leaf' },
      data3: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      data4: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      data5: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      data: [{
        label: '111',
        children: [{
          label: '1-111',
          children: [{
            label: '1-1-111',
            disabled: true,
            children: []
          }]
        },
        {
          label: '1-222',
          children: []
        }]
      }, {
        label: '222',
        children: []
      }, {
        label: '333',
        children: []
      }],
      data2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }]

    }
  },
  methods: {
    filterNode(val, data) {
      if (!val) {
        return true
      }
      return data.label.indexOf(val) !== -1
    },
    append(data) {
      const newChild = { id: this.count++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    renderContent(h, { node, data, store }) {
      return (
        <span class='custom-tree-node'>
          <span>{node.label}</span>
          <span>
            <el-button size='mini' type='text' on-click={() => this.append(data)}>Append</el-button>
            <el-button size='mini' type='text' on-click={() => this.remove(node, data)}>Delete</el-button>
          </span>
        </span>

      )
    },
    getCheckedNodes() {
      console.log(this.$refs.mytree.getCheckedNodes())
    },
    getCheckedKeys() {
      console.log(this.$refs.mytree.getCheckedKeys())
    },
    setCheckedKeys() {
      this.$refs.mytree.setCheckedKeys([8])
    },
    handleNodeClick(data) {
      console.log(data)
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate)
    },
    loadNode2(node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: 'region1' }])
      }
      if (node.level > 1) return resolve([])

      setTimeout(() => {
        const data = [{ label: 'leaf', leaf: true }, { label: 'zone' }]
        resolve(data)
      }, 500)
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ label: 'region1' }, { label: 'region2' }])
      }
      if (node.level > 5) {
        return resolve([])
      }
      var hasChild
      if (node.data.label === 'region1') {
        hasChild = true
      } else if (node.data.label === 'region2') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [{ label: 'zone' + this.count++ }, { label: 'zone' + this.count++ }]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    }
  }
}
</script>

<style>
  .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
</style>
