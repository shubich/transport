<template>
  <div>Sign Out</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapActions,
} = createNamespacedHelpers('auth');

export default {
  name: 'Logout',
  methods: {
    ...mapActions([
      'signout',
    ]),
  },
  beforeMount() {
    this.signout();
    this.$router.push('/');
  },
};
</script>
