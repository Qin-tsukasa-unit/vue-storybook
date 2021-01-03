<template>
  <div class="counter">
    <a
      href="#"
      class="btn-sticky btn"
      @click.prevent="addCounter"
      style="font-size: 20px;"
      ><b class="l"> {{ this.title }} </b><b class="r">{{ this.count }}</b></a
    >
  </div>
</template>

<script>
export default {
  name: "counter",

  props: {
    title: { type: String, default: "counter" },
    step: { type: Number, default: 1 },
    defCount: { type: Number, default: 0 },
  },
  data: function () {
    return {
      count: this.defCount,
    };
  },
  methods: {
    addCounter() {
      this.count += this.step;
      this.$emit("add", this.count);
    },
  },
};
</script>

<style scoped>
.btn-sticky {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #f7f7f7;
  border-left: solid 6px #ff7c5c; /*左線*/
  color: #ff7c5c; /*文字色*/
  font-weight: bold;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.29);
}
.btn-sticky:active {
  box-shadow: inset 0 0 2px rgba(128, 128, 128, 0.1);
  transform: translateY(2px);
}
.btn {
  height: 50px;
  width: 100%;
  max-width: 300px;
  position: relative;
}
div.counters {
  width: 100%;
  max-width: 300px;
}
* {
  touch-action: manipulation;
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
  -ms-user-select: none; /* IE10かららしい */
}
.btn b.l {
  position: absolute;
  left: 15px;
}
.btn b.r {
  position: absolute;
  right: 15px;
  font-size: 30px;
}
</style>
