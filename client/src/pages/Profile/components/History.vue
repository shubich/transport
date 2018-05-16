<template>
  <div class="history">
    <div class="row margin-bottom">
      <div>История поездок</div>
      <router-link
        to="/logout"
        class="margin-left"
      >
        показать все
      </router-link>
    </div>
    <div v-for="item in RIDES" :key="item.id" class="row ride margin-bottom">
      <div class="column vehicle">
        <awesome-icon
          :name="item.vehicleType"
          class="icon"
        />
        <div class="number">{{item.vehicleNumber}}</div>
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
        <div>{{item.from}}</div>
        <div>{{item.to}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/bus';
import 'vue-awesome/icons/subway';
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrow-down';
import AwesomeIcon from 'vue-awesome/components/Icon';
import { RIDES } from '../constants';

export default {
  name: 'History',
  props: {

  },
  data() {
    return {
      RIDES,
    };
  },
  components: {
    AwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/palette';

  .margin-bottom {
    margin-bottom: 15px;
  }

  .margin-left {
    margin-left: 15px;
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
      font-size: 30px;
      width: 40px;
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
