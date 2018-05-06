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
        @submit.prevent="addStop"
        class="form"
      >
        <span>Название</span>
        <Input type="text" v-model.trim="newStopName"/>
        <Button
          type="primary"
          text="Добавить"
        />
      </form>
    </div>
    <div class="table">
      <div
        v-for="(item, index) in stops"
        class="row"
        :class="{active: isActive(index)}"
        :key="item.name"
      >
        <div class="column content">
          <Input
            v-if="isActive(index)"
            class="editor"
            type="text"
            v-model="updStopName"
            @keydown.enter="updateStop(item)"
          />
          <div
            v-else
            class="data"
          >
            {{item.name}}
          </div>
        </div>
        <div v-if="isActive(index)" class="column manage">
          <Button class="save" type="success" text="Сохранить" @click="updateStop(item)"/>
        </div>
        <div v-else class="column manage">
          <Button class="edit" type="warning" text="Изменить" @click="setActive(index)"/>
          <Button class="delete" type="danger" text="Удалить" @click="removeStop(item.name)"/>
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
      newStopName: '',
      updStopName: '',
      stops: null,
      addStopResponse: null,
      editIndex: null,
    };
  },
  mounted() {
    this.getStops();
  },
  methods: {
    getStops() {
      axios.get('http://localhost:2000/stop/all')
        .then((response) => { this.stops = response.data; });
    },
    addStop() {
      axios.post('http://localhost:2000/stop/', { name: this.newStopName })
        .then(() => {
          this.getStops();
          this.newStopName = '';
        });
    },
    updateStop(item) {
      this.editIndex = null;
      axios.put('http://localhost:2000/stop/', { ...item, name: this.updStopName })
        .then(() => { this.getStops(); });
    },
    removeStop(name) {
      axios.delete('http://localhost:2000/stop/', { data: { name } })
        .then(() => { this.getStops(); });
    },
    setActive(index) {
      this.editIndex = index;
      this.updStopName = this.stops[index].name;
    },
    isActive(index) {
      return this.editIndex === index;
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

      &.active {
        background: $default-dark;
      }

      &:not(:last-child) {
        border-bottom: none;
      }

      &:hover {
        background: $default;
        .edit, .delete {
          opacity: 1;
        }
      }
    }

    .column {
      flex: 1;
      padding: 5px 0 5px 5px;

      &:last-child {
        padding-right: 5px;
      }
    }

    .content {
      display: flex;

      .editor {
        flex: 1;
        padding: 8px;
      }
    }

    .manage {
      flex: 0;
      display: flex;

      .edit, .delete {
        opacity: 0;
      }

      .edit {
        margin-right: 5px;
      }
    }
  }

</style>
