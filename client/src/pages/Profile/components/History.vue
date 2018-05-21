<template>
  <div class="history">
    <div class="row space-between margin-bottom">
      <div>История поездок</div>
      <router-link to="#">
        показать все
      </router-link>
    </div>
    <div v-for="item in rides" :key="item._id" class="row ride margin-bottom">
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
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrow-down';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Bus from '@/components/Icons/Bus';
import Trolleybus from '@/components/Icons/Trolleybus';

export default {
  name: 'History',
  props: {
    rides: Array,
  },
  data() {
    return {
    };
  },
  components: {
    AwesomeIcon,
    Bus,
    Trolleybus,
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
