<template>
  <ul class="tree-box">
    <li class="item-li">
      <span class="item-expand" @click="handleExpand">
        <span v-if="data.children && data.children.length && !data.expand">+</span>
        <span v-if="data.children && data.children.length && data.expand">-</span>
      </span>
      <s-checkbox v-if="showCheckbox" :value="data.checked" @input="handleCheck"></s-checkbox>
      <span>{{ data.title }}</span>
      <tree-node
        v-if="data.expand"
        v-for="item in data.children"
        :key="item.id"
        :data="item"
        :show-checkbox="showCheckbox"
      ></tree-node>
    </li>
  </ul>
</template>
<script>
import sCheckbox from '../Checkbox/checkbox';
import { findComponentUpward } from '@/utils/assist';

export default {
  name: 'TreeNode',
  components: {
    sCheckbox
  },
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    showCheckbox: {
      type: Boolean,
      defalut: false
    }
  },
  data() {
    return {
      tree: findComponentUpward(this, 'Tree')
    };
  },
  methods: {
    handleExpand() {
      this.$set(this.data, 'expand', !this.data.expand);
      if (this.tree) {
        this.tree.emitEvent('on-toggle-expand', this.data);
      }
    },
    handleCheck(checked) {
      this.updateTreeDown(this.data, checked);
      if (this.tree) {
        this.tree.emitEvent('on-check-change', this.data);
      }
    },
    updateTreeDown(data, checked) {
      this.$set(data, 'checked', checked);
      if (data.children && data.children.length) {
        data.children.forEach(item => {
          this.updateTreeDown(item, checked);
        });
      }
    }
  },
  watch: {
    'data.children': {
      handler(data) {
        if (data) {
          const checkAll = !data.some(item => !item.checked);
          this.$set(this.data, 'checked', checkAll);
        }
      },
      deep: true
    }
  }
};
</script>
<style>
.tree-box,
.item-li {
  list-style: none;
  padding-left: 10px;
}
.item-expand {
  cursor: pointer;
}
</style>
