<template>
    <div id="main">
    <div id="bg">
        <el-image fit="fill" :src="bg" :z-index="-20000" :lazy="true" style="opacity:0.5;"></el-image>
    </div>
    <div id="avatar">
        <el-image fit="fill" :z-index="1" :lazy="true" :src="peopleimage"  ></el-image>
    </div>
    <div id="textbar">
        <el-col>
            <el-tag effect="dark" type="info" id="spritename">{{name}}</el-tag>
            <el-card id="textrender">
                
                <vue-typer :text="say" :repeat='0' :type-delay='100'></vue-typer>
                <buttonchoice :item="buttondata"></buttonchoice>
                <div id="next">
                    <el-button type="primary" icon="el-icon-arrow-down" circle s v-if="nextbutton" @click="go()"></el-button>
                </div>
            </el-card>
        </el-col>
    </div>
    </div>
</template>
<style>
#textbar{
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    border-radius: 30px;
    position: absolute;
    left:0%;
    bottom: 1%;
    width:100%;
    height: 32.5%;
}
#main {
    position: absolute;
    left:0px;
    top:0px;
    height:100%;
    width:100%
}
#bg {
    position: absolute;
    left:0px;
    top:0px;
    height:100%;
    width:100%
}
#avatar{
    position: absolute;
    top:5%;
    left:40%;
    width:20%;
    height:60%;
}
.el-image{
     position: absolute;
     left:0px;
     top:0px;
     height:100%;
     width:100%;
         

 }

#spritename{
     position: absolute;
     left:0px;
     top:0px;
     height:20%;
     width:259px;
     text-align: center;
     font-size: 32px;
     line-height: 1.1;

 }
 #textrender{
     position: absolute;
     left:0px;
     top:20%;
     height:80%;
     width:99%;
     
     font-size: 25px;
     line-height: 1;
     background-color: #909399;;

 }
 #next{
     position: absolute;
     right:5px;
     bottom:5px;
 }
#sbgerr{
     position: absolute;
     left:0px;
     top:0px;
     height:100%;
     width:100%;
     background-color:#909399;

 }

</style>
<script>
import buttonchoice from "./chose_h.vue"
export default {
    data(){
        return {
            
                say:"你好我是Crazy Bucket，很高兴遇见你",
                
                nextbutton:true,
                session:null,
                buttondata:null,
                link:null,
                bg:require('../assets/bg.jpg'),
                name:"Crazy Bucket",
                peopleimage:require("../assets/cb.png")
            
        }
    },
    methods:{
        bind(){
            var session=this.$route.query.session
            var config=config
            this.session=Number(session)+1


        },
        go(){
            if(this.session==null){
                if(this.link!=null){
                    var __this=this
                    this.$router.push({
                        path: __this.link
                    })
                }
            }
            else{

                    var __this=this
                    this.$router.push({
                        path:"/detail/"+__this.session+'',
                        
                    })
                
            }
        }
    },
    components:{
        buttonchoice
    },
    mounted(){
        this.bind()
    }

}
</script>