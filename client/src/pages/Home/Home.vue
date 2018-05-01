<template>
  <Page class="home-page">
    <div class="container">
      <pre>{{user}}</pre>
    </div>
  </Page>
</template>

<script>
import axios from 'axios';
import Page from '@/components/Page';

export default {
  name: 'Home',
  components: {
    Page,
  },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    axios.get('http://localhost:2000/user/me')
      .then((response) => {
        this.user = response.data;
      });
  },
};
</script>

<style scoped>
  pre {
    margin: 0;
  }
</style>
