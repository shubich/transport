<template>
  <div class="wrapper">
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
    <div class="control">
      <label>
        <span>С</span>
        <input type="date">
      </label>
      <label>
        <span>По</span>
        <input type="date">
      </label>
      <label>
        <input type="checkbox">
        <span>Автобусы</span>
      </label>
      <label>
        <input type="checkbox">
        <span>Троллейбусы</span>
      </label>
      <label>
        <input type="checkbox">
        <span>Трамваи</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityRoutes',
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .wrapper {
    display: flex;
  }

  .table {
    flex: 3;
  }

  .control {
    flex: 1;
    display: flex;
    flex-direction: column;

    label {
      padding: 5px;
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
