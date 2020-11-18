<template>
  <a
    :href="linkUrl"
    :class="linkStyle"
    :title="linkTitle"
    :data-toggle="linkDataToggle"
    :data-target="linkDataTarget"
  >
    <i v-if="linkIcon != ''" :class="linkIcon"></i>
  </a>
</template>

<script>
export default {
  name: "LinkVue",
  components: {},
  props: {
    linkStyle: {
      type: String,
      default: ""
    },
    linkIcon: {
      type: String,
      default: ""
    },
    linkUrl: {
      type: String,
      default: "#"
    },
    linkTitle: {
      type: String,
      default: ""
    },
    linkDataToggle: {
      type: String,
      default: ""
    },
    linkDataTarget: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped></style>
