<template>
  <div class="wrapper">
    <div class="control margin-bottom">
      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <span>Название</span>
        <Input class="input grow-1" type="text" v-model.trim="newStopName"/>
        <span>Долгота</span>
        <Input class="input" type="text" v-model.trim="newLongitude"/>
        <span>Широта</span>
        <Input class="input" type="text" v-model.trim="newLatitude"/>
        <Button
          type="primary"
          text="Добавить"
        />
      </form>
    </div>
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Долгота</th>
          <th>Широта</th>
          <th colspan="2">Управление</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in stops"
          :class="{active: isActive(index)}"
          :key="item.name"
        >
          <td>
            <Input
              v-if="isActive(index)"
              class="editor"
              type="text"
              v-model="updStopName"
            />
            <span v-else>{{item.name}}</span>
          </td>
          <td>
            <Input
              v-if="isActive(index)"
              class="editor"
              type="text"
              v-model="updLongitude"
            />
            <span v-else>{{item.longitude}}</span>
          </td>
          <td>
            <Input
              v-if="isActive(index)"
              class="editor"
              type="text"
              v-model="updLatitude"
            />
            <span v-else>{{item.latitude}}</span>
          </td>
          <td>
            <label v-if="isActive(index)" @click="updateStop(item)">
              <awesome-icon name="save" class="icon save"/>
            </label>
            <label v-else @click="setActive(index)">
              <awesome-icon name="edit" class="icon edit"/>
            </label>
          </td>
          <td>
            <label @click="removeStop(item.name)">
              <awesome-icon name="times" class="icon delete"/>
            </label>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import 'vue-awesome/icons/edit';
import 'vue-awesome/icons/save';
import 'vue-awesome/icons/times';
import AwesomeIcon from 'vue-awesome/components/Icon';
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
    AwesomeIcon,
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
      newLongitude: '',
      newLatitude: '',
      updStopName: '',
      updLongitude: '',
      updLatitude: '',
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
      this.addStop({
        name: this.newStopName,
        longitude: this.newLongitude,
        latitude: this.newLatitude,
      });
      this.newStopName = '';
      this.newLongitude = '';
      this.newLatitude = '';
    },
    updateStop(item) {
      this.editStop({
        ...item,
        name: this.updStopName,
        longitude: this.updLongitude,
        latitude: this.updLatitude,
      });
      this.editIndex = null;
    },
    removeStop(name) {
      this.deleteStop(name);
      this.editIndex = null;
    },
    setActive(index) {
      this.editIndex = index;
      this.updStopName = this.stops[index].name;
      this.updLongitude = this.stops[index].longitude;
      this.updLatitude = this.stops[index].latitude;
    },
    isActive(index) {
      return this.editIndex === index;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .margin-bottom {
    margin-bottom: 15px;
  }

  .form {
    display: flex;
    align-items: center;

    .input {
      margin: 0 5px;
    }
  }

  .editor {
    width: 99%;
  }

  .grow-1 { flex-grow: 1 }

  .icon {
    cursor: pointer;
    width: 14px;
    height: 14px;

    &.edit {
      color: $warning;
    }

    &.save {
      color: $primary;
    }

    &.delete {
      color: $danger;
    }
  }

</style>
