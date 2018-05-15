<template>
  <div class="wrapper">
    <pre>{{users}}</pre>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapState,
  mapActions,
} = createNamespacedHelpers('users');

export default {
  name: 'Users',
  components: {
  },
  computed: {
    ...mapState([
      'users',
    ]),
  },
  data() {
    return {
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapActions([
      'getUsers',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';
</style>
