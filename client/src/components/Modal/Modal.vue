<template>
  <div class="modal">
    <div class="body">
      <div class="content">
        <slot></slot>
      </div>
      <div class="close" @click="$emit('close')">
        <awesome-icon
          name="times"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/times';
import AwesomeIcon from 'vue-awesome/components/Icon';

export default {
  name: 'Modal',
  components: {
    AwesomeIcon,
  },
  computed: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  watch: {
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  .modal {
    display: flex;
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(108, 113, 119); /* Fallback color */
    background-color: rgba(108, 113, 119, 0.5); /* Black w/ opacity */
  }

  .body {
    background-color: $white;
    margin: auto;
    padding: 25px;
    border: 4px solid $primary;
    width: 640px;
    position: relative;
  }

  .content {
    display: flex;
    justify-content: space-around;
  }

  .close {
    position: absolute;
    color: $blue;
    top: 15px;
    right: 15px;
  }
</style>
