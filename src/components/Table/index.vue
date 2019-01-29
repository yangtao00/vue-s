<template>
  <table>
    <thead>
      <tr>
        <th v-for="col in columns">
          <tr>{{col.title}}</tr>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in data">
        <td v-for="col in columns">
          <template v-if="'render' in col">
            <Render :row="row" :index="index" :column="col" :render="col.render"></Render>
          </template>
          <span v-else>{{row[col.key]}}</span>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import Render from './render';

export default {
  name: 'sTable',
  components: { Render },
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
<style>
table {
  min-width: 300px;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
</style>
