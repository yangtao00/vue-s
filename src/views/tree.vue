<template>
  <tree :data="data" show-checkbox @ont-toggle-expand="handleExpand" @on-check-change="handleCheck"></tree>
</template>
<script>
import Tree from '@/components/Tree/tree';

export default {
  components: {
    Tree
  },
  data() {
    return {
      data: [
        {
          id: '1',
          title: 'parent 1',
          expand: true,
          children: [
            {
              id: '1-1',
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  id: '1-1-1',
                  title: 'leaf 1-1-1'
                },
                {
                  id: '1-1-2',
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              id: '1-2',
              title: 'parent 1-2',
              children: [
                {
                  id: '1-2-1',
                  title: 'leaf 1-2-1'
                },
                {
                  id: '1-2-2',
                  title: 'leaf 1-2-2'
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    handleExpand(data) {
      console.log(data);
    },
    handleCheck(data) {
      console.log(data);
    }
  }
};
</script>