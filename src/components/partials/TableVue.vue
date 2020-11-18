<template>
  <div>
    <table :class="'table ' + tableStyle">
      <thead>
        <slot name="table-vue-tr"></slot>
      </thead>
      <tbody>
        <slot name="table-vue-td"></slot>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableVue",
  components: {},
  props: {
    tableStyle: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped></style>
