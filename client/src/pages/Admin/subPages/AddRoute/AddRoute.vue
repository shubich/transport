<template>
  <div class="wrapper">
    <div class="left">
      <label class="row">
        <span>Номер</span>
        <Input type='text' class="stretch"/>
      </label>
      <label class="row">
        <span>Транспорт</span>
        <select class="stretch">
          <option
            v-for="item in vehicleTypes"
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
          text="Сохранить"
          class="stretch"
        />
      </div>
    </div>
    <div class="center">
      <div class="row control">
        <span>Остановки</span>
        <Input type='text' class="stretch"/>
        <Button
          type="primary"
          text="Добавить"
        />
      </div>
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

  .row {
    display: flex;
    align-items: center;

    .stretch {
      flex: 1;
    }
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

    .control {
      input, button {
        margin-left: 5px;
      }
    }
  }
</style>
