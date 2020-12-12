<template>
    <div>
        <el-avatar :src="srci"></el-avatar>
        <el-tag>{{text}}</el-tag>
    </div>
</template>
<script>
export default {
    props:['text',"avatarurl"],
    methods:{
        avatar(){
            var tmp=this.avatarurl
            tmp=tmp.split('.')
            tmp=tmp[0]+"avatar.png"
            this.srci=require("../assets/" + tmp)
        }
    },
    data(){
        return {
            srci:null
        }
    },
    created(){
        this.avatar()
    }
}
</script>