<template>
  <div class="history">
    <div class="row space-between margin-bottom">
      <div>История поездок</div>
      <router-link to="#">
        <span @click="toggleShowAll">
          {{showAll ? "скрыть" : "показать все"}}
        </span>
      </router-link>
    </div>
    <div
      v-for="item in visibleRides"
      :key="item._id"
      @click="$emit('rideClick', item._id)"
      class="row ride margin-bottom"
    >
      <div class="column vehicle">
        <Bus
          v-if="item.vehicle.route.vehicleType==='Автобус'"
          class="icon"
        />
        <Trolleybus
          v-else-if="item.vehicle.route.vehicleType==='Троллейбус'"
          class="icon"
        />
        <div class="number">{{item.vehicle.route.number}}</div>
      </div>
      <div class="column direction">
        <awesome-icon
          name="circle"
          class="icon from"
        />
        <awesome-icon
          name="arrow-down"
          class="icon"
        />
        <awesome-icon
          name="circle"
          class="icon to"
        />
      </div>
      <div class="column stops">
        <div>{{item.from.name}}</div>
        <div>{{item.to.name}}</div>
      </div>
      <div class="column dates">
        <div class="time">{{getTime(item.date)}}</div>
        <div class="date">{{getDate(item.date)}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrow-down';
import dateFormat from 'dateformat';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Bus from '@/components/Icons/Bus';
import Trolleybus from '@/components/Icons/Trolleybus';

export default {
  name: 'History',
  components: {
    AwesomeIcon,
    Bus,
    Trolleybus,
  },
  props: {
    rides: Array,
  },
  data() {
    return {
      showAll: false,
    };
  },
  computed: {
    visibleRides() {
      return this.showAll
        ? this.rides
        : this.rides.slice(0, 3);
    },
  },
  methods: {
    toggleShowAll() {
      this.showAll = !this.showAll;
    },
    getDate(stringDate) {
      return dateFormat(stringDate, 'dd.mm.yyyy');
    },
    getTime(stringDate) {
      return dateFormat(stringDate, 'HH:MM');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/palette';

  .margin-bottom {
    margin-bottom: 15px;
  }

  .space-between {
    justify-content: space-between;
  }

  .history {
    background: $default;
    padding: 15px;
  }

  .ride {
    background: $default-dark;
    padding: 15px;
  }

  .row {
    display: flex;
    align-items: center;
  }

  .column {
    display: flex;
    flex-direction: column;
  }

  .dates {
    align-items: center;
  }

  .vehicle {
    flex-direction: row;
    margin-right: 5px;
    padding: 5px;
    background: $blue;
    color: $white;

    .icon {
      width: 30px;
      height: 30px;
      margin-right: 5px;
    }

    .number {
      font-size: 25px;
      line-height: 34px;
      width: 30px;
      text-align: center;
    }
  }

  .stops {
    height: 45px;
    justify-content: space-between;
    flex: 1;
  }

  .direction {
    height: 45px;
    margin-right: 5px;
    .icon {
      width: 10px;
    }
  }

  .from { color: $red; }
  .to { color: $blue; }

</style>
