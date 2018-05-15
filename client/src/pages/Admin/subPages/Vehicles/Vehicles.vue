<template>
  <div class="wrapper">
    <div class="left">
      <label class="row">
        <span>Номер</span>
        <Input type='text' class="stretch"/>
      </label>
      <label class="row">
        <span>Тип ТС</span>
        <select class="stretch" v-model="selectedVehicle">
          <option
            v-for="item in VEHICLE_TYPES"
            :value="item"
            :key="item"
          >
            {{item}}
          </option>
        </select>
      </label>
      <label class="row">
        <span>Маршрут</span>
        <select class="stretch" v-model="selectedRoute">
          <option
            v-for="item in routes"
            :value="item"
            :key="item"
          >
            {{item}}
          </option>
        </select>
      </label>
      <div class="row">
        <Button
          type="success"
          text="Зарегистрировать ТС"
          class="stretch"
        />
      </div>
    </div>
    <div class="center">
      <table>
        <thead>
          <tr>
            <th>Номер</th>
            <th>Тип ТС</th>
            <th>Маршрут</th>
            <th colspan="2">Управление</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item) in vehicles"
            :key="item.number"
          >
            <td>
              {{item.number}}
            </td>
            <td>
              {{item.type}}
            </td>
            <td>
              {{item.route}}
            </td>
            <td>
              <awesome-icon
                name="edit"
                class="icon edit"
              />
            </td>
            <td>
              <awesome-icon
                name="times"
                class="icon delete"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/times';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import { VEHICLE_TYPES } from '@/constants/vehicles';
import { busRoutes, trolleybusRoutes, vehicles } from './constants';

export default {
  name: 'Vehicles',
  components: {
    AwesomeIcon,
    Input,
    Button,
  },
  data() {
    return {
      VEHICLE_TYPES,
      busRoutes,
      trolleybusRoutes,
      vehicles,
      selectedVehicle: null,
      selectedRoute: null,
    };
  },
  computed: {
    routes() {
      if (this.selectedVehicle === 'Автобус') return busRoutes;
      if (this.selectedVehicle === 'Троллейбус') return trolleybusRoutes;
      return [];
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .wrapper {
    display: flex;
  }

  .stretch {
    flex: 1;
  }

  .icon {
    cursor: pointer;
    width: 14px;
    height: 14px;

    &.edit {
      color: $warning;
    }

    &.delete {
      color: $danger;
    }
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;

    .row {
      display: flex;
      align-items: center;

      input, select {
        margin-left: 5px;
      }

      &:not(:last-child) {
        margin-bottom: 15px;
      }
    }
  }

  .center {
    flex: 3;
    margin-left: 15px;
  }
</style>
