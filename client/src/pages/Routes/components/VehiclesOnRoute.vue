<template>
  <table v-if="vehicles.length">
    <thead>
      <tr>
        <th>Транспорт</th>
        <th>Транзитные остановки</th>
        <th>Время в пути</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in vehicles" :key="item._id">
        <td class="column-vehicle">
          <Bus v-if="item.vehicleType==='Автобус'" class="icon vehicle"/>
          <Trolleybus v-else-if="item.vehicleType==='Троллейбус'" class="icon vehicle"/>
          <div class="route-number">{{item.number}}</div>
        </td>
        <td>{{item.stopsQuantity}}</td>
        <td>{{getRandomTime(item.stopsQuantity)}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import dateFormat from 'dateformat';
import Bus from '@/components/Icons/Bus';
import Trolleybus from '@/components/Icons/Trolleybus';

export default {
  name: 'VehiclesOnRoute',
  components: {
    Bus,
    Trolleybus,
  },
  props: {
    vehicles: Array,
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    getRandomTime(quantity) {
      const min = quantity || 1;
      const max = min * 3;
      const randomTime = Math.floor(Math.random() * (max - min)) + min;
      const date = new Date(0, 0, 0, 0, randomTime);

      if (date.getHours() === 0) {
        return dateFormat(date, 'M мин');
      }

      return dateFormat(date, 'H час M мин');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../../assets/styles/palette';

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
