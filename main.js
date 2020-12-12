import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//import "./assets/theme/black.css"
import VueRouter from 'vue-router'
import routerconfig from "./urldict.js"
//import routeritem from "./urldictitem.js";
import App from "./App.vue"; 
import VueTyper from "vue-typer"
import axios from 'axios'
import VueAxios from 'vue-axios';

var errorring="./audio/error.wav"
Vue.use(VueAxios, axios)
Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(VueTyper);


window.messagebox=new Vue()
// 方法1：注册播放音频事件到Vue实例上

/*Vue.config.errorHandler = function(err, vm, info) {
  if(process.env.NODE_ENV=="production"){
    var data="warmagame \nmsg:"+err+"\ninfo:"+info
    var t=Vue
    t.axios.get('http://hb9.api.yesapi.cn/?s=App.Logger.Record',{
      params:{
        app_key:"34E95D6F64DEF48A911C7E7DECE32047",
        type:"ERROR",
        message:data,
        
      }
    }).then(()=>{
      t.prototype.playAudio()
      setTimeout(()=>{
        alert('游戏出现了错误，我们已经将错误日志上传到后台服务器。请稍后再试')
      },500)
      
    })
  }
  else{
    console.error(err,info)
  }
};*/

/*Vue.config.warnHandler = function(msg, vm, trace) {
  if(process.env.NODE_ENV=="production"){
    var trace=trace
    
    var data="warmagame \nmsg:"+msg+"\ntrace:"+trace
    var t=Vue
    t.axios.get('http://hb9.api.yesapi.cn/?s=App.Logger.Record',{
      params:{
        app_key:"34E95D6F64DEF48A911C7E7DECE32047",
        type:"ERROR",
        message:data,
        
      }
    }).then(()=>{
      t.prototype.playAudio()
      setTimeout(()=>{
        alert('游戏出现了错误，我们已经将错误日志上传到后台服务器。请稍后再试')
      },500)
    })
  }
  else{
    console.error(msg,trace)
  }
  
};*/

const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const router = new VueRouter(
  routerconfig // (缩写) 相当于 routes: routes
)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data(){
    return {
      blackmode:false
    }
  }
});