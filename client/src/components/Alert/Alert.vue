<template>
  <div
    class="alert"
    :class="[alert.type, {hidden: hidden}]"
  >
    <span class="message">
      {{alert.message}}
    </span>
    <div class="close" @click="close">
      <awesome-icon
        name="times"
        class="icon"
      />
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/times';
import AwesomeIcon from 'vue-awesome/components/Icon';
import { createNamespacedHelpers } from 'vuex';

const {
  mapState,
} = createNamespacedHelpers('alerts');

export default {
  name: 'Alert',
  components: {
    AwesomeIcon,
  },
  computed: {
    ...mapState(['alert']),
  },
  data() {
    return {
      hidden: true,
      timerId: null,
    };
  },
  methods: {
    close() {
      clearTimeout(this.timerId);
      this.hidden = true;
    },
  },
  watch: {
    alert(newAlert) {
      if (!newAlert.message) {
        return;
      }
      this.hidden = false;

      clearTimeout(this.timerId);

      this.timerId = setTimeout(() => {
        this.hidden = true;
      }, 5000);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  @mixin bs($color) {
    background: $color;
    transition-duration: 1s;
  }

  .alert {
    position: fixed;
    bottom: 10px;
    right: 10px;
    width: 300px;
    height: 100px;
    background: $black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
  }

  .hidden {
    opacity: 0;
    z-index: -1;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 15px;
  }

  .primary { @include bs($blue) }
  .success { @include bs($green) }
  .danger { @include bs($red) }
</style>
