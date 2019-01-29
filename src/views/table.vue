<template>
  <s-table :columns="columns" :data="data"></s-table>
</template>
<script>
import sTable from '@/components/Table';

export default {
  components: { sTable },
  data() {
    return {
      editIndex: -1,
      editName: '',
      editGender: '',
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
          render: (h, { row, column, index} ) => {
            const date = new Date(parseInt(row.createTime));
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const createTime = `${year}-${month}-${day}`;

            return h('span', createTime);
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
                      this.editIndex = -1
                    }
                  }
                }, '取消')
              ]
            } else {
              return h('button', {
                on: {
                  click: () => {
                    this.editIndex = index
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