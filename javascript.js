var audio=document.getElementById('myAudio');
var audioButton=document.getElementById('audio_button');

window.onload=function(){
	audio.addEventListener('ended',
		function(){
			audioButton.src="play.svg";
			return;
		},false);
	audio.addEventListener('pause',
		function(){
			audioButton.src="play.svg";
			return;
		},false);
	audio.addEventListener('play',
		function(){
			audioButton.src="pause.svg";
			return;
		},false);
}

function playOrPaused(){
	if(audio.paused){
		audio.play();
		audioButton.src="pause.svg";
		return;
	}
	else{
		audio.pause();
		audioButton.src="play.svg";
		return;
	}
}
var inpSub=document.getElementById('inp_sub');
var inpTxt=document.getElementById('inp_txt');
var txtArea=document.getElementById('txtarea');

function sentSecond(){
		var t=new Date();
			if(parseInt(t.getSeconds())<10){
				return('0'+t.getSeconds());   //实现秒种的显示
			}else{
				return(t.getSeconds());
			}
		}

function sentTime(){
	var t=new Date();
	return t.getHours()+":"+t.getMinutes()+":"   //实现小时和分钟的显示
		}

inpSub.onclick=function(){
		if(inpTxt.value!=''){
			txtArea.value=txtArea.value+'\r\n'+sentTime()+sentSecond()+'\r\n'+inpTxt.value;
         	txtArea.scrollTop= txtArea.scrollHeight; //scrollTop返回元素上边缘与视图之间的距离。
         	//scrollHeight返回元素整个高度
			inpTxt.value=null;//实现输出到textarea后清除输入框里的文本
		}else{alert('值不能为空')}
}

document.onkeydown = function(e){
	//var e=event||window.event;
    if((e||event).keyCode==13&&document.activeElement==inpTxt)//判断按键和焦点
        {inpSub.click();}
}; //为inpSub定义回车快捷键 