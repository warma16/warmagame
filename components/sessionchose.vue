<template>
  <div id="selectgamesessioninterface">
    <div id="buttonarea">
     <el-button type="danger" icon="el-icon-close" circle id="closebutton"></el-button>
      <el-scrollbar style="height:100%" :wrap-class="wrapClass" :wrap-style="wrapStyle" :view-class="viewClass" :view-style="viewStyle" :native="native" :tag="tag" :noresize="noresize">
        <el-card id="buttonbox" >
          <div id="butt1" class="sessionchosebutton">
            <h1>第一关</h1>
          </div>
          
          <div id="butt2" class="sessionchosebuttondisabled" style="position:absolute;top:30%;">
              <h1>第二关</h1>
          </div>
          <div id="butt3" class="sessionchosebuttondisabled" style="position:absolute;top:55%;">
              <h1>第三关</h1>
          </div>d
          <div id="butt4" class="sessionchosebuttondisabled" style="position:absolute;top:80%;">
              <h1>第四关</h1>
          </div>
          <div id="butt5" class="sessionchosebuttondisabled" style="position:absolute;top:105%;">
            <h1>第五关</h1>
          </div>
        </el-card>
      </el-scrollbar>
    </div>
    
  </div>
  
</template>
<style>
#buttonarea{
  top:20%;
  background-color: transparent;
  position:absolute;
  left:20%;
  width: 60%;
  height:60%;
}
#closebutton{
  position: absolute;
  right:1%;
  z-index: 1;
  top:5%;
   box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
}
#buttonbox{
  position: absolute;
  top:8%;
  width:90%;
  height: 90%;
  left:8%;
  overflow: auto;
 
}
.sessionchosebutton{
  position: absolute;
  background-color: #E6A23C;
  width:95%;
  height:20%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  text-align: center;
}
.sessionchosebuttondisabled{
  position: absolute;
  background-color: #909399;
  width:95%;
  height:20%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  border-radius: 4px;
  text-align: center;
}
#splitsessionchoice{
  position: absolute;
  width:100%;
  height:10%;
}
</style>

<script>
export default {
  data(){
    return {
      firsteye:false,
      secondeye:false,
      thirdeye:false,
      eye:false,
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
          //border:'1px solid #000000',
          //boxSizing:'border-box'
        },
        // native属性：如果为true就不显示el的bar，也就是el模拟出来的滚动条，如果为false就显示模拟的滚动条
        native:false,
        // tag 渲染出来的标签
        tag:'section',
        // noresize 是否刷新滚动条大小
        noresize:true
      
    }
  },
  methods:{
    show(){
      console.log(localStorage.warmagame_latest_session_version)
      if(localStorage.warmagame_latest_session_version!=undefined||localStorage.warmagame_latest_session_version!=null){
        console.log('loadsession')
        var l=localStorage.warmagame_latest_session_version
        l=l.split('00')
        var c=Number(l[1])+1
        console.log('c: '+c)
        for(var i=Number(c)+1;i<=5;i++){
          console.log('loadsessioninb')
          var cursor=document.getElementById('butt'+i)
          console.log('butt'+i)
          cursor.className="sessionchosebuttondisabled"
          cursor.disabled=true
        }
        for(var i=Number(c);i>1;i--){
          console.log('loadsessioninbc')
          var cursor=document.getElementById('butt'+i)
          console.log('butt'+i)
          cursor.className="sessionchosebutton"
          cursor.disabled=false
        }
      }
    }
  },
  mounted(){
    //this.eyeup()
    this.show()
  }
}
</script>
