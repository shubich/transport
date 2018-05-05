<template>
  <Page desktop>
    <div class="container">
      <Nav/>
      <div class="content">
        <router-view></router-view>
      </div>
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
  .content {
    padding: 15px;
  }
</style>
