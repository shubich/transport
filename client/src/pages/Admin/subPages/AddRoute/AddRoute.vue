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
        <autocomplete
          class="margin-left stretch"
          resultsValue="_id"
          resultsDisplay="name"
          :source="stops"
        />
        <Button
          type="primary"
          text="Добавить"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Autocomplete from '@/components/Form/Autocomplete';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import Checkbox from '@/components/Form/Checkbox';

export default {
  name: 'AddRoute',
  components: {
    Autocomplete,
    Input,
    Button,
    Checkbox,
  },
  data() {
    return {
      vehicleTypes: ['Автобус', 'Троллейбус'],
      stops: [],
    };
  },
  methods: {
    getStops() {
      axios.get('http://localhost:2000/stop/all')
        .then((response) => { this.stops = response.data; });
    },
  },
  mounted() {
    this.getStops();
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';
  @import '../../../../assets/styles/mixins';

  .margin-left {
    margin-left: 5px;
  }

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
