<template>
  <VueAutocomplete
    ref="autocomplete"
    :placeholder="placeholder"
    :source="source"
    input-class="form-control"
    :results-property="resultsProperty"
    :resultsValue="resultsValue"
    :resultsDisplay="resultsDisplay"
    @selected="onSelect"
  />
</template>

<script>
import VueAutocomplete from 'vuejs-auto-complete';

export default {
  name: 'Autocomplete',
  components: { VueAutocomplete },
  props: {
    placeholder: { type: String, default: 'Поиск' },
    clearOnSelect: { type: Boolean, default: true },
    source: [String, Function, Object, Array],
    resultsProperty: String,
    resultsValue: String,
    resultsDisplay: String,
  },
  data() {
    return {
    };
  },
  methods: {
    onSelect(item) {
      this.$emit('select', item.selectedObject);
      // access the autocomplete component methods from the parent
      if (this.clearOnSelect) {
        this.reset();
      }
    },
    reset() {
      this.$refs.autocomplete.clearValues();
    },
  },
  mounted() {
    window.addEventListener('reset', this.reset);
  },
  beforeDestroy() {
    window.removeEventListener('reset', this.reset);
  },
};
</script>

<style lang="scss">
  // problem with scoped!
  @import '../../assets/styles/palette';
  @import '../../assets/styles/mixins';

  .autocomplete__box.form-control {
    border: none;
    padding: 0;

    .autocomplete__icon {
      display: none;
    }

    .autocomplete__inputs {
      padding: 0;
      input {
        @include input();

        &:focus {
          @include input-focus();
        }
      }
    }
  }

  .autocomplete__results {
    .autocomplete__results__item {
      &:hover {
        background: $default;
      }
      &.autocomplete__selected {
        background: $default-dark;
      }
    }
  }
</style>
