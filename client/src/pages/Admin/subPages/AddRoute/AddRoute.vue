<template>
  <div class="wrapper">
    <span>№</span>
    <Input type='text'/>
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
    <span>Остановки</span>
    <select multiple>
      <option
        v-for="item in busStops"
        :value="item"
        :key="item"
      >
        {{item}}
      </option>
    </select>
    <Button
      type="primary"
      text="Добавить"
    />
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

</style>
