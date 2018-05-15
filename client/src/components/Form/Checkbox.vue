<template>
  <label
    class="checkbox"
    :class="{disabled, checked}"
    @click="$emit('click')"
  >
    <div class="checkmark" :class="type">
      <awesome-icon
        v-if="disabled"
        name="times"
        class="icon"
      />
      <awesome-icon
        v-else-if="checked"
        name="check"
        class="icon"
      />
    </div>
    <span v-if="label" class="label">{{label}}</span>
  </label>
</template>

<script>
import 'vue-awesome/icons/check';
import 'vue-awesome/icons/times';
import AwesomeIcon from 'vue-awesome/components/Icon';

export default {
  name: 'Checkbox',
  props: {
    type: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      required: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  components: { AwesomeIcon },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette.scss';

  $checkmark-size: 18px;
  $icon-size: 14px;

  .checkbox {
    display: flex;
    align-items: center;
    cursor: pointer;

    &.disabled { color: $gray }

    &:hover, &.checked {
      .primary { border-color: $primary }
      .success { border-color: $success }
      .danger { border-color: $danger }
    }

    &.checked {
      .primary { background-color: $primary }
      .success { background-color: $success }
      .danger { background-color: $danger }
    }

    .checkmark {
      display: flex;
      justify-content: center;
      align-items: center;
      width: $checkmark-size;
      height: $checkmark-size;
      border: 1px solid $default-dark;
      border-radius: 2px;
      transition: border 0.15s ease-in-out, color 0.15s ease-in-out;
      background-color: $white;

      .icon {
        color: $white;
        border-radius: 2px;
        padding: 2px;
        width: $icon-size;
        height: $icon-size;
      }
    }

    .label {
      padding-left: 5px;
    }
  }
</style>
