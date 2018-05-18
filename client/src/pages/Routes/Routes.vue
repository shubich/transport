<template>
  <MainPage>
    <div class="container">
      <RouteBuilder :stops="stops" />
      <VehiclesOnRoute />
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

.container {
  padding: 15px;
}
</style>
