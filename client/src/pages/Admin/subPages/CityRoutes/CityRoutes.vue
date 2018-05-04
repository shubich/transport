<template>
  <div class="wrapper">
    <div class="control">
      <router-link :to="{ path: 'add-route'}" append>
        <Button type="primary" text="Добавить маршрут" />
      </router-link>
      <div class="date-range">
        <Datepicker />
        &#8211;
        <Datepicker />
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
      <Checkbox
        label="Трамваи"
        type="danger"
        checked
        disabled
      />
    </div>
    <div class="table">
      <header class="header row">
        <div class="column">
          <div class="row">
            <div class="column target">Маршрут</div>
          </div>
          <div class="row">
            <div class="column target">№</div>
            <div class="column target">Описание</div>
          </div>
        </div>
        <div class="column">
          <div class="row">
            <div class="column target">Транспорт</div>
          </div>
          <div class="row">
            <div class="column target">Тип</div>
            <div class="column target">Количество</div>
          </div>
        </div>
        <div class="column">
          <div class="row">
            <div class="column target">Статистика</div>
          </div>
          <div class="row">
            <div class="column target">Пассажиры</div>
            <div class="column target">Прибыль</div>
          </div>
        </div>
      </header>
      <div></div>
    </div>
  </div>
</template>

<script>
import Datepicker from '@/components/Form/Datepicker';
import Button from '@/components/Form/Button';
import Checkbox from '@/components/Form/Checkbox';

export default {
  name: 'CityRoutes',
  components: {
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
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  $space-between: 15px;

  .wrapper {
    display: flex;
    flex-direction: column;
    padding: $space-between;
  }

  .table {
    flex: 3;
  }

  .control {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $space-between;

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

  .row {
    display: flex;
    justify-content: space-around;

    &.header {
      background: $default-light;
      border-top: 1px solid $blue;
      border-left: 1px solid $blue;
    }
  }

  .column {
    flex: 1;

    &.target {
      padding: 5px;
      text-align: center;
      border-bottom: 1px solid $blue;
      border-right: 1px solid $blue;

      &:hover {
        background: $default;
        cursor: pointer;
      }
    }
  }

</style>
