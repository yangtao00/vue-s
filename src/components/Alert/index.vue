<template>
  <div class="alert-box">
    <div class="item-content" v-for="item in notices" :key="item.name">
      <div>{{item.content}}</div>
    </div>
  </div>
</template>
<script>
let seed = 0;
function getUuid() {
  return 'alert_' + seed++;
}
export default {
  name: 'Alert',
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(notice) {
      const name = getUuid();
      const _notice = Object.assign(
        {
          name
        },
        notice
      );

      this.notices.push(_notice);
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },
    remove(name) {
      const notices = this.notices;
      const len = notices.length;
      for (let i = 0; i < len; i++) {
        if (notices[i].name === name) {
          notices.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style>
.alert-box {
  position: fixed;
  width: 100%;
  top: 16px;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.item-content {
  max-width: 200px;
  padding: 8px 16px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  margin: 10px auto 8px;
}
</style>
