<template>
  <button
    :class="type"
    @click="$emit('click', $event)"
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

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  button {
    padding: 6px 12px;
    outline: 0;
    font-size: 14px;
    line-height: 1.42857143;
    cursor: pointer;
    border: 1px solid transparent;
    border-radius: 2px;
    text-transform: uppercase;
    color: $white;
  }

  .default {
    color: $gray;
    background-color: $default-light;
    border-color: $default-border-light;

    &:hover, &:focus {
      background-color: $default;
      border-color: $default-border;
    }

    &:active {
      background-color: $default-dark;
      border-color: $default-border-dark;
    }
  }

  .primary {
    background-color: $primary-light;
    border-color: $primary-light;

    &:hover, &:focus {
      background-color: $primary;
      border-color: $primary;
    }

    &:active {
      background-color: $primary-dark;
      border-color: $primary-dark;
    }
  }

  .success {
    background-color: $success-light;
    border-color: $success-light;

    &:hover, &:focus {
      background-color: $success;
      border-color: $success;
    }

    &:active {
      background-color: $success-dark;
      border-color: $success-dark;
    }
  }

  .warning {
    background-color: $warning-light;
    border-color: $warning-light;

    &:hover, &:focus {
      background-color: $warning;
      border-color: $warning;
    }

    &:active {
      background-color: $warning-dark;
      border-color: $warning-dark;
    }
  }

  .danger {
    background-color: $danger-light;
    border-color: $danger-light;

    &:hover, &:focus {
      background-color: $danger;
      border-color: $danger;
    }

    &:active {
      background-color: $danger-dark;
      border-color: $danger-dark;
    }
  }
</style>
