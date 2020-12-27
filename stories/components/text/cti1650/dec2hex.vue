<template>
    <div>
        <input v-if="!hidden" type="number" v-model="numDec"> <b>{{ toHex }}</b>
    </div>
</template>

<script>
export default {
    name: 'dec2hex',

    props:{
        numDec: { type: Number, default: 0 },
        hidden: { type: Boolean, default: false },
    },
    computed: {
        toHex: function(){
            return parseInt(this.numDec).toString(16);
        },
    },
};
</script>

<style scoped>
  div,input{
    font-size:18px;
  }
</style>