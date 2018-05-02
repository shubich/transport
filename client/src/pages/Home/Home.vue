<template>
  <MainPage>
    <div class="container">
      <div id="map"></div>
    </div>
  </MainPage>
</template>

<script>
import MainPage from '@/components/Page/MainPage';

export default {
  name: 'Home',
  components: {
    MainPage,
  },
  data() {
    return {
      myMap: null,
    };
  },
  mounted() {
    /* eslint-disable-next-line */
    ymaps.ready(this.initMap);
  },
  methods: {
    initMap() {
      /* eslint-disable-next-line */
      this.myMap = new ymaps.Map('map', {
        center: [52.099593, 23.758761],
        zoom: 15,
      });
    },
  },
};
</script>

<style scoped>
  #map {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 49px;
    left: 0;
  }
</style>
