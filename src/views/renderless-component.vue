<template>
  <div>
    <renderless-component v-model="tags">
      <div slot-scope="{tags, removeTag, addTag, inputAttrs, inputEvents}" class="box-input">
        <span class="tags-list" v-for="tag in tags">
          <span>{{tag}}</span>
          <button type="button" class="tag-remove" @click="removeTag(tag)">&times;</button>
        </span>
        <input
          type="text"
          class="tag-input"
          v-bind="inputAttrs"
          v-on="inputEvents"
          placeholder="add one">
          <button class="add-btn" @click="addTag">增加</button>
      </div>
    </renderless-component>
  </div>
</template>
<script>
import '../components/Renderless-components/index.js';

export default {
  data() {
    return {
      tags: ['vue', 'vuex']
    }
  }
};
</script>
<style lang="less">
.box-input {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  border-width: 1px;
  border-radius: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
  border: 1px solid #000;
}

.tags-list {
  display: inline-flex;
  line-height: 1;
  align-items: center;
  font-size: 0.875rem;
  background-color: #bcdefa;
  color: #1c3d5a;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}

.tags-list:last-of-type {
  margin-right: 0;
}

.tag-remove {
  outline: none;
  border: 0;
  color: #2779bd;
  font-size: 1.125rem;
  line-height: 1;
  background-color: transparent;
}

.tag-remove:first-child {
  margin-right: 0.25rem;
}

.tags-remove:last-child {
  margin-left: 0.25rem;
}

.tags-remove:focus {
  outline: 0;
}

.tag-input {
  flex: 1;
  outline: 0;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  margin-left: 0.5rem;
  margin-bottom: 0.25rem;
  min-width: 10rem;
  border: 0;
}

.add-btn {
  font-size: 0.875rem;
  background-color: #bcdefa;
  color: #1c3d5a;
  border-radius: 0.25rem;
  user-select: none;
  padding: 0.25rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  border: 0;
  outline: 0;
}
</style>