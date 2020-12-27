<template>
  <div>
    <h2>進数変換(10進)</h2>
    <dl>
      <dt>10進数</dt>
      <dd><input type="number" v-model="numDec"></dd>
      <dt>2進数</dt>
      <dd><dec2bin :num-dec="numDec" hidden="true"></dec2bin></dd>
      <dt>16進数</dt>
      <dd><dec2hex :num-dec="numDec" hidden="true"></dec2hex></dd>
    </dl>
  </div>
</template>

<script>
import dec2hex from './dec2hex';
import dec2bin from './dec2bin';

export default {
  name: 'dec2conv',

  props:{
    numDec: { type: Number, default: 0 },
  },
  components: {
    dec2hex,
    dec2bin,
  }
};
</script>

<style scoped>
  dl,input{
    font-size:18px;
  }
</style>