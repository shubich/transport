<template>
  <nav
    class="nav"
  >
    <router-link
      v-for="item in ROUTES"
      :key="item.url"
      :to="BASE_URL+item.url"
      exact
      class="block"
      active-class="active"
    >
      {{item.label}}
    </router-link>
    <router-link
      to="/logout"
      class="block"
    >
      <awesome-icon
        name="sign-out-alt"
        class="icon"
      />
    </router-link>
  </nav>
</template>

<script>
import 'vue-awesome/icons/sign-out-alt';
import AwesomeIcon from 'vue-awesome/components/Icon';
import { BASE_URL, ROUTES } from './constants';

export default {
  name: 'Nav',
  components: {
    AwesomeIcon,
  },
  data() {
    return {
      BASE_URL,
      ROUTES,
    };
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';

  .nav {
    display: flex;
    border-bottom: 1px solid $default-border;
  }

  .block{
    padding: 15px 0;
    flex: 1 1 100%;
    text-align: center;
    background: $primary-light;
    color: $white;

    &:hover, &:focus, &.active {
      background: $primary;
    }

    &:active {
      background: $primary-dark;
    }
  }


</style>
