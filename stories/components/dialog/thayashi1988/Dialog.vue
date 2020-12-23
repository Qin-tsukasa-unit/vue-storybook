<template>
  <div class="l-modal-container">
    <div
      class="l-modal-layer"
      :class="{'is-open': layerOpen}"
      :style="layerBackgroundColor"
      @click.self="closeModal">
      <div class="l-modal-inner">
        <slot name="modalContent">
          <Card
          title="カードコンポーネントを"
          text="使ってみました"
          ></Card>
        </slot>
        <slot name="modalCloseBtn">
          <Btn
            anchorTxt=""
            btnTxt="閉じる"
            :primary=false
            size="middle"
            @onClick="closeModal"
          ></Btn>
        </slot>
      </div>
    </div>
  </div>

</template>

<script>
import './dialog.css';
import Btn from '../../button/thayashi1988/Btn.vue';
import Card from '../../card/wi-tech/Card.vue';

export default {
  name: 'Dialog',
  data() {
    return {
      isShow: false,
    }
  },
  props: {
    layerBackgroundColor: {
      type: Object,
    },
    layerOpen: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    layerBgColorStyle() {
    return {
        backgroundColor: this.layerBackgroundColor,
      }
    },
  },
  methods: {
    closeModal() {
      this.$emit('closeModal')
    }
  },
  components: {
    Btn,
    Card
  }
};

</script>
