<template>
  <MainPage>
    <div class="container">
      <div class="row margin-bottom">

        <Card
          class="card"
          :cardNumber="me.cardNumber"
          :loginName="me.loginName"
          :bill="me.bill"
        />
        <router-link
          to="balance"
          append
          class="column pay margin-left"
        >
          <div>Пополнить счёт</div>
        </router-link>
        <router-link
          to="/logout"
          class="column exit margin-left"
        >
          <div>Выйти</div>
        </router-link>

      </div>

      <Payments class="margin-bottom" @submit="addRide"/>
      <History class="margin-bottom" :rides="rides"/>
    </div>
  </MainPage>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MainPage from '@/components/Page/MainPage';
import Card from './components/Card';
import Payments from './components/Payments';
import History from './components/History';

const {
  mapState: mapUserState,
  mapActions: mapUserActions,
} = createNamespacedHelpers('users');

const {
  mapState: mapRideState,
  mapActions: mapRideActions,
} = createNamespacedHelpers('rides');

export default {
  name: 'Profile',
  components: {
    MainPage,
    Card,
    Payments,
    History,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapRideState(['rides']),
    ...mapUserState(['me']),
  },
  methods: {
    ...mapRideActions(['addRide', 'getUserRides']),
    ...mapUserActions(['getMe']),
  },
  mounted() {
    this.getUserRides();
    this.getMe();
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  $margin-size: 15px;

  .margin-bottom {
    margin-bottom: $margin-size;
  }

  .margin-left {
    margin-left: 15px;
  }

  .stretch {
    width: 100%;
  }

  .container {
    padding: 15px;
  }

  .row {
    display: flex;
  }

  .column {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card {
    flex: 3;
  }

  .pay {
    background: $green;
    color: $white;
  }

  .exit {
    background: $black;
    color: $white;
  }
</style>
