<template>
    <div class="conters">
        <counter v-for="item in items" :title="item.name" :defCount="item.value" @add="doAdd"></counter>
        <ul class="col3">
            <li><a href="#" class="countersOptionButton" @click.prevent="ClearItem">Clear</a></li>
            <li><a v-if="false" href="#" class="countersOptionButton" @click.prevent="ResetItem">Reset</a></li>
            <li><a href="#" class="countersOptionButton" @click.prevent="AddItem">Add</a></li>
        </ul>
    </div>
</template>

<script>
    import counter from './Counter';

    export default {
        name: 'counters',

        data: function(){
            return {
                items: [
                    {name:'count1',value:0},
                    {name:'count2',value:5},
                    {name:'count3',value:10},
                    {name:'count4',value:15}
                ]
            }
        } ,
        methods:{
            doAdd(data){
                
            },
            AddItem(){
                var txt = window.prompt("新しいカウンターの名称を入力してください", 'count'+(this.items.length+1));
                if(txt != false){
                    this.items.push({name:txt,value:0});
                }
            },
            ResetItem(){
                this.items.forEach(function (item, index) {
                    // カウンターを一括クリアしたいですが、うまく動作しないため検証中です。
                    item.value = 0;
                });
            },
            ClearItem(){
                this.items = [];
            }
        } ,
        components: {
            counter,
        }
    };
</script>

<style scoped>
    *{
        -webkit-appearance: none;
        -webkit-text-size-adjust: 100%;
    }
    .countersOptionButton {
        -moz-box-shadow:inset 0px 1px 0px 0px #ffffff;
        -webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;
        box-shadow:inset 0px 1px 0px 0px #ffffff;
        background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #ededed), color-stop(1, #dfdfdf) );
        background:-moz-linear-gradient( center top, #ededed 5%, #dfdfdf 100% );
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf');
        background-color:#ededed;
        -webkit-border-top-left-radius:20px;
        -moz-border-radius-topleft:20px;
        border-top-left-radius:20px;
        -webkit-border-top-right-radius:20px;
        -moz-border-radius-topright:20px;
        border-top-right-radius:20px;
        -webkit-border-bottom-right-radius:20px;
        -moz-border-radius-bottomright:20px;
        border-bottom-right-radius:20px;
        -webkit-border-bottom-left-radius:20px;
        -moz-border-radius-bottomleft:20px;
        border-bottom-left-radius:20px;
        text-indent:0;
        border:1px solid #dcdcdc;
        display:inline-block;
        color:#777777;
        font-family:ヒラギノ角ゴ ProN W3, Hiragino Kaku Gothic ProN, メイリオ, Meiryo, sans-serif;
        font-size:15px;
        font-weight:bold;
        font-style:normal;
        height:40px;
        line-height:40px;
        width:86px;
        text-decoration:none;
        text-align:center;
        text-shadow:1px 1px 0px #ffffff;
    }.countersOptionButton:hover {
        background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #dfdfdf), color-stop(1, #ededed) );
        background:-moz-linear-gradient( center top, #dfdfdf 5%, #ededed 100% );
        filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed');
        background-color:#dfdfdf;
    }.countersOptionButton:active {
        position:relative;
        top:1px;
    }
    div.counters{
        width:100%;
        max-width:300px;
    }
    .col3 {
        display: flex;
        width:100%;
        max-width:340px;
    }
    .col3 li {
        width: calc(100% / 3);
    }
    ul,
    li {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        list-style: none;
    }

    li {
        background: #fff;
        text-align: center;
        padding: 20px 0;
        border: 1px solid #fff;
    }
</style>