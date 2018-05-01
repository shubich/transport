<template>
  <button
    :class="type"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  name: 'Login',
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style scoped>
  button {
    padding: 6px 12px;
    outline: 0;
    font-size: 14px;
    line-height: 1.42857143;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 2px;
    text-transform: uppercase;
    color: #fff;
  }

  .default {
    color: #6c7177;
    background-color: #fff;
    border-color: #eceff1;
  }

  .default:hover, .default:focus {
    background-color: #f5f5f5;
    border-color: #e0e5e8;
  }

  .default:active {
    background-color: #ebebeb;
    border-color: #e9edef;
  }

  .primary {
    background-color: #448aff;
    border-color: #448aff;
  }

  .primary:hover, .primary:focus {
    background-color: #307dff;
    border-color: #307dff;
  }

  .primary:active {
    background-color: #1b70ff;
    border-color: #3f87ff;
  }
</style>
