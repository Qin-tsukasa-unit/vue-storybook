<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ text }}</h2>
    <button @click="changeText">changeText</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import VueCompositionApi, { defineComponent, reactive, toRefs } from '@vue/composition-api';
Vue.use(VueCompositionApi);

type Props = {
  msg: string;
};

export default defineComponent({
  props: {
    msg: {
      type: String,
      default: "default Value"
    }
  },
  setup(props: Props) {
    const state = reactive<{ text: string }>({
      text: "HelloWorld"
    });

    props.msg

    const changeText = () => {
      state.text = props.msg.toUpperCase();
    };

    return {
      ...toRefs(state),
      changeText
    }
  }
})

</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>