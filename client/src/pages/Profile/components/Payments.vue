<template>
  <div class="payments">
    <div class="row margin-bottom space-between">
      <span>Быстрые платежи</span>
      <span v-show="vehicleType">0.5 BYN</span>
    </div>
    <div class="row">
      <div
        class="column"
        :class="{active: vehicleType==='Автобус'}"
        @click="setVehicleType('Автобус')"
      >
        <Bus class="icon vehicle"/>
        <div>Автобус</div>
      </div>
      <div
        class="column"
        :class="{active: vehicleType==='Троллейбус'}"
        @click="setVehicleType('Троллейбус')"
      >
        <Trolleybus class="icon vehicle"/>
        <div>Троллейбус</div>
      </div>
      <div class="details" v-if="vehicleType">
        <div class="column route">
          <div class="margin-bottom">Номер ТС</div>
          <select v-model="selectedVehicle">
            <option
              v-for="item in visibleVehicles"
              :value="item._id"
              :key="item._id"
            >
              {{item.number}} ({{item.route.number}})
            </option>
          </select>
        </div>
        <div class="column from-to stretch">
          <FromTo @submit="onFromToSubmit" :reverse="false"/>
        </div>
        <Button v-show="!paid" type="default" text="Оплатить" @click="onSubmit"/>
        <div v-show="paid" class="paid" @click="reset">
          <awesome-icon
            name="check"
            class="icon check margin-right"
          />
          Оплачено!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import 'vue-awesome/icons/check';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Bus from '@/components/Icons/Bus';
import Trolleybus from '@/components/Icons/Trolleybus';
import FromTo from '@/components/FromTo';
import Button from '@/components/Form/Button';

const {
  mapState: mapVehicleState,
  mapActions: mapVehicleActions,
} = createNamespacedHelpers('vehicles');

const {
  mapState: mapStopState,
  mapActions: mapStopActions,
} = createNamespacedHelpers('stops');

export default {
  name: 'Payments',
  components: {
    AwesomeIcon,
    Bus,
    Trolleybus,
    FromTo,
    Button,
  },
  data() {
    return {
      vehicleType: null,
      selectedVehicle: null,
      from: null,
      to: null,
      paid: false,
    };
  },
  computed: {
    ...mapVehicleState(['vehicles']),
    ...mapStopState(['stops']),
    visibleVehicles() {
      return this.vehicles.filter(item =>
        item.route.vehicleType === this.vehicleType);
    },
  },
  methods: {
    ...mapVehicleActions(['getVehicles']),
    ...mapStopActions(['getStops']),
    setVehicleType(VT) {
      this.selectedVehicle = null;
      if (VT === this.vehicleType) {
        this.vehicleType = null;
      } else {
        this.vehicleType = VT;
      }
    },
    onFromToSubmit(stops) {
      this.from = stops.from;
      this.to = stops.to;
    },
    onSubmit() {
      const { selectedVehicle, from, to } = this;

      if (!selectedVehicle || !from || !to) return;

      // const data = {
      //   vehicle: selectedVehicle,
      //   from,
      //   to,
      // };

      this.paid = true;

      // console.dir(data);
    },
    reset() {
      this.paid = false;
      this.vehicleType = null;
      this.selectedVehicle = null;
      this.from = null;
      this.to = null;
    },
  },
  mounted() {
    this.getVehicles();
    this.getStops();
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/palette';

  .payments {
    padding: 15px;
    background: $default;
  }

  .row {
    display: flex;
  }

  .space-between {
    justify-content: space-between;
  }

  .stretch {
    flex: 1;
  }

  .column {
    background: $default-dark;
    text-align: center;
    padding: 15px;
  }

  .details {
    flex: 1;
    display: flex;
  }

  .paid {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;
    background: $success;
    color: $white;
  }

  .icon.vehicle {
    fill: $black;
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  .active .icon {
    fill: $blue;
  }

  .margin-bottom {
    margin-bottom: 15px;
  }

  .margin-right {
    margin-right: 5px;
  }

  .from-to, .route {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .route {
    width: 95px;

    select {
      padding: 3px 6px;
    }
  }
</style>
