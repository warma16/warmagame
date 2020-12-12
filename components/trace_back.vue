<template>
    <el-card>
        <div slot="header" class="clearfix">
            <el-row>
                <el-tag type="danger">
                错误
                </el-tag>
                <h1>{{title}}</h1>
            </el-row>
        </div>
        <div>
            发生的元素
            <el-card>
                {{vm}}
            </el-card>
        </div>
        <div>
            详细的报错信息
            <el-card>
                {{errio}}
            </el-card>
        </div>
    </el-card>
</template>
<script>
export default {
    data(){
        return {
            title:"",
            vm:"",
            err:""        
        }
    },
    methods:{
        c(){
            this.title=this.$route.query.err;
            this.err=this.$route.query.info;
            this.vm=this.$route.query.vm

        }
    },
    mounted(){
        this.c()
    }
}
</script>