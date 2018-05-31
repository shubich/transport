<template>
  <div
    class="page"
    :class="{
      center: center,
      desktop: desktop,
    }"
  >
    <div class="slot">
      <slot></slot>
    </div>
    <Alert />
  </div>
</template>

<script>
import Alert from '@/components/Alert';

export default {
  name: 'Page',
  components: {
    Alert,
  },
  props: {
    center: Boolean,
    desktop: Boolean,
  },
};
</script>

<style scoped>
  .page {
    position: relative;
    background: white;
    margin: 0 auto;
    max-width: 800px;
    height: 100vh;
  }

  .page:not(.center)
  .slot {
    height: 100%;
    overflow-y: auto;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .desktop {
    max-width: 1200px;
  }
</style>
