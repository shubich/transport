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
    max-width: 800px;
    margin: 0 auto;
  }
</style>
