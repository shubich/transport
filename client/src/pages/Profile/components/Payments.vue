<template>
  <div class="payments">
    <div class="margin-bottom">Быстрые платежи</div>
    <div class="row">
      <div class="column">
        <Bus class="icon"/>
        <div>Автобус</div>
      </div>
      <div class="column">
        <Trolleybus class="icon"/>
        <div>Троллейбус</div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '@/components/Icons/Bus';
import Trolleybus from '@/components/Icons/Trolleybus';

export default {
  name: 'Payments',
  components: {
    Bus,
    Trolleybus,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/palette';

  .payments {
    padding: 15px;
    background: $default;
  }

  .row {
    display: flex;
  }

  .column {
    background: $default-dark;
    text-align: center;
    padding: 15px;

    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .icon {
    color: $blue;
    fill: $blue;
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  .margin-bottom {
    margin-bottom: 15px;
  }
</style>
