<template>
  <div
    class="alert"
    :class="alert.type"
  >
    {{alert.message || "Route already exist"}}
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapState,
} = createNamespacedHelpers('alerts');

export default {
  name: 'Alert',
  computed: {
    ...mapState(['alert']),
  },
  data() {
    return {
      displayedAlert: null,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  .alert {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 300px;
    height: 100px;
    background: green;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $white;
  }

  .primary {
    background: $blue;
  }

  .success {
    background: $green;
  }

  .danger {
    background: $red;
  }
</style>
