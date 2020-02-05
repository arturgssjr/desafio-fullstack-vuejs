<template>
  <main class="flex-shrink-0">
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
export default {
  name: "ContentBar"
};
</script>

<style scoped>
main > .container {
  padding: 80px 15px 0;
}
</style>
