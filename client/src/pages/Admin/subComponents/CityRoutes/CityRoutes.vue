<template>
  <div class="routes">
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
</template>

<script>
export default {
  name: 'CityRoutes',
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .row {
    display: flex;
    justify-content: space-around;

    &.header {
      background: $default;
      border-top: 1px solid $black;
      border-left: 1px solid $black;
    }
  }

  .column {
    flex: 1;

    &.target {
      padding: 5px;
      text-align: center;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      &:hover {
        background: $default-dark;
        cursor: pointer;
      }
    }
  }

</style>
