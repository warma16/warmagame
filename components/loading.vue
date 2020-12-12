<template>
    <div></div>
</template>
<script>
export default {
    data(){
        return {
            fullscreenLoading:null,
            l:{}
        }
    },
    methods:{
        openFullScreen1() {
            if(this.$route.query.redirect_query!=undefined){
                this.l=this.$route.query.redirect_query
            }
            this.$router.push({path:this.$route.query.redirect_url,
                query:this.l
            })
        },
        open(){
            this.fullscreenLoading = this.$loading();
            var __this=this
            setTimeout(() => {
                __this.fullscreenLoading.close();
                __this.openFullScreen1()
            }, 2000);
        }
    },
    mounted(){
        if(this.$route.query.show=="true"){
            this.open()
        }
        else{
            this.openFullScreen1()
        }
    }
}
</script>