<template>
  <MainPage>
    <div class="container">
      <section>
        <div class="row margin-bottom space-between">
          <h1>Маршрут</h1>
          <a class="link">Сбросить</a>
        </div>
        <div class="row margin-bottom">
          <div class="column col-4">
            <div class="row margin-bottom">
              <awesome-icon
                name="circle"
                class="icon from"
              />
              <Autocomplete
                class="margin-left"
                placeholder="Откуда"
                :source="stops"
                resultsValue="_id"
                resultsDisplay="name"
                :clearOnSelect="false"
              />
            </div>
            <div class="row">
              <awesome-icon
                name="circle"
                class="icon to"
              />
              <Autocomplete
                class="margin-left"
                placeholder="Куда"
                :source="stops"
                resultsValue="_id"
                resultsDisplay="name"
                :clearOnSelect="false"
              />
            </div>
          </div>
          <div class="column col-0 margin-left">
            <awesome-icon
              name="arrows-alt-v"
              class="icon arrows"
            />
          </div>
        </div>
        <div class="row space-around">
          <a class="link">Показать на карте</a>
        </div>
      </section>
      <table>
        <thead>
          <tr>
            <th>Транспорт</th>
            <th>Транзитные остановки</th>
            <th>Время в пути</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="column-vehicle">
              <Bus class="icon vehicle"/>
              <div class="route-number">6</div>
            </td>
            <td>6</td>
            <td>12 минут</td>
          </tr>
          <tr>
            <td class="column-vehicle">
              <Trolleybus class="icon vehicle"/>
              <div class="route-number">1</div>
            </td>
            <td>6</td>
            <td>15 минут</td>
          </tr>
        </tbody>
      </table>
    </div>
  </MainPage>
</template>

<script>
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrows-alt-v';
import AwesomeIcon from 'vue-awesome/components/Icon';
import { createNamespacedHelpers } from 'vuex';
import MainPage from '@/components/Page/MainPage';
import Autocomplete from '@/components/Form/Autocomplete';
import Bus from '@/components/Icons/Bus';
import Trolleybus from '@/components/Icons/Trolleybus';

const {
  mapState: mapStopState,
  mapActions: mapStopActions,
} = createNamespacedHelpers('stops');

export default {
  name: 'Routes',
  components: {
    MainPage,
    AwesomeIcon,
    Autocomplete,
    Bus,
    Trolleybus,
  },
  computed: {
    ...mapStopState(['stops']),
  },
  mounted() {
    this.getStops();
  },
  methods: {
    ...mapStopActions(['getStops']),
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/palette';

.margin-left {
  margin-left: 15px;
}

.margin-bottom {
  margin-bottom: 15px;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.container {
  padding: 15px;
}

.row {
  display: flex;
  align-items: center;
}

.col-0 { flex: 0; }
.col-1 { flex: 1; }
.col-2 { flex: 2; }
.col-3 { flex: 3; }
.col-4 { flex: 4; }

.from { color: $red; }
.to { color: $blue; }

.arrows {
  width: 25px;
  height: 25px;
}

section {
  background: $default;
  padding: 15px;
  margin-bottom: 15px;
}

h1 {
  margin: 0;
  font-size: 26px;
}

h2 {
  margin: 0;
  font-size: 20px;
}

.link {
  font-size: 14px;
  text-transform: uppercase;
}

.icon.vehicle {
  width: 50px;
  height: 50px;
  fill: $black;
}

.route-number {
  font-size: 40px;
  margin-left: 5px;
  line-height: 50px;
  display: inline-block;
  vertical-align: bottom;
}
</style>
