<template>
  <MainPage>
    <div class="container">
      <RouteBuilder :stops="stops" @submit="getRoutesByStops"/>
      <VehiclesOnRoute :vehicles="vehicles"/>
    </div>
  </MainPage>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MainPage from '@/components/Page/MainPage';
import api from '@/api';
import RouteBuilder from './components/RouteBuilder';
import VehiclesOnRoute from './components/VehiclesOnRoute';

const {
  mapState: mapStopState,
  mapActions: mapStopActions,
} = createNamespacedHelpers('stops');

export default {
  name: 'Routes',
  components: {
    MainPage,
    RouteBuilder,
    VehiclesOnRoute,
  },
  computed: {
    ...mapStopState(['stops']),
  },
  data() {
    return {
      vehicles: [],
    };
  },
  mounted() {
    this.getStops();
  },
  methods: {
    ...mapStopActions(['getStops']),
    getRoutesByStops(way) {
      api.routes.getRoutesByStops(way)
        .then((res) => {
          this.vehicles = res.data.map(item => ({
            ...item,
            stopsQuantity: this.calculateStopsQuantity(way, item.stops),
          }));
        });
    },
    calculateStopsQuantity(way, stops) {
      return Math.abs(stops.indexOf(way.from) - stops.indexOf(way.to) - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/palette';

.container {
  padding: 15px;
}
</style>
