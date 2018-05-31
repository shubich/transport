<template>
  <div class="wrapper">
    <table>
      <thead>
        <tr>
          <th>Номер карты</th>
          <th>Имя пользователя</th>
          <th>Роль</th>
          <th>Статус</th>
          <th>Счёт</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in users"
          :key="item._id"
        >
          <td>{{item.cardNumber}}</td>
          <td>{{item.loginName}}</td>
          <td>{{item.role}}</td>
          <td>{{item.active ? "Active" : "Blocked"}}</td>
          <td>{{item.bill}} BYN</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const {
  mapState,
  mapActions,
} = createNamespacedHelpers('users');

export default {
  name: 'Users',
  components: {
  },
  computed: {
    ...mapState([
      'users',
    ]),
  },
  data() {
    return {
    };
  },
  mounted() {
    this.getUsers();
  },
  methods: {
    ...mapActions([
      'getUsers',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  @import '../../../../assets/styles/palette';
</style>
