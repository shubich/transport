<template>
  <Page>
    <div class="container">
      <form @submit.prevent="onSubmit">
        <label>
          <div>Номер карты</div>
          <Input type='text' v-model="cardNumber" />
        </label>
        <label>
          <div>Пароль</div>
          <Input type='password' v-model="password" />
        </label>
        <div>
          <router-link to="reg">Зарегистрироваться</router-link>
          <Button text='Войти' />
        </div>
      </form>
    </div>
  </Page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
import Page from '@/components/Page';
import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';

const {
  mapActions,
  // mapGetters,
  // mapState,
} = createNamespacedHelpers('auth');

export default {
  name: 'Login',
  components: {
    Page,
    Input,
    Button,
  },
  data() {
    return {
      cardNumber: '',
      password: '',
    };
  },
  methods: {
    ...mapActions([
      'signin',
    ]),
    onSubmit() {
      const { cardNumber, password } = this;
      if (cardNumber && password) {
        this.signin({ cardNumber, password });
      }
    },
  },
};
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
