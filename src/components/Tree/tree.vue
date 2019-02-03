<template>
  <div>
    <tree-node v-for="item in cloneData" :key="item.id" :data="item" :show-checkbox="showCheckbox"></tree-node>
  </div>
</template>
<script>
import TreeNode from './node';
import { deepClone } from '@/utils/deepClone';

export default {
  name: 'Tree',
  components: {
    TreeNode
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    showCheckbox: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      cloneData: []
    };
  },
  created() {
    this.rebuildData();
  },
  watch: {
    data() {
      this.rebuildData();
    }
  },
  methods: {
    rebuildData() {
      this.cloneData = deepClone(this.data);
    },
    emitEvent(eventName, data) {
      this.$emit(eventName, data, this.cloneData);
    }
  }
};
</script>