<template>
  <div class="wrapper">
    <div class="control">
      <Alert
        v-if="addStopResponse"
        class="status"
        :type="ALERT_TYPES[addStopResponse.status]"
        :text="addStopResponse.data"
      />
      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <span>Название</span>
        <Input type='text' v-model.trim="stopName"/>
        <Button
          type="primary"
          text="Добавить"
        />
      </form>
    </div>
    <div class="table">
      <div
        class="row"
        v-for="item in stops"
        :key="item.name"
      >
        <div class="column">
          {{item.name}}
        </div>
        <div class="column manage">
          <Button type="warning" text="Изменить"/>
        </div>
        <div class="column manage">
          <Button type="danger" text="Удалить"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Alert from '@/components/Alert';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';
import { ALERT_TYPES } from './config';

export default {
  name: 'Stops',
  components: {
    Alert,
    Input,
    Button,
  },
  data() {
    return {
      ALERT_TYPES,
      stopName: '',
      stops: null,
      addStopResponse: null,
    };
  },
  mounted() {
    axios.get('http://localhost:2000/stop/all')
      .then((response) => { this.stops = response.data; })
      .catch((err) => { this.addStopResponse = err.response; });
  },
  methods: {
    onSubmit() {
      axios.post('http://localhost:2000/stop/', { name: this.stopName })
        .then((response) => { this.addStopResponse = response; })
        .catch((err) => { this.addStopResponse = err.response; });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .table {
    margin-top: 15px;

    .row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid $default-dark;

      &:not(:last-child) {
        border-bottom: none;
      }

      &:hover {
        background: $default;
        .manage {
          opacity: 1;
        }
      }
    }

    .column {
      padding: 5px;
      flex: 1;
    }

    .manage {
      opacity: 0;
    }
  }

</style>
