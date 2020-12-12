<template>
    <div>
        <div id="handleopendrawer" @click="draw">
        <i class="el-icon-caret-right" id="opendrawericon"></i>
        </div>
        <el-drawer :visible.sync="drawer" direction="rtl" :modal-append-to-body="false" title="沃信" :before-close="beforeclose">
            
              <div id="ctb">
                <el-scrollbar style="height:100%" :wrap-class="wrapClass" :wrap-style="wrapStyle" :view-class="viewClass" :view-style="viewStyle" :native="native" :tag="tag" :noresize="noresize">
                  <el-card>
                    <div slot="header" class="clearfix">
                        {{user}}
                    </div>
                    <chatbox></chatbox>
                    <!--div v-for="(index) in 100" :key="index">
                      <p>{{index}}</p>
                    </div-->
                  </el-card>
                  
                </el-scrollbar>
              </div>
              <div id="ctbchose">
                
                <el-card >
                  <el-form :inline="true" :model="senddata" class="demo-form-inline">
                    <el-form-item label="">
                      <el-input v-model="senddata.word" placeholder="快来说一说心里话吧"></el-input>
                    </el-form-item>
                    <el-form-item>
                      <el-button type="primary" @click="onSubmit" icon="iconfont icon-fasong" circle></el-button>
                    </el-form-item>
                  </el-form>
                </el-card>
              </div>
            
            
        
        </el-drawer>

  </div>
</template>
<script>
import chatbox from "../components/chat_box"
export default {
    data() {
    return {
      title: "ok.txt",
      content:"ok",
      token:"loading...",
      drawer:false,
      query:null,
      
        //滚动区域层class
        wrapClass:{
          wrapClass:true
        },
        wrapStyle:{
          fontWeight:800
        },

        //滚动整体区域的class
        viewClass:{
          viewClass:true
        },
        viewStyle:{
          border:'1px solid #000000',
          boxSizing:'border-box'
        },
        // native属性：如果为true就不显示el的bar，也就是el模拟出来的滚动条，如果为false就显示模拟的滚动条
        native:false,
        // tag 渲染出来的标签
        tag:'section',
        // noresize 是否刷新滚动条大小
        noresize:true,
        senddata:{word:""},
        user:"测试",
        timer:false
    };
  },
  components:{
    chatbox,
  },
  methods:{
    draw(){
      var c=document.getElementById('opendrawericon')
      
        c.className="el-icon-caret-left"
        this.drawer=true
      
    },
    beforeclose(done){
      done();
      var c=document.getElementById('opendrawericon')
      
        c.className="el-icon-caret-right"
    },
    onSubmit(){
      if(this.senddata.word==""&this.timer==false){
        return ;
      }
      console.log('sendit');
      var a=this.user
      this.user="对方正在输入中···";
      this.senddata.word=""
      var __this=this
      
      this.timer=setTimeout(() => {
        __this.user=a
        __this.timer=false
      }, 3000);
      
    }
  },
  props:['queryio']
 
};
</script>
<style>
#handleopendrawer{
  position: fixed;

  right: 0px;
  top:40%;
  width:2.5%;
  height: 20%;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
}
#opendrawericon{
  position: absolute;
  top:45%;
  right:28.09;
}
#ctb{
  
  position: absolute;
  left:0%;
  top:10%;
  width:100%;
  height: 50%;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
#ctbchose{
  position: absolute;
  left:5px;
  top:62%;
  width: 100%;
  height: 100%;
}

</style>

