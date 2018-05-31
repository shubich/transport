<template>
  <div id="qrcode"></div>
</template>

<script>
import QRCode from '@/utils/qrcode';

export default {
  name: 'QR',
  props: {
    text: String,
  },
  data() {
    return {
      qrcode: null,
    };
  },
  methods: {
  },
  mounted() {
    this.qrcode = new QRCode('qrcode');
    this.qrcode.makeCode(this.text);
  },
  watch: {
    text(newText) {
      this.qrcode.makeCode(newText);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/palette';
</style>
