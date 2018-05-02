<template>
  <Page center>
    <div class="container">
      <Alert
        v-if="authStatus"
        class="status"
        :type="ALERT_TYPES[authStatus]"
        :text="authStatus"
      />
      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <label class="form-group">
          <div class="control-label">Номер карты</div>
          <Input class="form-control" type='text' v-model="cardNumber" />
        </label>
        <label class="form-group">
          <div class="control-label">Пароль</div>
          <Input class="form-control" type='password' v-model="password" />
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
import Page from '@/components/Page/Page';
import Alert from '@/components/Alert';
import Input from '@/components/Form/Input';
import Button from '@/components/Form/Button';
import { ALERT_TYPES } from './config';

const {
  mapActions,
  mapGetters,
} = createNamespacedHelpers('auth');

export default {
  name: 'Reg',
  components: {
    Page,
    Alert,
    Input,
    Button,
  },
  data() {
    return {
      ALERT_TYPES,
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

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  .form {
    width: 300px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    &:focus-within .control-label {
      color: $light-blue;
      opacity: 1;
    }
  }

  .control-label {
    color: $gray;
    opacity: .5;
    margin-bottom: 5px;
  }

  .status {
    margin-bottom: 10px;
  }
</style>
