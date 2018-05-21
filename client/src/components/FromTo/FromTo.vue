<template>
    <div class="row">
      <div class="column col-4">
        <div class="row margin-bottom">
          <awesome-icon
            name="circle"
            class="icon from"
          />
          <Autocomplete
            class="margin-left"
            placeholder="Откуда"
            :source="stops"
            resultsValue="_id"
            resultsDisplay="name"
            :clearOnSelect="false"
            @select="onStopFromSelect"
          />
        </div>
        <div class="row">
          <awesome-icon
            name="circle"
            class="icon to"
          />
          <Autocomplete
            class="margin-left"
            placeholder="Куда"
            :source="stops"
            resultsValue="_id"
            resultsDisplay="name"
            :clearOnSelect="false"
            @select="onStopToSelect"
          />
        </div>
      </div>
      <div class="column col-0 margin-left">
        <awesome-icon
          name="arrows-alt-v"
          class="icon arrows"
        />
      </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import 'vue-awesome/icons/circle';
import 'vue-awesome/icons/arrows-alt-v';
import AwesomeIcon from 'vue-awesome/components/Icon';
import Autocomplete from '@/components/Form/Autocomplete';

const { mapState, mapActions } = createNamespacedHelpers('stops');

export default {
  name: 'FromTo',
  components: {
    AwesomeIcon,
    Autocomplete,
  },
  data() {
    return {
      from: null,
      to: null,
    };
  },
  computed: {
    ...mapState(['stops']),
    stopsSelected() {
      return this.from && this.to;
    },
  },
  mounted() {
    // this.getStops();
  },
  methods: {
    ...mapActions(['getStops']),
    /* eslint-disable no-underscore-dangle */
    onStopFromSelect(stop) {
      this.from = stop._id;
      this.onSubmit();
    },
    onStopToSelect(stop) {
      this.to = stop._id;
      this.onSubmit();
    },
    onSubmit() {
      if (!this.stopsSelected) {
        return;
      }
      this.$emit('submit', {
        from: this.from,
        to: this.to,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/palette';

.margin-left {
  margin-left: 15px;
}

.margin-bottom {
  margin-bottom: 15px;
}

.space-between {
  justify-content: space-between;
}

.space-around {
  justify-content: space-around;
}

.row {
  display: flex;
  align-items: center;
}

.from { color: $red; }
.to { color: $blue; }

.arrows {
  width: 25px;
  height: 25px;
}

.col-0 { flex: 0; }
.col-1 { flex: 1; }
.col-2 { flex: 2; }
.col-3 { flex: 3; }
.col-4 { flex: 4; }

</style>
