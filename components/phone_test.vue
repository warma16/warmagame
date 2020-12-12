<template>
  <div id="phoneshow">
    <div id="phonewrapper">
      <div id="phonecontent">
        <img :src="phonebg" id="phonebg" />
        <div id="phone_status_bar_layer">
          <div id="phone_electron_bar">
            {{ ele }}
          </div>
          <div id="timebar">
            {{ time }}
          </div>
        </div>
        <div id="phoneapplayer">
          <el-button></el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#phonewrapper {
  position: absolute;
  width: 313.85px;
  height: 673px;
  background-color: rgb(50, 183, 180);
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
#phonecontent {
  position: absolute;
  left: 1%;
  top: 5%;
  width: 97%;
  height: 90%;
  background-color: #ffffff;
  z-index: 2;
}
#phonebg {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 305px;
  z-index: 1;
  height: 610px;
  opacity: 1;
}
#phone_status_bar_layer {
  z-index: 3;

  position: absolute;
  left: 0%;
  top: 0%;
  width: 305px;
  height: 200px;
}
#phone_electron_bar {
  right: 5px;
  position: absolute;
  top: 5px;
  width: 25px;
  height: 10px;
  border-radius: 30px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-color: rgb(179, 165, 223);
  border-style: solid;
  font-size: 1px;
  line-height: 10px;
  color: rgb(179, 165, 223);
  text-align: center;
}
#timebar {
  position: absolute;
  left: 0px;
  top: 35px;
  width: 100px;
  height: 100px;
  color: rgb(179, 165, 223);
  font-size: 50px;
}
#phoneapplayer {
  z-index: 4;

  position: absolute;
  left: 0%;
  top: 240px;
  width: 305px;
  height: 369px;
}
</style>
<script>
export default {
  data() {
    return {
      phonebg: require("../assets/phonebg.jpg"),
      ele: "25",
      time: "14:25",
    };
  },
};
</script>
