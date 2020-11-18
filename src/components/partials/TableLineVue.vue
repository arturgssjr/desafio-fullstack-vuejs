<template>
  <tr :class="trStyle">
    <slot></slot>
  </tr>
</template>

<script>
export default {
  name: "TableLineVue",
  props: {
    trStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
