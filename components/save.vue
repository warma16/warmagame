<template>
    <div id="save">
        <el-button icon="el-icon-document" :loading="loading" @click="click()" type="primary" size="small" id="savebutton" style="opacity: 100">{{text}}</el-button>
    </div>
</template>
<script>

export default {
    props:['title','content'],
    data(){
        return {
            text:"存档",
            loading:false,
            plusapi:window.plus,
            plus:null
        }
    },
    methods:{
        downloadp() {
      //const element = document.createElement('a')
      //element.setAttribute('href', 'data:text/html;charset=utf-8,' + //encodeURIComponent(this.render_msg_p))
      //element.setAttribute('download', 'index.html')
      //element.style.display = 'none'
      //element.click()
      //writehtml(this.render_msg)
      var io=this.content;
      var fi=this.title;
      const blob = new Blob([io
      
      
      ], {
        type: "text/plain;charset=utf-8"
      });
      // console.log(blob)

      let fileName = fi;

      if (window.navigator.msSaveOrOpenBlob) {
        try{
          navigator.msSaveBlob(blob, fileName);
          this.$message({
            type: 'success',
            message: '保存成功'
          });
          return ;
          }
        catch(e){
          this.$message({
            type: 'warning',
            message: '保存失败'
          });
          return ;
        }
        
        
      } else {
        try{
          var link = document.createElement("a");

          link.href = window.URL.createObjectURL(blob);

          link.download = fileName;

          link.click();

          //释放内存

          window.URL.revokeObjectURL(link.href);
          this.$message({
            type: 'success',
            message: '保存成功'
          });
          return ;
        }catch(e){
          console.log(e);
          this.$message({
            type: 'warning',
            message: '保存失败'
          });
          return ;
        }
        
      }
    },
    click(){
        this.text="存档中"
        this.loading=true
        this.downloadp();
        this.text="存档"
        this.loading=false
    },
    checkplus(){
        this.plusapi=true
        this.plus=plus
    },
    
    
    },
    
}
</script>
<style>
#savebutton{
    z-index: 10000;
    position: fixed;
    right:5px;
    top: 5px;
}
#save{
    position: fixed;
    background-color: #909399;
    left:0px;
    top:0px;
    width:100%;
    
}
</style>