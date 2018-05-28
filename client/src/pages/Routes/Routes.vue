<template>
  <MainPage>
    <div class="container">
      <RouteBuilder
        :stops="stops"
        @submit="getRoutesByStops"
        @showOnMap="showOnMap"
        @reset="reset"
      />
      <VehiclesOnRoute :vehicles="routesByStops"/>
    </div>
  </MainPage>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import MainPage from '@/components/Page/MainPage';
import RouteBuilder from './components/RouteBuilder';
import VehiclesOnRoute from './components/VehiclesOnRoute';

const {
  mapState: mapStopState,
  mapActions: mapStopActions,
} = createNamespacedHelpers('stops');

const {
  mapState: mapRouteState,
  mapActions: mapRouteActions,
  mapMutations: mapRouteMutations,
} = createNamespacedHelpers('routes');

export default {
  name: 'Routes',
  components: {
    MainPage,
    RouteBuilder,
    VehiclesOnRoute,
  },
  computed: {
    ...mapStopState(['stops']),
    ...mapRouteState(['routesByStops', 'way']),
  },
  data() {
    return {
      stopFrom: null,
      stopTo: null,
    };
  },
  mounted() {
    this.reset();
    this.getStops();
  },
  methods: {
    /* eslint-disable no-underscore-dangle */
    ...mapStopActions(['getStops']),
    ...mapRouteActions(['getRoutesByStops']),
    ...mapRouteMutations({
      resetRoutes: 'RESET',
    }),
    showOnMap() {
      this.$router.push('/');
    },
    reset() {
      this.resetRoutes();
      window.dispatchEvent(new Event('reset'));
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
