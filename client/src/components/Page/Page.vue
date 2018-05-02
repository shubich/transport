<template>
  <div
    class="page"
    :class="{
      center: center,
      desktop: desktop,
    }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Page',
  props: {
    center: Boolean,
    desktop: Boolean,
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

  .desktop {
    max-width: 100%;
  }
</style>
