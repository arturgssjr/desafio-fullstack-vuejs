<template>
  <div :class="gridStyle">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GridVue",
  props: {
    gridStyle: {
      type: String,
      default: "col-12"
    }
  }
};
</script>

<style scoped></style>
