<template>
  <div class="wrapper">
    <div class="left">
      <label class="row">
        <span>Номер</span>
        <Input type='text' class="stretch" v-model="number"/>
      </label>
      <label class="row">
        <span>Транспорт</span>
        <select class="stretch" v-model="vehicleType">
          <option
            v-for="item in VEHICLE_TYPES"
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
          @click="save"
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
          v-for="(item, index) in selectedStops"
          :key="item._id"
        >
          <div class="label">
            {{item.name}}
          </div>
          <div class="manage">
            <div @click="stopToUp(index)">
              <awesome-icon
                name="arrow-up"
                class="icon up"
              />
            </div>
            <div @click="stopToDown(index)">
              <awesome-icon
                name="arrow-down"
                class="icon down"
              />
            </div>
            <div @click="removeStop(index)">
              <awesome-icon
                name="times"
                class="icon remove"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/arrow-up';
import 'vue-awesome/icons/arrow-down';
import AwesomeIcon from 'vue-awesome/components/Icon';
import { createNamespacedHelpers } from 'vuex';
import Autocomplete from '@/components/Form/Autocomplete';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import Checkbox from '@/components/Form/Checkbox';
import { VEHICLE_TYPES } from './constants';

const { mapState: mapStopState, mapActions: mapStopActions } = createNamespacedHelpers('stops');
const { mapState: mapRouteState, mapActions: mapRouteActions } = createNamespacedHelpers('routes');

export default {
  name: 'RouteEditor',
  components: {
    AwesomeIcon,
    Autocomplete,
    Input,
    Button,
    Checkbox,
  },
  computed: {
    ...mapStopState(['stops']),
    ...mapRouteState(['route']),
    availableStops() {
      return this.stops.filter(item =>
        !this.selectedStops.includes(item));
    },
  },
  data() {
    return {
      VEHICLE_TYPES,
      number: '',
      vehicleType: '',
      selectedStops: [],
      editing: null,
    };
  },
  methods: {
    /* eslint-disable no-underscore-dangle */
    ...mapStopActions(['getStops']),
    ...mapRouteActions(['getRoute', 'addRoute', 'editRoute']),
    save() {
      const data = {
        number: this.number,
        vehicleType: this.vehicleType,
        stops: this.selectedStops.map(item => item._id),
      };

      if (this.editing) {
        this.editRoute({ _id: this.route, ...data });
      } else {
        this.addRoute(data);
      }
    },
    onStopSelect(stop) {
      this.selectedStops.push(stop);
    },
    stopToUp(index) {
      if (index === 0) return;
      const movingItem = this.selectedStops[index];
      this.selectedStops.splice(index, 1);
      this.selectedStops.splice(index - 1, 0, movingItem);
    },
    stopToDown(index) {
      if (index === (this.selectedStops.length - 1)) return;
      const movingItem = this.selectedStops[index];
      this.selectedStops.splice(index, 1);
      this.selectedStops.splice(index + 1, 0, movingItem);
    },
    removeStop(index) {
      this.selectedStops.splice(index, 1);
    },
  },
  mounted() {
    this.getStops();

    this.editing = this.$route.params.id;

    if (this.editing) {
      this.getRoute(this.editing);
    }
  },
  watch: {
    route() {
      this.number = this.route.number;
      this.vehicleType = this.route.vehicleType;
      this.selectedStops = this.stops.filter(item =>
        this.route.stops.includes(item._id));
    },
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
      display: flex;
      justify-content: space-between;
      padding: 6px 12px;
      border: 1px solid $default;
      &:not(:last-child) {
        border-bottom: none;
      }

      &:hover {
        background: $default;
      }

      .label {
        flex: 11;
      }

      .manage {
        flex: 1;
        display: flex;
        justify-content: space-between;
      }

      .icon {
        opacity: 0;
        color: $gray;
        &.remove:hover { color: $red; }
        &.up:hover, &.down:hover { color: $blue; }
      }

      &:hover {
        .icon {
          opacity: 1;
        }
      }
    }
  }
</style>
