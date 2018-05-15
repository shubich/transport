<template>
  <div class="wrapper">
    <div class="control">
      <router-link to="add-route" append>
        <Button type="primary" text="Добавить маршрут" />
      </router-link>
      <div class="date-range">
        <Datepicker :date="startDate"/>
        &#8211;
        <Datepicker :date="endDate"/>
      </div>
      <Checkbox
        type="primary"
        label="Автобусы"
        :checked="showBuses"
        @click="showBuses=!showBuses"
      />
      <Checkbox
        type="primary"
        label="Троллейбусы"
        :checked="showTrolleybuses"
        @click="showTrolleybuses=!showTrolleybuses"
      />
    </div>
    <table>
      <thead>
        <tr>
          <th colspan="2">Маршрут</th>
          <th colspan="2">Транспорт</th>
          <th colspan="2">Статистика</th>
          <th colspan="2" rowspan="2">Управление</th>
        </tr>
        <tr>
          <th>№</th>
          <th>Описание</th>
          <th>Тип</th>
          <th>Количество</th>
          <th>Пассажиры</th>
          <th>Прибыль</th>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <td>Итого</td>
          <td colspan="7">...</td>
        </tr>
      </tfoot>
      <tbody>
        <tr
          v-for="item in visibleRoutes"
          :key="item.number+item.type"
        >
          <td>{{item.number}}</td>
          <td>{{item.description}}</td>
          <td>{{item.vehicleType}}</td>
          <td>{{item.count}}</td>
          <td>{{item.passengers}}</td>
          <td>{{item.profit}}</td>
          <td>
            <router-link :to="'edit-route/'+item._id" append>
              <awesome-icon name="edit" class="icon edit"/>
            </router-link>
          </td>
          <td>
            <label @click="deleteRoute(item._id)">
              <awesome-icon name="times" class="icon delete"/>
            </label>
          </td>
        </tr>
      </tbody>
      </table>
  </div>
</template>

<script>
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/times';
import AwesomeIcon from 'vue-awesome/components/Icon';
import { createNamespacedHelpers } from 'vuex';
import Datepicker from '@/components/Form/Datepicker';
import Button from '@/components/Form/Button';
import Checkbox from '@/components/Form/Checkbox';

const { mapState, mapActions } = createNamespacedHelpers('routes');

export default {
  name: 'CityRoutes',
  components: {
    AwesomeIcon,
    Datepicker,
    Button,
    Checkbox,
  },
  data() {
    return {
      showBuses: true,
      showTrolleybuses: true,
    };
  },
  computed: {
    ...mapState(['routes']),
    visibleRoutes() {
      return this.routes.filter((item) => {
        if (item.vehicleType === 'Автобус' && this.showBuses) return item;
        if (item.vehicleType === 'Троллейбус' && this.showTrolleybuses) return item;
        return false;
      });
    },
    startDate() {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    },
    endDate() {
      return new Date();
    },
  },
  methods: {
    ...mapActions(['getRoutes', 'deleteRoute']),
  },
  mounted() {
    this.getRoutes();
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .wrapper {
    display: flex;
    flex-direction: column;
  }

  .control {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    label {
      padding: 5px;
    }

    .date-range {
      flex-basis: 550px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
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

  table {
    border-collapse: collapse;
  }

  thead {
    background: $default;
  }

  tbody {
    text-align: center;
  }

  th, td {
    border: 1px solid $default-dark;
    font-weight: unset;
    padding: 5px;
  }
</style>
