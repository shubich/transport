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
    <Builder
      class="center"
      :stops="stops"
      :selectedStops="selectedStops"
      title="Прямое направление"
    />
    <Builder
      class="center"
      :stops="stops"
      :selectedStops="selectedStopsReverse"
      title="Обратное направление"
    />
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
import { VEHICLE_TYPES } from '@/constants/vehicles';
import Builder from './components/Builder';


const { mapState: mapStopState, mapActions: mapStopActions } = createNamespacedHelpers('stops');
const { mapState: mapRouteState, mapActions: mapRouteActions } = createNamespacedHelpers('routes');

export default {
  name: 'RouteEditor',
  components: {
    AwesomeIcon,
    Autocomplete,
    Input,
    Button,
    Builder,
  },
  computed: {
    ...mapStopState(['stops']),
    ...mapRouteState(['route']),
  },
  data() {
    return {
      VEHICLE_TYPES,
      number: '',
      vehicleType: '',
      selectedStops: [],
      selectedStopsReverse: [],
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
        stopsReverse: this.selectedStopsReverse.map(item => item._id),
      };

      if (this.editing) {
        this.editRoute({ _id: this.route, ...data });
      } else {
        this.addRoute(data);
      }
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
      this.selectedStops = [...this.route.stops];
      this.selectedStopsReverse = [...this.route.stopsReverse] || [...this.route.stops].reverse();
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
  }
</style>
