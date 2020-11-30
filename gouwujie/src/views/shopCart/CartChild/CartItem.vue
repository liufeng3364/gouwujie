<template>
    <div id="CartItem">
        <div class="cartItem" v-for="(goodItem,index) in shopParamMes" :key="(goodItem,index)">
            <input type="radio">&nbsp;&nbsp;
            <img class="shopIcon" :src="goodItem.shopIcon"> 
            <span class="shopName">&nbsp;{{goodItem.shopName}} &gt;</span><br><br>
            <input type="radio">&nbsp;&nbsp;
            <img class="goodImg" :src="goodItem.goodImg" alt="">     
            <span class="Cartleft">
                <p>{{goodItem.goodTitle}}</p><br>
                <span class="goodPrice">￥{{goodItem.goodPrice*goodItem.count}}</span>
                <span class="cartLeftl">
                    <span @click="add(index)">+</span>
                    <input style="width:25px;height:20px;border:none;text-align:center"
                    type="text" :value="goodItem.count">
                    <span @click="reduce(index)">-</span>
                </span>
            </span>
        </div><br>
    </div>
</template>
<script>
import {ADD,REDUCE} from '@/store/index'
export default {
    name:'CartItem',
    data(){
        return{
            shopParamMes:this.$store.state.shopParamMes
        }
    },
    created(){
        
    },
    methods:{
        add(index){
            this.$store.commit(ADD,index)
        },
        reduce(index){
            this.$store.commit(REDUCE,index)
        }
    }
}
</script>

<style scoped>
#CartItem{
    width: 97vw;
    margin: 50px auto;
    
}
.cartItem{
    padding: 3vw;
    border:solid 3px #ddd;
}
.Cartleft{
    width: 50vw;
    float: right;
}
.shopIcon{
    width: 6vw;
    vertical-align: middle;

}
.goodImg{
    width: 30vw;
    height: 30vw;
    vertical-align: middle;

}
#CartItem .goodPrice{
    position: relative;
    bottom: 0;
}
.cartLeftl{
    float: right;
}
</style>>
