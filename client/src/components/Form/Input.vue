<template>
  <input
    :type="type"
    :value="value"
    @input="$emit('input', $event.target.value)"
    @focus='$emit("focus", $event)'
    @blur='$emit("blur", $event)'
    @keydown='$emit("keydown", $event)'
  >
</template>

<script>
export default {
  name: 'Input',
  props: [
    'type',
    'value',
  ],
};
</script>

<style scoped>
  input {
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(0,0,0,.14);
    padding: 2px;
    font-size: 14px;
  }

  input:focus {
    border-color: #448aff;
  }
</style>
