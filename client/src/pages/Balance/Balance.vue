<template>
  <MainPage center>
    <div class="container">
      <div class="row margin-bottom">
        <h1>Пополнение баланса</h1>
      </div>
      <div class="row margin-bottom">
        <label>
          <input type="radio" checked>
          <span>Кредитная карта</span>
        </label>
        <label class="margin-left">
          <input type="radio" disabled>
          <span>PayPal</span>
        </label>
      </div>
      <div class="row margin-bottom">
        <span class="label">Номер карты</span>
        <Input type="text" class="margin-left input"/>
      </div>
      <div class="row margin-bottom space-between">
        <span class="label">Срок годности</span>
        <div class="expiration">
          <select class="margin-left">
            <option v-for="item in months" :key="item" value="item">{{item}}</option>
          </select>
          <span class="margin-left">/</span>
          <select class="margin-left">
            <option v-for="item in years" :key="item" value="item">{{item}}</option>
          </select>
        </div>
      </div>
      <div class="row margin-bottom">
        <span class="label">CVV</span>
        <Input type="text" class="margin-left input"/>
      </div>
      <div class="row margin-bottom space-between">
        <div>
          <span class="label">Сумма</span>
          <Button class="btn" type="danger" text="-" @click="sumDec"/>
          <Button class="btn" type="success" text="+" @click="sumInc"/>
        </div>
        <span class="margin-left">{{sum}} BYN</span>
      </div>
      <div class="row margin-bottom space-between">
        <router-link to="." class="cancel">Отмена</router-link>
        <Button type="primary" text="Подтвердить"/>
      </div>
    </div>
  </MainPage>
</template>

<script>
import MainPage from '@/components/Page/MainPage';
import Button from '@/components/Form/Button';
import Input from '@/components/Form/Input';

export default {
  name: 'Balance',
  components: {
    MainPage,
    Button,
    Input,
  },
  data() {
    return {
      months: ['', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years: ['', 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028],
      sum: 5,
    };
  },
  methods: {
    sumInc() {
      this.sum += 1;
    },
    sumDec() {
      this.sum -= this.sum > 0 ? 1 : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
  @import '../../assets/styles/palette';

  $margin-size: 15px;

  .margin-bottom {
    margin-bottom: $margin-size;
  }

  .margin-left {
    margin-left: 15px;
  }

  .stretch {
    width: 100%;
  }

  .container {
    padding: 15px;
  }

  .row {
    display: flex;
    align-items: center;
  }

  .space-between {
    justify-content: space-between;
  }

  .column {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    margin: 0;
  }

  .btn {
    min-width: 34px;
  }

  .input[type="text"] {
    flex: 1;
  }

  .cancel {
    color: $gray;
  }
</style>
