<template>
    <div>
        <NavBar class="NavBar">
            <template v-slot:left>
               <span @click="goBack()">&lt;</span> 
            </template>
            <template v-slot:center>
                <div class="title">
                    <div v-for="(title,index) in titles" :key="title" 
                    @click="itemClick(index)">
                        <a :href="'#'+index" :class="{active:index==currentIndex}">{{title}}</a>
                    </div>
                </div>
            </template>
        </NavBar>
        <GoodCon 
        :goodColumns="goodColumns" :instructions="instructions" 
        :goodParam="goodParam" :itemParamSet="itemParamSet"
        :itemParamsRule="itemParamsRule" :shopInfo="shopInfo"
        :skuInfo="skuInfo" :promotions="promotions" :commentsUser="commentsUser"
        ></GoodCon>

    </div>    
</template>

<script>
import NavBar from '../../components/common/navBar/NavBar'
import {getDetailMessage} from '../../network/detail'
import GoodCon from './childComs/GoodCon'

export default {
    name:"Detail",
    components:{
        NavBar,
        GoodCon
    },
    data(){
        return{
            titles:['商品','参数','详情','评价'],
            anchors:['#goodContent','#goodParams','#GoodDetail','#comments'],
            iid:null,
            goodColumns:[],
            currentIndex:0,
            otherMes:[],
            instructions:[],
            itemParamSet:[],
            goodParam:[],
            itemParamsRule:[],
            shopInfo:[],
            skuInfo:[],
            promotions:[],
            commentsUser:[]
        }
    },
    created(){
        this.iid=this.$route.params.iid
        this.getDetailMessage(this.iid)
        this.tabBarIsChange()
    },
    methods:{
        goBack(){
            this.$router.push('/home')
        },
        getDetailMessage(iid){
            getDetailMessage(iid).then(res=>{
                this.goodColumns=res.result.columns
                this.instructions=res.result.shopInfo.services
                this.goodParam=res.result.itemInfo
                this.itemParamsRule=res.result.itemParams.rule.tables
                this.itemParamSet=res.result.itemParams.info.set
                this.shopInfo=res.result.shopInfo
                this.skuInfo=res.result.skuInfo
                this.promotions=res.result.promotions
                this.commentsUser=res.result.rate.list
            })
        },
        itemClick(index){
            this.currentIndex=index
        },
        tabBarIsChange(){
            this.$store.commit('tabBarIsChange',false)
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
    }
    .title div{
        flex: 1;
    }
    .NavBar{
        background: #fff;
    }
    .active{
        color: var(--color-tint);
    }
</style>