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
            v-for="item in vehicleTypes"
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
      <div class="table">
        <div class="row header">
          <div class="column">Номер</div>
          <div class="column">Тип ТС</div>
          <div class="column">Маршрут</div>
          <div class="column">Управление</div>
        </div>
        <div
          v-for="(item) in vehicles"
          class="row"
          :key="item.number"
        >
          <div class="column">
            {{item.number}}
          </div>
          <div class="column">
            {{item.type}}
          </div>
          <div class="column">
            {{item.route}}
          </div>
          <div class="column">
            <awesome-icon
              name="edit"
              class="icon edit"
            />
            <awesome-icon
              name="times"
              class="icon delete"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/times';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import { busRoutes, trolleybusRoutes, vehicles } from './constants';

export default {
  name: 'AddRoute',
  components: {
    AwesomeIcon,
    Input,
    Button,
  },
  data() {
    return {
      busRoutes,
      trolleybusRoutes,
      vehicles,
      vehicleTypes: ['Автобус', 'Троллейбус'],
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

  .row {
    display: flex;
    align-items: center;
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;

    .row {
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

  .table {
    .row {
      display: flex;
      align-items: center;

      &.header {
        background: $default;
      }

      .column {
        flex: 1;
        padding: 5px;
        border-top: 1px solid $default-dark;
        border-left: 1px solid $default-dark;

        &:last-child {
          border-right: 1px solid $default-dark;
        }
      }

      &:last-child {
        border-bottom: 1px solid $default-dark;
      }
    }
  }
</style>
