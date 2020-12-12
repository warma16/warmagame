<template>
  <div id="letter">
    <div class="letterpage">
      <h2 class="lettertitle">TO:沃玛</h2>
      <div>
        <p id="lettersay">
                这五天我作为你生活在这个世界里，我发现我并不适合生活在这个世界，这个世界里有很多我不愿意接受但却不得不接受的道理，有我毫不在意的人际关系......但你不一样，我能感受出来大家对你的关爱，这一切都是你的成就。所以,在经过这五天的时间后，我决定帮助你回来。
        </p>
      </div>
      <div>
        <p id="lettersay">
          其实这一切都是我的私心，我就是你，是你不一样的人格，我觉得我比你更优秀，应该作为主人格存在，所以在你生病的时候，想占领这个身体，但是现实世界的经历告诉我，原来这一切都是安排好的。
        </p>
      </div>
      <div>
        <p id="lettersay">
          不过跟你在一起的时间，我真的很开心，也让我觉得你才是最好的沃玛，我真的很喜欢你的歌声。如果有一天我失忆了，让你在我身边高歌一曲必然是最好的方案吧。
        </p>
      </div>
      <div>
        <p id="lettersay">
          好了，我的时间不多了，你也快要出来了，我准备好了早点记得趁热吃掉。也要少熬夜了，不然又会有可能生病。谢谢你,沃玛。
        </p>
      </div>
      <div id="letterinfo">
        <div>
          <p id="lim">
            xxxx年xx月xx日
          </p>
        
        
          <p id='lim'>
            永远在你身边的
          </p>
          <p id='lim'>
            忆雨
          </p>
        </div>
      </div>
<!--p>
其实这一切都是我的私心，我就是
你，是你不一样的人格，我觉得我比你更
优秀，应该作为主人格存在，所以在你生
病的时候，想占领这个身体，但是现实世
界的经历告诉我，原来这一切都是安排好
的。
不过跟你在一起的时间，我真的很
开心，也让我觉得你才是最好的沃玛，我
真的很喜欢你的歌声。如果有一天我失忆
了，让你在我身边高歌一曲必然是最好的
方案。
好了，我的时间不多了，你也快要出
来了，我准备好了早点记得趁热吃掉。也
要少熬夜了，不然又会有可能生病。谢谢
你,沃玛。
xxxx年xx
月xx日
永远在你身边
的忆雨</p-->

    </div>
  </div>
</template>
<style>


#letter {
	padding-top: 2.5em;
	background-color: #666;
	color: #333;
	font-size: 84%;
	position:absolute;
  top:0px;
  left:0px;
  height: 100%;
  width:100%;
  font-family: Arial, Helvetica, sans-serif;
}

.lettertitle {
	margin: 15px 0;
	text-align:center;
}
.letterpage {
	width: 600px;
	line-height: 25px;
	margin: 0 auto;
	padding: 15px 0 29px;
	background-color: #f4f39e;
	
	-moz-border-radius-bottomleft: 20px 500px;
	-moz-border-radius-bottomright: 500px 30px;
	-moz-border-radius-topright: 5px 100px;	
	
	-webkit-border-bottom-left-radius: 20px 500px;
	-webkit-border-bottom-right-radius: 500px 30px;
	-webkit-border-top-right-radius: 5px 100px;
	
	border-bottom-left-radius: 20px 500px;
	border-bottom-right-radius: 500px 30px;
	border-top-right-radius: 5px 100px;
	
	background: 
		-moz-repeating-linear-gradient(
			top,
			#fcf59b,
			#fcf59b 29px,
			#81cbbc 30px
		);
	
	background: 
		-webkit-gradient(
			linear,
			left top, left bottom,
			from(#81cbbc),
			color-stop(2%, #fcf59b)
		);
		
	background: 
		repeating-linear-gradient(
			top,
			#fcf59b,
			#fcf59b 29px,
			#81cbbc 30px
		);		
		
	-webkit-background-size: 100% 30px;

	-moz-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
	-webkit-box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
	box-shadow: 0 2px 10px 1px rgba(0, 0, 0, 0.2);
	
	text-shadow: 0 1px 0 #F6EF97;
	position: relative;
}
.letterpage:after {
	width: 180px;
	height: 30px;
	content: " ";
	margin-left: -90px;
	border: 1px solid rgba(200, 200, 200, .8);
	
	background: rgba(254, 254, 254, .6);
	-moz-box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
	-webkit-box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
	box-shadow: 0px 0 3px rgba(0, 0, 0, 0.1);
	
	-moz-transform: rotate(-5deg); 
	-webkit-transform: rotate(-5deg);
	-o-transform: rotate(-5deg);
    transform: rotate(-5deg);
	
	position: absolute;
	left: 50%;
	top: -15px;
}
.letterpage #lettersay {
	margin: 30px 0;
	padding: 0 2em;
  text-indent: 2rem;
}
#letterinfo{
  position: absolute;
  width:20%;
  height:16%;

  right:10%;
  bottom: 0.01%;
  text-align:right
}
#lim{
  letter-spacing: 0px;
  margin:-2px;
}
</style>