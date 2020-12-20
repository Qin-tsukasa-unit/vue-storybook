<template>
  <section class="card" :style="cardStyles">
    <div class="card-content">
      <h1 class="card-title" :style="fontStyles">{{ title }}</h1>
      <hr />
      <p class="card-text" :style="fontStyles">{{ text }}</p>
    </div>
  </section>
</template>

<script>
import './card.css';

export default {
  name: 'Card',

  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: false,
    },
    color: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    fontStyles() {
      return {
        color: this.color
      }
    },
    cardStyles() {
      return {
        backgroundColor: this.backgroundColor
      }
    }
  },
};
</script>
