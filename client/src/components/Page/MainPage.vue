<template>
  <div
    class="page"
    :class="{
      center: center,
    }"
  >
    <slot></slot>
    <Nav
      class="nav"
    />
  </div>
</template>

<script>
import Nav from '../Nav';

export default {
  name: 'MainPage',
  components: {
    Nav,
  },
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
    position: relative;
  }

  .nav {
    position: fixed;
    bottom: 0;
    max-width: 800px;
  }

  .center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
