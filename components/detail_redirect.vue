<template>
    <div></div>
</template>
<script>
export default {
    mounted(){
        this.$router.push({
                        path:"/game",
                        query:{
                            session:"000"
                        }
                        
                    })
    }
}
</script>