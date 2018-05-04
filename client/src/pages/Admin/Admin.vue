<template>
  <Page desktop>
    <div class="container">
      <router-view></router-view>
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page/Page';

export default {
  name: 'Routes',
  components: {
    Page,
  },
};
</script>

<style scoped>

</style>
