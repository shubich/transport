<template>
  <MainPage>
    <div class="container">
      <div class="row margin-bottom">

        <Card
          class="card"
          :cardNumber="user.cardNumber"
          :bill="user.bill"
        />
        <router-link
          to="#"
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

      <Payments class="margin-bottom"/>
      <History class="margin-bottom"/>
    </div>
  </MainPage>
</template>

<script>
import axios from 'axios';
import MainPage from '@/components/Page/MainPage';
import Card from './components/Card';
import Payments from './components/Payments';
import History from './components/History';

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
      user: null,
    };
  },
  mounted() {
    axios.get('http://localhost:2000/user/me')
      .then((response) => {
        this.user = response.data;
      });
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
