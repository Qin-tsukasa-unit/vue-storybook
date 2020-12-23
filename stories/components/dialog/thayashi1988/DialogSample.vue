<template>
  <div :class="containerClassName">
      <Dialog
        @closeModal="closeModal"
        :layer-background-color="layerBgColorStyle"
        :layer-open="isShow">
        <template #modalContent>
          <p>あああああああああああああああああああ</p>
        </template>
        <template #modalCloseBtn>
          <Btn
            anchor-txt=""
            btn-txt="閉じる"
            :primary=false
            size="full"
            @onClick="closeModal"
          ></Btn>
        </template>
      </Dialog>
      <Btn
        anchor-txt=""
        btn-txt="開く"
        primary
        size="middle"
        @onClick="openModal"
      ></Btn>
  </div>
</template>

<script>
import './dialog.css';
import Btn from '../../button/thayashi1988/Btn.vue';
import Dialog from './Dialog.vue';

export default {
  name: 'DialogSample',
  data() {
      return {
        isShow: false,
      }
  },
  props: {
    layerBackgroundColor: String,
    layerOpen: {
      type: Boolean,
      default: false
    },
    containerClassName: String
  },
  computed: {
    layerBgColorStyle() {
    return {
        backgroundColor: this.layerBackgroundColor,
      };
    },
  },
  methods: {
    openModal() {
      this.isShow = !this.isShow
    },
    closeModal() {
      this.isShow = false
    }
  },
  components: {
    Btn,
    Dialog,
  }
};

</script>
