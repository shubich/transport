<template>
  <div class="card">
    <div class="column">
      <awesome-icon
        name="credit-card"
        class="icon"
      />
    </div>
    <div class="column">
      <div class="number">{{cardNumber}} ({{loginName}})</div>
      <div class="bill">{{bill}} BYN</div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/credit-card';
import AwesomeIcon from 'vue-awesome/components/Icon';

export default {
  name: 'Card',
  props: {
    cardNumber: String,
    loginName: String,
    bill: Number,
  },
  components: {
    AwesomeIcon,
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../assets/styles/palette';

  .card {
    background: $gray;
    color: $white;
    padding: 10px 15px;
    display: flex;
    align-items: center;
  }

  .column {
    &:not(:last-child) {
      margin-right: 15px;
    }
  }

  .icon {
    width: 45px;
    height: 45px;
  }

  .number {
    margin-bottom: 10px;
  }
</style>
