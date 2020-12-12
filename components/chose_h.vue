<template>
    <div id="seit" >
        <el-container direction="horizontal" class="content">
            <div v-for="data in item" :key="data">
                <el-button round @click="click(data.link)" type="primary">
                    {{data.text}}
                    <!--el-link :href="data.link">{{data.text}}</el-link-->
                </el-button>
            </div>
        </el-container>
    </div>
</template>
<style>
    #seit{
        border-radius: 30px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        
        height: fit-content;
        width:fit-content
    }
</style>
<script>
export default {
    props:["item"],
    methods:{
        click(link){
            console.log('1+: '+this.$route.query.back)
            this.$router.push({
                        path:"/loading",
                        query:{
                            show:"tr",
                            redirect_query:{
                                session:link,
                                back:this.$route.query.back
                            },
                            redirect_url:"/game"
                        }
                    })
        }
    }
}
</script>