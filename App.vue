<template>
  <div id="app">
    
    <router-view></router-view>
  </div>
</template>

<script>
//import test from "../src/components/say"
import {
    enable as enableDarkMode,
    disable as disableDarkMode,
    auto as followSystemColorScheme,
    exportGeneratedCSS as collectCSS,
} from 'darkreader';
export default {
  name: "App",
  
  data(){
    return {
      darkt:null
    }
  },
  methods:{
    dark(){
      enableDarkMode({
          brightness: 100,
          contrast: 90,
          sepia: 10
      });
    },
    closedark(){
      disableDarkMode();
    }
  },
  computed:{
    black(){
      return this.$root.blackmode
    }
  },
  watch:{
    black(val){
      console.log('watch blackmode : '+val)
      if(val){
        this.dark()
      }else{
        this.closedark()
      }
      localStorage.warmagame_black=val
    }
  },
  beforeCreate(){
    this.$root.blackmode=eval(localStorage.warmagame_black)
    console.log(this.$root.blackmode)
  },
  mounted(){
    if(this.$root.blackmode){
       this.dark()
    }else{
      this.closedark()
    }
  }
  
};
</script>

<style>
  #app {
          position:fixed;
          left: 0px;
          top:0px;
          height: 100%;
          width: 100%;
          font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
            "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: #2c3e50;
          overflow: auto;
  }
</style>
