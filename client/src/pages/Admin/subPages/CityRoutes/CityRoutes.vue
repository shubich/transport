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
        v-for="item in VEHICLE_TYPES"
        :key="item"
        type="primary"
        :label="item"
        :checked="isVTActive(item)"
        @click="toggleVT(item)"
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
import { VEHICLE_TYPES } from '@/constants/vehicles';

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
      VEHICLE_TYPES,
      activeVT: [...VEHICLE_TYPES],
    };
  },
  computed: {
    ...mapState(['routes']),
    visibleRoutes() {
      const Bus = VEHICLE_TYPES[0];
      const Trolleybus = VEHICLE_TYPES[1];
      return this.routes.filter((item) => {
        if (item.vehicleType === Bus && this.isVTActive(Bus)) return true;
        if (item.vehicleType === Trolleybus && this.isVTActive(Trolleybus)) return true;
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
    isVTActive(VT) {
      return this.activeVT.includes(VT);
    },
    toggleVT(VT) {
      const index = this.activeVT.indexOf(VT);

      if (index > -1) {
        this.activeVT.splice(index, 1);
      } else {
        this.activeVT.push(VT);
      }
    },
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
</style>
