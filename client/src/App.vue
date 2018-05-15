<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './assets/styles/palette';
@import './assets/styles/table';
@import './assets/styles/form';
@import './assets/styles/link';

body {
  margin: 0;
  background: $gray;
  font-family: Arial;
}
</style>
