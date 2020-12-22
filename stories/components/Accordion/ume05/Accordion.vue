<template>
  <div class="accordion">
    <button class="button" @click="isOpenFn" :style="buttonBgColorStyle">
      <span class="title" :style="buttonTextColorStyle">{{title}}</span>
      <span class="arrow" :class="{active: isOpen}" :style="buttonArrowColorStyle"></span>
    </button>
    <div class="innr" :class="{open: isOpen}" :style="innerBgColorStyle">
      <p class="text" :style="innerTextColorStyle">{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-accordion',
  props: {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    buttonBgColor: {
      type: String
    },
    buttonTextColor: {
      type: String
    },
    buttonArrowColor: {
      type: String
    },
    innerBgColor: {
      type: String
    },
    innerTextColor: {
      type: String
    },
  },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    buttonBgColorStyle() {
      return {
        backgroundColor: this.buttonBgColor
      }
    },
    buttonTextColorStyle() {
      return {
        color: this.buttonTextColor
      }
    },
    buttonArrowColorStyle() {
      return {
        borderColor: this.buttonArrowColor
      }
    },
    innerBgColorStyle() {
      return {
        backgroundColor: this.innerBgColor
      }
    },
    innerTextColorStyle() {
      return {
        color: this.innerTextColor
      }
    }
  },
  methods: {
    isOpenFn(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style scoped>
.accordion {
  width: 800px;
  max-width: 100%;
}

.button {
  border: none;
  cursor: pointer;
  outline: none;
  width: 100%;
  padding: 1rem 1.5rem;
  appearance: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.title {
  display: inline-block;
  flex: 1;
  font-size: 1rem;
  margin-right: 1rem;
}

.arrow {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-left-style: solid;
  border-bottom-style: solid;
  border-width: 2px;
  transform:translateY(-3px) rotate(-45deg);
  transition: transform .3s;
}

.arrow.active {
  transform: translateY(3px) rotate(135deg);
}

.innr {
  visibility: hidden;
  transform: scaleY(0);
  transform-origin: top;
  padding: 0 1.5rem;
  transition: all .3s;
}
.innr.open {
  visibility: visible;
  transform: scaleY(1);
  padding: 1rem 1.5rem;
}
.text {
  margin: 0;
}
</style>