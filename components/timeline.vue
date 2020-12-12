<template>
    <div id="timelineshow">
        <el-timeline :reverse="true">
            <el-timeline-item
            v-for="(activity, index) in data"
            :key="index"
            :timestamp="index">
            <el-button type="primary" round @click="goto(index)">跳转此情节</el-button>
            </el-timeline-item>
        </el-timeline>
    </div>
</template>
<style>
#timelineshow{
    position:absolute;
    left:0px;
    top:0px;
    width:100%;
    height: 100%;
}
</style>
<script>
import config from "../index.config";
export default {
    data(){
        return {
            data:config["content"]
        }
    },
    methods:{
        goto(fw){
            this.$router.push({
                path:"/game",
                query:{
                    session:fw,
                    back:true
                }
            })
        }
    }
}
</script>