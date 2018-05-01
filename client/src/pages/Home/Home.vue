<template>
  <MainPage class="home-page">
    <div class="container">
      <pre>{{user}}</pre>
    </div>
  </MainPage>
</template>

<script>
import axios from 'axios';
import MainPage from '@/components/Page/MainPage';

export default {
  name: 'Home',
  components: {
    MainPage,
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
