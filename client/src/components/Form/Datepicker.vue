<template>
  <VueDatepicker
    calendar-class="calendar"
    input-class="input"
    format="dd MMMM yyyy"
    :language="ru"
    :monday-first="true"
    :value="date"
    :placeholder="placeholder"
    @selected="onSelect"
  />
</template>

<script>
import VueDatepicker from 'vuejs-datepicker';
import { ru } from 'vuejs-datepicker/dist/locale';

export default {
  name: 'Datepicker',
  components: { VueDatepicker },
  props: {
    date: {
      type: Date,
      default: () => new Date(),
    },
    placeholder: {
      type: String,
    },
  },
  data() {
    return {
      ru,
    };
  },
  methods: {
    onSelect(date) {
      this.$emit('select', date);
    },
  },
};
</script>

<style lang="scss">
  // problem with scoped!
  @import '../../assets/styles/palette.scss';

  .vdp-datepicker {
    .input {
      border: 1px solid $default-dark;
      outline: none;
      padding: 10px;
      font-size: 100%;
      min-width: 250px;
    }
  }

  .vdp-datepicker__calendar {
    &.calendar {
      width: 100%;
      border: 1px solid $default-dark;

      .cell:not(.blank):not(.disabled) {
        &.day, &.month, &.year {
          &.weekend {
            background-color: $default;
          }

          &.selected {
            background-color: $blue;
            color: $white;
          }

          &:hover {
            border: 1px solid $blue;
          }
        }
      }

      header {
        .prev, .up, .next {
          &:not(disabled):hover {
            background-color: $default;
          }
        }
      }
    }
  }
</style>
