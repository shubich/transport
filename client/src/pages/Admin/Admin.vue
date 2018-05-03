<template>
  <Page desktop>
    <div class="container">
      <CityRoutes />
    </div>
  </Page>
</template>

<script>
import Page from '@/components/Page/Page';
import CityRoutes from './subComponents/CityRoutes';

export default {
  name: 'Routes',
  components: {
    Page,
    CityRoutes,
  },
};
</script>

<style scoped>

</style>
