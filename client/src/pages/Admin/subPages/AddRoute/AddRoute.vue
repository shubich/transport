<template>
  <div class="wrapper">
    <div class="left">
      <label class="row">
        <span>Номер</span>
        <Input type='text'/>
      </label>
      <label class="row">
        <span>Транспорт</span>
        <select>
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
        <span>Остановки</span>
        <Input type='text'/>
      </label>
      <div class="row">
        <Button
          type="success"
          text="Сохранить"
          class="stretch"
        />
      </div>
    </div>
    <div class="center">

    </div>
  </div>
</template>

<script>
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import Checkbox from '@/components/Form/Checkbox';

export default {
  name: 'AddRoute',
  components: {
    Input,
    Button,
    Checkbox,
  },
  data() {
    return {
      vehicleTypes: ['Автобус', 'Троллейбус'],
      busStops: ['Восточный микрорайон', 'Детский городок', 'Парк Воинов-интернационалистов'],
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .wrapper {
    display: flex;
  }

  .left {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .center {
    flex: 3;
    margin-left: 15px;
    background: $default;
  }

  .row {
    display: flex;
    align-items: center;

    input, select {
      flex: 1;
      margin-left: 5px;
    }

    .stretch {
      flex: 1;
    }

    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
</style>
