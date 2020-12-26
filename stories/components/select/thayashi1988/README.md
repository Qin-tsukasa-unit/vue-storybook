# ダイアログコンポーネント
ダイアログ（Dialog.Vue）を表示させるコンポーネントです。

# ダイアログコンポーネント記述方法
親コンポーネントにDialog.Vueをimportして使用してください。  
以下は使用例になります。  
## template
```
<template>
  <div :class="containerClassName">
    <Dialog
      @closeModal="closeModal"
      :layer-background-color="layerBgColorStyle"
      :layer-open="isShow">
    >
      <template #modalContent>
        <p>ここにダイアログ内コンテンツを入れる</p>
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
```
## script
```
import './dialog.css';
import Btn from '../../button/thayashi1988/Btn.vue';
import Card from '../../card/wi-tech/Card.vue';
export default {
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
```
# ダイアログコンポーネント解説
1. ```@closeModal```  
レイヤーをクリックすると発火するイベントです。
値には任意のイベント名と、後述する```:layer-open```の値をfalseにするイベントを設定してください。

1. ```:layer-background-color```  
ダイアログのレイヤーの背景色を変更できるbindです。
親コンポーネントへ以下のようにrgba形式で設定するとレイヤーの背景色、透明度を変更できます。
```layerBackgroundColor="rgba(161,151,212,.2)"```

1. ```:layer-open```  
ダイアログを表示させるためのbindです。値には任意の値を入れてください。
typeはBooleanで、デフォルトはfalseになっています。
こちらにある値をtrue、falseと切り替えることにより、ダイアログ表示制御が可能です。

1. ```<template #modalContent>```  
ダイアログ内のコンテンツエリアになります。
デフォルトでCardコンポーネントが入っていますが、任意のコンポーネントを入れることも可能です。

1. ```<template #modalCloseBtn>```  
ダイアログ内のダイアログを閉じるボタンになります。
デフォルトでBtnコンポーネントが入っていますが、任意のコンポーネントを入れることも可能です。

# ダイアログコンポーネント注意点
初期ではダイアログは非表示（false）になっていますので、何かしらクリックイベントを行える要素を入れるようにしてください。
※上記のソースでは、Btnコンポーネントを呼んでそこにダイアログ表示のイベントを設定しています。