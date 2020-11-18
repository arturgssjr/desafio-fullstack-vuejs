<template>
  <div :class="'alert alert-' + typeMessage">
    {{ descriptionMessage }}
  </div>
</template>

<script>
export default {
  name: "AlertVue",
  components: {},
  props: {
    typeMessage: {
      type: String,
      default: "success"
    },
    descriptionMessage: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
ul {
  list-style-type: circle !important;
}
</style>
