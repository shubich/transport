<template>
  <input
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  name: 'Login',
  props: [
    'type',
    'value',
  ],
};
</script>

<style scoped>

</style>
