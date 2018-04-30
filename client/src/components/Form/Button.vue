<template>
  <button>{{text}}</button>
</template>

<script>
export default {
  name: 'Login',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
