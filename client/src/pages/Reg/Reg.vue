<template>
  <Page class="reg-page">
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
          <div>Город</div>
          <Input type='text' v-model="location" />
        </label>
        <label>
          <div>Номер карты</div>
          <Input type='text' v-model="cardNumber" />
        </label>
        <label>
          <div>Пароль</div>
          <Input type='password' v-model="password" />
        </label>
        <div>
          <Button text='Зарегистрироваться' />
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
  name: 'Reg',
  components: {
    Page,
    Input,
    Button,
  },
  data() {
    return {
      location: '',
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
      'signup',
    ]),
    onSubmit() {
      const { location, cardNumber, password } = this;
      if (cardNumber && password) {
        this.signup({ location, cardNumber, password });
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
  .reg-page {
    display: flex;
    justify-content: center;
    align-items: center;
  }

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
