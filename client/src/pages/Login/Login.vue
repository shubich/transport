<template>
  <Page center>
    <div class="container">
      <form
        @submit.prevent="onSubmit"
        class="form"
      >
        <label class="form-group">
          <div class="control-label">Логин</div>
          <Input class="form-control" type='text' v-model="loginName" />
        </label>
        <label class="form-group">
          <div class="control-label">Пароль</div>
          <Input class="form-control" type='password' v-model="password" />
        </label>
        <div class="form-group summary">
          <router-link to="reg">Регистрация</router-link>
          <Button text='Войти' type='primary' />
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
  name: 'Login',
  components: {
    Page,
    Input,
    Button,
  },
  data() {
    return {
      loginName: '',
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
      const { loginName, password } = this;
      this.signin({ loginName, password });
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

  .form-group.summary {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .control-label {
    color: $gray;
    opacity: .5;
    margin-bottom: 5px;
  }
</style>
