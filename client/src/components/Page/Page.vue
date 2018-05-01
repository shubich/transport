<template>
  <div
    class="page"
    :class="{center: center}"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    center: Boolean,
  },
};
</script>

<style scoped>
  .page {
    background: white;
    margin: 0 auto;
    max-width: 800px;
    min-height: 100vh;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
