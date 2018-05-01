<template>
  <nav
    class="nav"
  >
    <router-link to="/" exact class="block" active-class="active">
      Карта
    </router-link>
    <div class="block">
      Маршруты
    </div>
    <div class="block">
      Профиль
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  props: {
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  .nav {
    width: 100%;
    display: flex;
    border-top: 1px solid $default-border;
  }

  .block {
    padding: 15px 0;
    flex: 1 1 100%;
    text-align: center;

    &:hover, &:focus {
      background: $primary;
      color: $white;
    }

    &:active {
      background: $primary-dark;
      color: $white;
    }
  }

  .active {
    background: $primary-light;
    color: $white;
  }

</style>
