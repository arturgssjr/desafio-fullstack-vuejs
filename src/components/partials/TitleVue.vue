<template>
  <span>
    <h1 v-if="titleSize == '1'" :class="titleStyle">{{ titleText }}</h1>
    <h2 v-if="titleSize == '2'" :class="titleStyle">{{ titleText }}</h2>
    <h3 v-if="titleSize == '3'" :class="titleStyle">{{ titleText }}</h3>
    <h4 v-if="titleSize == '4'" :class="titleStyle">{{ titleText }}</h4>
    <h5 v-if="titleSize == '5'" :class="titleStyle">{{ titleText }}</h5>
    <h6 v-if="titleSize == '6'" :class="titleStyle">{{ titleText }}</h6>
  </span>
</template>

<script>
export default {
  name: "TitleVue",
  props: {
    titleSize: {
      type: String,
      default: ""
    },
    titleText: {
      type: String,
      default: ""
    },
    titleStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
