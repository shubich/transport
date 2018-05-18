<template>
  <section class="route-builder">
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
</template>

<script>
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrows-alt-v';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Autocomplete from '@/components/Form/Autocomplete';

export default {
  name: 'Routes',
  components: {
    AwesomeIcon,
    Autocomplete,
  },
  props: {
    stops: Array,
  },
  computed: {
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/palette';

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

.route-builder {
  background: $default;
  padding: 15px;
  margin-bottom: 15px;
}

h1 {
  margin: 0;
  font-size: 26px;
}

.link {
  font-size: 14px;
  text-transform: uppercase;
}
</style>
