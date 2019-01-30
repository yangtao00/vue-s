<template>
  <s-table-render :columns="columns" :data="data"></s-table-render>
</template>
<script>
import sTableRender from '@/components/Table/table-render';

export default {
  components: { sTableRender },
  data() {
    return {
      editIndex: -1, // 聚焦当前正在修改的行数
      editName: '', // 名称列输入框
      editGender: '', // 性别列输入框
      editCreateTime: '', // 创建时间列输入框
      columns: [
        {
          title: '姓名',
          render: (h, { row, index }) => {
            if (this.editIndex === index) {
              return h('input', {
                domProps: {
                  value: row.name
                },
                on: {
                  input: (e) => {
                    this.editName = e.target.value;
                  }
                }
              })
            } else {
              return h('div', row.name);
            }
          }
        },
        {
          title: '性别',
          key: 'gender',
          render: (h, { row, index }) => {
            if (this.editIndex === index) {
              return h('input', {
                domProps: {
                  value: row.gender
                },
                on: {
                  input: (e) => {
                    this.editGender = e.target.value
                  }
                }
              })
            } else {
              return h('div', row.gender);
            }
          }
        },
        {
          title: '创建时间',
          render: (h, { row, index} ) => {
            const date = new Date(parseInt(row.createTime));
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const createTime = `${year}-${month}-${day}`;
            if (this.editIndex === index) {
              return h('input', {
                domProps: {
                  value: row.createTime
                },
                on: {
                  input: (e) => {
                    this.editCreateTime = e.target.value
                  }
                }
              })
            } else {
              return h('div', createTime);
            }
          }
        },
        {
          title: '操作',
          render: (h, { row, index }) => {
            if (this.editIndex === index) {
              return [
                h('button', {
                  on: {
                    click: () => {
                      this.data[index].name = this.editName;
                      this.data[index].gender = this.editGender;
                      this.data[index].createTime = this.editCreateTime;
                      this.editIndex = -1
                    }
                  }
                }, '保存'),
                h('button', {
                  style: {
                    marginLeft: '6px'
                  },
                  on: {
                    click: () => {
                      this.editIndex = -1;
                    }
                  }
                }, '取消')
              ]
            } else {
              return h('button', {
                on: {
                  click: () => {
                    this.editName = row.name;
                    this.editGender = row.gender;
                    this.editCreateTime = row.createTime;
                    this.editIndex = index;
                  }
                }
              }, '修改')
            }
          }
        }
      ],
      data: [
        {
          name: '喜羊羊',
          gender: '男',
          createTime: new Date().getTime()
        },
        {
          name: '灰太狼',
          gender: '男',
          createTime: new Date().getTime()
        }
      ]
    }
  }
}
</script>