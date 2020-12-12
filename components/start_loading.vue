<template>
    <!--h1>
    《健康游戏忠告》
        抵制不良游戏，拒绝盗版游戏。 注意自我保护，谨防受骗上当。 适度游戏益脑，沉迷游戏伤身。 合理安排时间，享受健康生活。
    </h1-->
    <div id="main">
        <div id="bg">
            <el-image fit="fill" :src="bg" :z-index="-20000" :lazy="true" style="opacity:0.4;"></el-image>
        </div>
        <el-card id="gamehealthtextboard" style="opacity:1;z-index:20000">
            <div slot="header" class="clearfix" id="gamehealthtextboardtitle">
                <h1>健康游戏忠告</h1>
            </div>
            <div class="text item" id="gamehealthtextboardcontent">
                <h1>抵制不良游戏，拒绝盗版游戏。</h1>
                <h1>注意自我保护，谨防受骗上当。</h1>
                <h1>适度游戏益脑，沉迷游戏伤身。</h1>
                <h1>合理安排时间，享受健康生活。</h1>
            </div>
        </el-card>
    </div>
</template>
<style>
    #gamehealthtextboardtitle{
        text-align: center;
        color: #409EFF;
    }
    #gamehealthtextboardcontent{
        text-align: center;
        color: #409EFF;

    }
    #gamehealthtextboard{
        color: #000000;
        position: absolute;
        left: 10%;
        top:10%;
        width:80%;
        height:80%;
    }
</style>
<script>
var bg=require("../assets/bg.jpg")
export default {
    data(){
        return {
            bg:bg,
            l:{}
        }
    },
    methods:{
        load(){
            var __this=this
            setTimeout(() => {
              __this.redirect()  
            }, 1000);
        },
        redirect(){
            if(this.$route.query.redirect_query!=null){
                this.l=this.$route.query.redirect_query
            }
            this.$router.push({path:"/loading",query:{
                show:"true",
                redirect_url:this.$route.query.redirect_url,
                redirect_query:this.l
            }})
        }
    },
    mounted(){
        this.load()
    }
}
</script>