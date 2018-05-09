<template>
  <div class="wrapper">
    <div class="left">
      <label class="row">
        <span>Номер</span>
        <Input type='text' class="stretch"/>
      </label>
      <label class="row">
        <span>Транспорт</span>
        <select class="stretch">
          <option
            v-for="item in vehicleTypes"
            :value="item"
            :key="item"
          >
            {{item}}
          </option>
        </select>
      </label>
      <div class="row">
        <Button
          type="success"
          text="Сохранить"
          class="stretch"
        />
      </div>
    </div>
    <div class="center">
      <div class="row control margin-bottom">
        <span>Остановки</span>
        <autocomplete
          class="margin-left stretch"
          resultsValue="_id"
          resultsDisplay="name"
          :source="availableStops"
          @select="onStopSelect"
        />
        <Button
          type="primary"
          text="Добавить"
        />
      </div>
      <div class="selected-stops">
        <div
          class="row"
          v-for="item in selectedStops"
          :key="item._id"
        >
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Autocomplete from '@/components/Form/Autocomplete';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import Checkbox from '@/components/Form/Checkbox';

const {
  mapState,
  mapActions,
} = createNamespacedHelpers('stops');

export default {
  name: 'AddRoute',
  components: {
    Autocomplete,
    Input,
    Button,
    Checkbox,
  },
  computed: {
    ...mapState([
      'stops',
    ]),
    availableStops() {
      return this.stops.filter((item) => {
        if (this.selectedStops.includes(item)) return false;
        return true;
      });
    },
  },
  data() {
    return {
      vehicleTypes: ['Автобус', 'Троллейбус'],
      selectedStops: [],
    };
  },
  methods: {
    ...mapActions([
      'getStops',
    ]),
    onStopSelect(stop) {
      this.selectedStops.push(stop);
    },
  },
  mounted() {
    this.getStops();
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';
  @import '../../../../assets/styles/mixins';

  .margin-left {
    margin-left: 5px;
  }

  .margin-bottom {
    margin-bottom: 15px;
  }

  .wrapper {
    display: flex;
  }

  .row {
    display: flex;
    align-items: center;

    .stretch {
      flex: 1;
    }
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;

    .row {
      input, select {
        margin-left: 5px;
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  .center {
    flex: 3;
    margin-left: 15px;

    .control {
      input, button {
        margin-left: 5px;
      }
    }

    .selected-stops .row {
      border: 1px solid $default;
      &:not(:last-child) {
        border-bottom: none;
      }
      padding: 6px 12px;
    }
  }
</style>
