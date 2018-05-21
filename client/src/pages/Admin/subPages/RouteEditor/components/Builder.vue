<template>
  <div class="builder">

    <div class="row">

      <div class="column">
        <span class="title">Остановки - {{title}}</span>
        <Autocomplete
          class="margin-left margin-bottom stretch"
          resultsValue="_id"
          resultsDisplay="name"
          :source="stops"
          @select="onStopSelect"
        />
        <div class="selected-stops">
          <div
            class="row"
            v-for="(item, index) in selectedStops"
            :key="item._id"
          >
            <div class="label">
              {{item.name}}
            </div>
            <div class="manage">
              <div @click="stopToUp(index)">
                <awesome-icon name="arrow-up" class="icon up"/>
              </div>
              <div @click="stopToDown(index)">
                <awesome-icon name="arrow-down" class="icon down"/>
              </div>
              <div @click="removeStop(index)">
                <awesome-icon name="times" class="icon remove"/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import 'vue-awesome/icons/times';
import 'vue-awesome/icons/arrow-up';
import 'vue-awesome/icons/arrow-down';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Autocomplete from '@/components/Form/Autocomplete';

export default {
  name: 'RouteEditor',
  components: {
    AwesomeIcon,
    Autocomplete,
  },
  props: {
    title: String,
    stops: Array,
    selectedStops: Array,
  },
  computed: {

  },
  data() {
    return {

    };
  },
  methods: {
    /* eslint-disable no-underscore-dangle */
    onStopSelect(stop) {
      this.selectedStops.push(stop);
    },
    stopToUp(index) {
      if (index === 0) return;
      const movingItem = this.selectedStops[index];
      this.selectedStops.splice(index, 1);
      this.selectedStops.splice(index - 1, 0, movingItem);
    },
    stopToDown(index) {
      if (index === (this.selectedStops.length - 1)) return;
      const movingItem = this.selectedStops[index];
      this.selectedStops.splice(index, 1);
      this.selectedStops.splice(index + 1, 0, movingItem);
    },
    removeStop(index) {
      this.selectedStops.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../../assets/styles/palette';
  @import '../../../../../assets/styles/mixins';

  .margin-left {
    margin-left: 5px;
  }

  .margin-bottom {
    margin-bottom: 15px;
  }

  .title {
    padding: 5px;
  }

  .builder {
    flex: 3;
    margin-left: 15px;
  }

  .selected-stops .row {
    display: flex;
    justify-content: space-between;
    padding: 6px 12px;
    border: 1px solid $default;
    &:not(:last-child) {
      border-bottom: none;
    }

    &:hover {
      background: $default;
    }

    .label {
      flex: 6;
    }

    .manage {
      flex: 1;
      display: flex;
      justify-content: space-between;
    }

    .icon {
      opacity: 0;
      color: $gray;
      &.remove:hover { color: $red; }
      &.up:hover, &.down:hover { color: $blue; }
    }

    &:hover {
      .icon {
        opacity: 1;
      }
    }
  }
</style>
