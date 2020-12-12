<template>
  <div id="main">
    
    <div id="bg">
      <el-image
        fit="fill"
        :src="bg"
        :z-index="-20000"
        :lazy="true"
        style="opacity: 0.5"
      ></el-image>
    </div>
    <div id="avatar">
      <el-image
        fit="fill"
        :z-index="1"
        :lazy="true"
        :src="peopleimage"
      ></el-image>
    </div>
    <save :title="downloadtitle" :content="downloaddata"></save>
    <div id="textbar">
      <el-col>
        <el-tag effect="dark" type="info" id="spritename">{{ name }}</el-tag>
        <el-card id="textrender">
          <vue-typer :text="say" :repeat="0" :type-delay="100"></vue-typer>
          <buttonchoice :item="buttondata"></buttonchoice>
          <div id="next">
            <el-button
              type="primary"
              icon="el-icon-arrow-down"
              circle
              s
              v-if="nextbutton"
              @click="go()"
            ></el-button>
          </div>
        </el-card>
      </el-col>
    </div>
    <history v-if="backshow"></history>
  </div>
</template>
<style>
#textbar {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
  position: absolute;
  left: 0%;
  bottom: 1%;
  width: 100%;
  height: 32.5%;
}
#main {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
}
#bg {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
}
#avatar {
  position: absolute;
  top: 5%;
  left: 40%;
  width: 20%;
  height: 60%;
  background-color: transparent;
}
.el-image {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: transparent;
}

#spritename {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 20%;
  width: 259px;
  text-align: center;
  font-size: 32px;
  line-height: 1.1;
}
#textrender {
  position: absolute;
  left: 0px;
  top: 20%;
  height: 80%;
  width: 99%;

  font-size: 25px;
  line-height: 1;
  background-color: #909399;
}
#next {
  position: absolute;
  right: 5px;
  bottom: 5px;
}
#sbgerr {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  background-color: #909399;
}
@font-face {font-family: "iconfont";
  src: url('//at.alicdn.com/t/font_2219101_5zydbchkyv8.eot?t=1605968835027'); /* IE9 */
  src: url('//at.alicdn.com/t/font_2219101_5zydbchkyv8.eot?t=1605968835027#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAN8AAsAAAAAB2QAAAMuAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqCSII0ATYCJAMMCwgABCAFhG0HOxt/BsgusG3Ykw2GuFkUkJSYuYMHOYoH/vfD3Sf/TaVtyT3N+5Ik0SRAJpLw0ymJRCQkoknzEv68dvWZlyNa5e5agslsdp3JQajhFuSHK/cqut8FN1zK1t1Pl4ud5D+11pbUMo05iludrASWbj84lvpZgHlA71hdWviAzw/0QJG5DWTAG8gEfcPYlRexn4Bmg1wJu/GpucBIZgwLCDdUrAJGKb1cUxo0CkrJ3Pw6TEJjfBxf8NL//fDfQjAiqhJj7P51XC2I/AW/umBn3SkXQTCeFWwRCVOATDgutR+BYXwK1KzI9epziyyIY4X+1/h8VVrMf3hEgVAYxa1gDCUiv9j8WNEFhWddnECBBReA5wxKrw/JYh/q5XVuMRMusWD+/n3ex5trAlo+fiz4HPncFDQfwu/5cP464LPvfH7/2fF1nnkZfu3wscx+fPvR/6LtXnZe+H6y/U/vPtm96vNvRl7Zf6lzXz588bsee1eVd+G8/CXh9jktfIzKftz7krVks/+QJhAiOIxUQtqV7JdMw1fv4FSapm2moYuU7pfu7b3Bb2RXp+HKdGekoXsyHWxJ/DX/debTirTq/GWaOJho6k5W6raSueLqqYyqrZFWVxRx8No25rqiy/aMi4PQVnr6nUElgPqqJ3UCjWQqI3/J33j14JhWWIb+xpYMvv6MvUKGWvsCjSJM8APKig0AqkdcZMRSRo0ytw1I9hIjRTRrRg3d3b71V/apxQSN+mKIGgxA0mgImbFTUGmxBEWjDWg2KWFxix4MFHITJvQBCDqtQ9TuLSSdXiEz9itU+v2GojNAaHYQbNdsMRKoSQzDVRzXouomRGs0amKZuElQmo3FOmUVS4p8Zj5mEg0hL3fPbCoBqzEbY4JUL3pzThBhGhWKB4dhpVKDtEwjxzXcXca5NtjDg5R9kXuNRgVM7GCwKhxWC6nWBKFqaKgRtzFnkvv5bJiojlIVVlNT4c2HMRLaOuLFnWcLZIJc3armWh6R1BN54zgCIRgNFSQeWDGlGddAtOW95LAanDtZj6hWMA9Uj7SVu8+vVD3fJmhmXJFCDClk5bpKLaujRhLmnKpFCQAAAA==') format('woff2'),
  url('//at.alicdn.com/t/font_2219101_5zydbchkyv8.woff?t=1605968835027') format('woff'),
  url('//at.alicdn.com/t/font_2219101_5zydbchkyv8.ttf?t=1605968835027') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('//at.alicdn.com/t/font_2219101_5zydbchkyv8.svg?t=1605968835027#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-fanhui:before {
  content: "\e611";
}

.icon-settings:before {
  content: "\e600";
}

</style>
<script>
import buttonchoice from "./chose_h.vue";
import config from "../index.config";
import save from "../components/save";
import history from "../components/chat_histtory"
export default {
  data() {
    return {
      say: " ",

      nextbutton: true,
      session: null,
      buttondata: null,
      link: null,
      bg: null,
      name: null,
      peopleimage: null,
      downloaddata:null,
      downloadtitle:"warmagame_cache.json",
      backshow:null
    };
  },
  methods: {
    bind() {
      var session = this.$route.query.session;
      var conf = config["content"][session];
      this.session = conf.session;
      this.say = conf.say;
      this.nextbutton = conf.nextbutton;
      this.buttondata = conf.buttondata;
      this.link = conf.link;
      this.bg = require("../assets/" + conf.bg);
      this.name = conf.name;
      console.log(("../assets/" + conf.peopleimage))
      this.peopleimage = require("../assets/" + conf.peopleimage+'.png');

    },
    go() {
      if (this.session == null) {
        if (this.link != null) {
          var __this = this;
          this.$router.push({
            path: __this.link,
          });
        }
      } else {
        var __this = this;
        this.$router.push({
          path: "/loading/",
          query:{
                show:"tr",
                redirect_query:{
                    session:__this.session,
                    back:__this.backshow
                },
                redirect_url:"/game"
            }
        });
      }
    },
    save(){
      var arg={loaded:true,session:this.$route.query.session};
      console.log(arg)
      
      console.log(arg)
      var data={"path":this.$route.path,"args":arg,"key":"warmagame"}
      this.downloaddata=JSON.stringify(data)
    },
    checkloaded(){
      if(this.$route.query.loaded==true || this.$route.query.loaded=="true"){
         this.$message({
            type: 'success',
            message: '已恢复到存档的进度'
          });
      }
    },
    checkback(){
      if(this.$route.query.back==true || this.$route.query.back=="true"){
        
        this.backshow=true
      }
    },
    setcachelastest(){
      localStorage.warmagame_latest_session_version=this.$route.query.session
    }
    
  },
  components: {
    buttonchoice,
    save,
    history
  },
  mounted() {
    this.checkloaded();
    this.checkback()
    this.bind();
    this.save();
    this.setcachelastest()
  },
};
</script>