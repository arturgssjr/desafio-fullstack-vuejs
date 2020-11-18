<template>
  <hr :class="hrStyle" />
</template>

<script>
export default {
  name: "HrVue",
  props: {
    hrStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
