<template>
  <MainPage>
    <div class="container">
      <div id="map"></div>
      <div v-if="showRoutes" class="routes">
        <span>Маршрут</span>
        <select @change="setRoute($event.target.value)">
          <option
            v-for="(item, index) in routesByStops"
            :key="item.number"
            :value="index"
          >
            {{item.vehicleType}}
            №{{item.number}}
          </option>
        </select>
      </div>
    </div>
  </MainPage>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MainPage from '@/components/Page/MainPage';

const { mapState } = createNamespacedHelpers('routes');

export default {
  name: 'Home',
  components: {
    MainPage,
  },
  computed: {
    ...mapState(['routesByStops', 'way']),
    showRoutes() {
      return this.routesByStops.length;
    },
    mapCenter() {
      if (!this.showRoutes) return [52.099593, 23.758761];
      return [
        this.way.from.longitude,
        this.way.from.latitude,
      ];
    },
  },
  data() {
    return {
      myMap: null,
    };
  },
  mounted() {
    /* eslint-disable no-undef */
    /* eslint-disable no-alert */
    ymaps.ready(this.initMap);
  },
  methods: {
    initMap() {
      this.myMap = new ymaps.Map('map', {
        center: this.mapCenter,
        zoom: 15,
      });

      if (this.showRoutes) {
        this.setRoute();
      }
    },
    setRoute(index = 0) {
      this.myMap.geoObjects.removeAll();

      const stops = this.routesByStops[index].stops.map(item => ({
        type: 'viaPoint',
        point: [
          item.longitude,
          item.latitude,
        ],
      }));
      stops[0].type = 'wayPoint';
      stops[stops.length - 1].type = 'wayPoint';

      ymaps.route(stops).then(
        (route) => {
          this.myMap.geoObjects.add(route);
        },
        (error) => {
          alert(`Возникла ошибка: ${error.message}`);
        },
      );
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';


  #map {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 49px;
    left: 0;
  }

  .routes {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 223px;
    height: 28px;
    background: $white;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      font-size: 14px;
    }

    select {
      padding: 3px 6px;
    }
  }
</style>
