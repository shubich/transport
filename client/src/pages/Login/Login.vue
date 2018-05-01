<template>
  <Page center>
    <div class="container">
      <div
        v-if="authStatus"
        class="status"
        :class="authStatus"
      >
        Status: {{authStatus}}
      </div>
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
          <router-link to="reg">Регистрация</router-link>
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
  mapGetters,
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
  computed: {
    ...mapGetters([
      'isAuthenticated',
      'authStatus',
    ]),
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
  watch: {
    isAuthenticated() {
      if (this.isAuthenticated) {
        this.$router.push('/');
      }
    },
  },
};
</script>

<style scoped>
  .status {
    margin-bottom: 10px;
  }

  .status.error {
    color: red;
  }

  .status.loading {
    color: blue;
  }
</style>
