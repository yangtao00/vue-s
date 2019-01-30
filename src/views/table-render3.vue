<template>
  <s-table-render :columns="columns" :data="data">
    <template slot-scope="{ row, index }" slot="name">
      <input type="text" v-model="editName" v-if="editIndex === index">
      <span v-else>{{ row.name }}</span>
    </template>
    <template slot-scope="{ row, index }" slot='gender'>
      <input type="text" v-model="editGender" v-if="editIndex === index">
      <span v-else>{{ row.gender }}</span>
    </template>
    <template slot-scope="{ row, index }" slot="createTime">
      <input type="text" v-model="editCreateTime" v-if="editIndex === index">
      <span v-else>{{ formatCreateTime(row.createTime) }}</span>
    </template>
    <template slot-scope="{ row, index }" slot="action">
      <div v-if="editIndex === index">
        <button type="button" @click="handleSave(index)">保存</button>
        <button typel="button" @click="handleCancel" style="margin-left: 6px;">取消</button>
      </div>
      <div v-else>
        <button type="button" @click="handleEdit(row, index)">编辑</button>
      </div>
    </template>
  </s-table-render>
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
          slot: 'name'
        },
        {
          title: '性别',
          slot: 'gender'
        },
        {
          title: '创建时间',
          slot: 'createTime'
        },
        {
          title: '操作',
          slot: 'action'
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
  },
  methods: {
    formatCreateTime(createTime) {
      const date = new Date(parseInt(createTime));
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();

      return `${year}-${month}-${day}`;
    },
    handleEdit(row, index) {
      const { name, gender, createTime } = row;
      this.editName = name;
      this.editGender = gender;
      this.editCreateTime = createTime;
      this.editIndex = index;
    },
    handleCancel() {
      this.editIndex = -1;
    },
    handleSave(index) {
      const { editName, editGender, editCreateTime } = this;
      Object.assign(this.data[index], {
        name: editName,
        gender: editGender,
        createTime: editCreateTime
      })
      this.editIndex = -1;
    }
  }
}
</script>