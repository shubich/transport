<template>
  <section class="route-builder">
    <div class="row margin-bottom space-between">
      <h1>Маршрут</h1>
      <a class="link" @click="$emit('reset')">Сбросить</a>
    </div>
    <FromTo class="margin-bottom" @submit="onSubmit"/>
    <div class="row space-around">
      <a class="link" @click="$emit('showOnMap')">Показать на карте</a>
    </div>
  </section>
</template>

<script>
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrows-alt-v';
import AwesomeIcon from 'vue-awesome/components/Icon';
import FromTo from '@/components/FromTo';

export default {
  name: 'Routes',
  components: {
    AwesomeIcon,
    FromTo,
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    onSubmit(stops) {
      this.$emit('submit', stops);
    },
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
