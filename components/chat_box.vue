<template>
    <el-container direction="vertical">
        <div v-for="(d,index) in data" :key="index" @click="goto(index)">
            <chat :text="d.say" :avatarurl="d.peopleimage" ></chat>
        </div>
    </el-container>
</template>
<script>
import chat from "../components/wechat_say_item"
import config from "../index.config"
export default {
    props:['query'],
    components:{
        chat
    },
    data(){
        return {
            data:config["content"]
        }
    },
    methods:{
        goto(fw){
            this.$router.push({
                path: "/loading/",
                query:{
                    show:"tr",
                    redirect_query:{
                        session:fw,
                        back:true
                    },
                redirect_url:"/game"
                }   
            });
        }
    }
}
</script>