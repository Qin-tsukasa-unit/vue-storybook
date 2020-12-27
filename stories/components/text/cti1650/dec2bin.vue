<template>
    <div>
        <input v-if="!hidden" type="number" v-model="numDec"> <b>{{ toBin }}</b>
    </div>
</template>

<script>
export default {
    name: 'dec2bin',

    props:{
        numDec: { type: Number, default: 0 },
        hidden: { type: Boolean, default: false },
    },
    computed: {
        toBin: function(){
            return parseInt(parseInt(this.numDec).toString(2));
        },
    },
};
</script>

<style scoped>
  div,input{
    font-size:18px;
  }
</style>