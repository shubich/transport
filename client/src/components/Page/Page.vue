<template>
  <div class="page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
};
</script>

<style scoped>
  .page {
    background: white;
    margin: 0 auto;
    max-width: 800px;
    min-height: 100vh;
  }
</style>
