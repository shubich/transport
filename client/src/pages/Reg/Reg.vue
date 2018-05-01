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
      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <label class="form-group">
          <Input class="form-control" type='text' v-model="cardNumber" />
          <div class="control-label">Номер карты</div>
        </label>
        <label class="form-group">
          <Input class="form-control" type='password' v-model="password" />
          <div class="control-label">Пароль</div>
        </label>
        <div class="form-group">
          <Button text='Зарегистрироваться' type='primary' />
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
      const { cardNumber, password } = this;
      if (cardNumber && password) {
        this.signup({ cardNumber, password });
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
  .form {
    width: 300px;
  }

  .form-group {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 20px;
  }

  .control-label {
    color: #4f5256;
    opacity: .5;
  }

  .form-control:focus ~ .control-label {
    color: #448aff;
    opacity: 1;
  }

  .control-label {
    margin-bottom: 5px;
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
