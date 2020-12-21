<template>
  <div class="l-modal-container">
    <div
      class="l-modal-layer"
      :class="{'is-open': layerOpen}"
      :style="layerBgColorStyle"
      @click.self="closeModal">
      <div class="l-modal-inner">
        <slot name="modalContent">
          <Card
          title="カードコンポーネントを"
          text="使ってみました"
          ></Card>
        </slot>
        <Btn
          anchorTxt=""
          btnTxt="閉じる"
          :primary=false
          size="middle"
          @onClick="closeModal"
        ></Btn>
      </div>
    </div>
    <Btn
      anchorTxt=""
      btnTxt="開く"
      primary
      size="middle"
      @onClick="openModal"
    ></Btn>
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
        layerOpen: false,
        isShow: false,
      }
  },
  props: {
    layerBackgroundColor: {
      type: String,
    }
  },
  computed: {
    layerBgColorStyle() {
    return {
        backgroundColor: this.layerBackgroundColor,
      };
    }
  },
  methods: {
    openModal() {
      this.isShow = !this.isShow
      this.layerOpen = !this.layerOpen
    },
    closeModal() {
      this.isShow = false
      this.layerOpen = false
    }
  },
  components: {
    Btn,
    Card
  }
};

</script>
