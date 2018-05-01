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

body {
  margin: 0;
  background: $gray;
  font-family: Arial;
}

a {
  color: $light-blue;
  text-decoration: none;

  &:hover, &:focus {
    color: $blue;
    text-decoration: underline;
  }

  &:active {
    color: $dark-blue;
  }
}
</style>
