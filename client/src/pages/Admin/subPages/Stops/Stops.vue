<template>
  <div class="wrapper">
    <div class="control">
      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <span>Название</span>
        <Input
          class="input"
          type="text"
          v-model.trim="newStopName"/>
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
import { createNamespacedHelpers } from 'vuex';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';

const {
  mapState,
  mapActions,
} = createNamespacedHelpers('stops');

export default {
  name: 'Stops',
  components: {
    Input,
    Button,
  },
  computed: {
    ...mapState([
      'stops',
    ]),
  },
  data() {
    return {
      newStopName: '',
      updStopName: '',
      editIndex: null,
    };
  },
  mounted() {
    this.getStops();
  },
  methods: {
    ...mapActions([
      'getStops',
      'addStop',
      'editStop',
      'deleteStop',
    ]),
    onSubmit() {
      this.addStop({ name: this.newStopName });
      this.newStopName = '';
    },
    updateStop(item) {
      this.editStop({ ...item, name: this.updStopName });
      this.editIndex = null;
    },
    removeStop(name) {
      this.deleteStop(name);
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

  .form {
    display: flex;
    align-items: center;

    .input {
      flex: 1;
      margin: 0 5px;
    }
  }

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
