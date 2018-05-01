<template>
  <div
    :class="type"
  >
    {{text}}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    text: String,
    type: String,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  .primary {
    color: $blue;
  }

  .success {
    color: $green;
  }

  .danger {
    color: $red;
  }
</style>
