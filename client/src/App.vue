<template>
  <div id="app">
    <router-view/>
    <Alert />
  </div>
</template>

<script>
import Alert from '@/components/Alert';

export default {
  name: 'App',
  components: {
    Alert,
  },
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
