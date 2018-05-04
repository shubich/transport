<template>
  <Page desktop>
    <div class="container">
      <Nav/>
      <router-view></router-view>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page/Page';
import Nav from './subComponents/Nav';

export default {
  name: 'Routes',
  components: {
    Page,
    Nav,
  },
};
</script>

<style scoped>

</style>
