<template>
  <MainPage>
    <div class="container">
      <div class="card margin-bottom">
        <div class="column">
          <awesome-icon
            name="credit-card"
            class="icon"
          />
        </div>
        <div class="column">
          <div class="number">1234 5678 9012 3456</div>
          <div class="bill">4,37 BYN</div>
        </div>
      </div>
      <Button type="success" text="Пополнить счёт" class="stretch margin-bottom"/>
      <div class="payments margin-bottom">
        <div class="margin-bottom">Быстрые платежи</div>
        <div class="row">
          <div class="column">
            <awesome-icon
              name="bus"
              class="icon"
            />
            <div>Автобус</div>
          </div>
          <div class="column">
            <awesome-icon
              name="subway"
              class="icon"
            />
            <div>Троллейбус</div>
          </div>
        </div>
      </div>
      <div class="history margin-bottom">
        <div class="margin-bottom">История поездок</div>
        <div v-for="item in RIDES" :key="item.id" class="row ride">
          <div class="column vehicle">
            <awesome-icon
              :name="item.vehicleType"
              class="icon"
            />
            <div class="number">{{item.vehicleNumber}}</div>
          </div>
          <div class="column icons">
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
      <Button type="warning" text="Все поездки" class="stretch margin-bottom"/>
      <!-- <pre>{{user}}</pre> -->
    </div>
  </MainPage>
</template>

<script>
import 'vue-awesome/icons/credit-card';
import 'vue-awesome/icons/bus';
import 'vue-awesome/icons/subway';
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrow-down';
import AwesomeIcon from 'vue-awesome/components/Icon';
import axios from 'axios';
import MainPage from '@/components/Page/MainPage';
import Button from '@/components/Form/Button';
import { RIDES } from './constants';

export default {
  name: 'Profile',
  components: {
    AwesomeIcon,
    MainPage,
    Button,
  },
  data() {
    return {
      RIDES,
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

  .container {
    padding: 15px;
  }

  .margin-bottom {
    margin-bottom: 15px;
  }

  .stretch {
    width: 100%;
  }

  .card {
    background: $gray;
    color: $white;
    padding: 10px 15px;
    display: flex;
    align-items: center;

    .column {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }

    .icon {
      width: 45px;
      height: 45px;
    }

    .number {
      margin-bottom: 10px;
    }
  }

  .payments {
    padding: 15px;
    background: $default;

    .row {
      display: flex;

      .column {
        background: $default-dark;
        text-align: center;
        padding: 15px;

        &:not(:last-child) {
          margin-right: 15px;
        }

        .icon {
          color: $blue;
          margin-bottom: 10px;
          width: 50px;
          height: 50px;
        }
      }
    }
  }

  .history {
    background: $default;
    padding: 15px;

    .ride {
      background: $default-dark;
      padding: 15px;
    }

    .row {
      display: flex;
      align-items: center;

      .column {
        display: flex;
        flex-direction: column;

        &.vehicle {
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

        &.stops {
          height: 45px;
          justify-content: space-between;
        }

        &.icons {
          height: 45px;
          margin-right: 5px;
          .icon {
            width: 10px;
          }
        }

        .from { color: $red; }
        .to { color: $blue; }
      }
    }
  }
</style>
