<template>
  <Page center>
    <div class="container">
      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <label class="form-group">
          <div class="control-label">Номер карты</div>
          <Input class="form-control" type='text' v-model="cardNumber" />
        </label>
        <label class="form-group">
          <div class="control-label">Логин</div>
          <Input class="form-control" type='text' v-model="loginName" />
        </label>
        <label class="form-group">
          <div class="control-label">Пароль</div>
          <Input class="form-control" type='password' v-model="password" />
        </label>
        <label class="form-group">
          <div class="control-label">Подтвердите пароль</div>
          <Input class="form-control" type='password' v-model="confirmPassword" />
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
      loginName: '',
      password: '',
      confirmPassword: '',
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
      const { cardNumber, loginName, password, confirmPassword } = this;
      this.signup({ cardNumber, loginName, password, confirmPassword });
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
</style>
