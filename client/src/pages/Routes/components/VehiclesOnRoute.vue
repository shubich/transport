<template>
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
</template>

<script>
import Bus from '@/components/Icons/Bus';
import Trolleybus from '@/components/Icons/Trolleybus';

export default {
  name: 'VehiclesOnRoute',
  components: {
    Bus,
    Trolleybus,
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
