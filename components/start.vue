<template>
    <div id="welcome">
        <div id="sbg">
            <el-image  fit="fill" :src="bg" :z-index="-20000" :lazy="true" style="opacity:0.5;">
                <div slot="error" class="image-slot" id="sbgerr">
                
                </div>
            </el-image>
        </div>
        <div id="title" style="border:none">
            <el-image  fit="fill" src="" :z-index="0" :lazy="true">
                <div slot="placeholder">
                    <h1>测试</h1>
                </div>
                <div slot="error" class="image-slot" id="sbgerr">
                        
                </div>
            </el-image>
        </div>
        <div id="buttons">
            <el-col>
                
                    <el-button type="primary"  round icon="el-icon-video-play" @click="goloading('detail')">开始游戏</el-button>
                    <div>  </div>
                    <el-divider id="dibutton"></el-divider>
                    <el-button type="primary"  round icon="el-icon-notebook-2" @click="clickLoad()">读取档案</el-button>
                
            </el-col>
        </div>
        <input type="file" id="files" ref="refFile" style="display: none" v-on:change="fileLoad" />
        <div id="setting">
            <el-button type="primary" circle id="settingbutton" v-bind:style="settingstyle" @click="settingc">
                <i class="iconfont icon-settings" id='settingicon'></i>
            </el-button>
        </div>
        <el-drawer direction="rtl" :visible.sync="drawer" id="drawer" :modal-append-to-body="false" :before-close="handclose">
            <el-card >
                 <div slot="header" class="clearfix">
                    <span>设置</span>
                 </div>
                <el-form>
                    <el-form-item label="存档文件名">
                        <el-input v-model="downloadchache"></el-input>
                    </el-form-item>
                    <el-form-item label="上传错误报告">
                        <el-switch v-model="uploaderr"  ></el-switch>
                    </el-form-item>
                    <el-form-item label="深色模式">
                        <el-switch v-model="blackmodet"  v-on:change="blackmodey"></el-switch>
                    </el-form-item>
                    
                </el-form>
            </el-card>
        </el-drawer>
    </div>
</template>
<style>
#drawer{
    opacity: 1;
}
 #sbg{
     position: fixed;
     left:0px;
     top:0px;
     height:100%;
     width:100%;
     background-color:#909399;

 }
 .el-image{
     position: absolute;
     left:0px;
     top:0px;
     height:100%;
     width:100%;
     background-color:#909399;
     

 }
 
#sbgerr{
     position: absolute;
     left:0px;
     top:0px;
     height:100%;
     width:100%;
     background-color:#909399;

 }
#title {
    position: absolute;
    left:25%;
    top:10%;

    width:50%;
    height: 20%;
}
#buttons {
    position: absolute;
    bottom: 72.2px;
    left:40%;
    width:0%;
    height:20%;
    
}

#dibutton{
    opacity: 0%;
    height: 5%;
}


#setting{
    position: fixed;
    right:0px;
    bottom: 5px;
    width: 64.75px;
    height: 57.76px;

}


@keyframes turn{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
    }
@keyframes turnback{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(-90deg);}
      50%{-webkit-transform:rotate(-180deg);}
      75%{-webkit-transform:rotate(-270deg);}
      100%{-webkit-transform:rotate(-360deg);}
    }
</style>

<script>
var bg=require('../assets/bg.jpg')
export default {
    data(){
        return {
            bg:bg,
            gotosession:null,
            plusapi:window.plus,
            plus:null,
            settingstyle:{
                animation:""
            },
            settingclick:false,
            drawer:false,
            downloadchache:"warma_cache.json",
            uploaderr:true,
            blackmodet:this.$root.blackmode
        }
    },
    methods:{
        goloading(i,params=null){
            this.$router.push({
                path:"/startloading",
                query:{
                    redirect_url:i,
                    redirect_query:params
                }
            })
        },
        clickLoad() {
      // 下面三种方法实现效果一样
      //方法一: 原生html
      // document.getElementById('files').click();
      // 方法二: jquery实现
      // $("#files").click();
      //方法三:Vue实现
      this.$refs.refFile.dispatchEvent(new MouseEvent("click"));
    },
    fileLoad() {
      //获取读取的文件File对象 下面两种方法实现效果一样
      //方法一:原生html获取
      // const selectedFile = document.getElementById('files').files[0];
      //方法二:Vue实现
      var __this=this
      const selectedFile = this.$refs.refFile.files[0];

      var reader = new FileReader();
      reader.readAsText(selectedFile);

      reader.onload = function(e) {
        var result=this.result;
        
        
        try{
            result=JSON.parse(result)
            var tmp=result['key']
            console.log(tmp)
            if(tmp!="warmagame"){
                throw "not invaild key"
            }
            __this.show('success','导入存档文件成功')
            __this.goloading(result['path'],result['args'])
            
            /*args: {loaded: true, session: "000"}
key: "warmagame"
path: "/game"*/ 
        }catch(e){
            __this.show('error','导入存档文件失败')
        }
        console.log(result)
        
      };
      
    },
    show(type,text){
      this.$message({
            type: type,
            message: text
          });
        return ;
    },
    settingc(){
            this.settingstyle.animation="turn 1s linear"
            this.drawer=true
        
    },
    onSubmit(){
        var timeout=200
        
        this.onclose()
        
        setTimeout(() => {
            this.$message({
          message: '保存成功',
          type: 'success'
        })
        }, timeout);
         
    },
    onclose(){
        this.settingstyle.animation="turnback 1s linear"
            this.drawer=false
    },
    handclose(done){
        this.onclose();
        done();
    },
    
    blackmodey(){
        this.$root.blackmode=this.blackmodet
        console.log('bm: '+this.$root.blackmode)
        
    }},
    
}
</script>