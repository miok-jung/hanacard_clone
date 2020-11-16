/* autoBanner.js */
var myAuto_b = null;

function imgCenter(){
	
   var imgCenter = document.getElementById("imgCenterT");
   var member_event = document.getElementById("member_event"); //dl
   var eventDT = member_event.getElementsByTagName("dt"); //dl dt 4개
   var eventDD = member_event.getElementsByTagName("dd"); //dl dd 4개
   var play = document.getElementById("playbtn");
   
	
   //자동배너 함수호출
   myAuto_b = setInterval(function(){ autoBanner(); }, 1500);
	  
   //play
   var playing =1;
   
   
	play.childNodes[0].onclick = function(e){
		e.stopPropagation();
		e.preventDefault();
		
        if(playing){
            clearInterval(myAuto_b);            
            this.children[0].src = this.children[0].src.replace("_stop.png", "_play.png");
            playing = 0;
        }else{
            myAuto_b = setInterval(function(){ autoBanner(); }, 1500);
            this.children[0].src = this.children[0].src.replace("_play.png", "_stop.png");
            playing = 1;
        }
	}
	
	
	
}

//자동배너
var addNum = 0;
function autoBanner(){
	
   var member_event = document.getElementById("member_event"); //dl
   var eventDT = member_event.getElementsByTagName("dt"); //dl dt 4개	
   var eventDD = member_event.getElementsByTagName("dd"); //dl dd 4개
	
   addNum++;
   if(addNum >= eventDT.length){
	   addNum = 0;
   }
  
   autoMouseover("auto"); 
  
}



//마우스 오버
function autoMouseover(type){
   
   var imgCenter = document.getElementById("imgCenterT");
   var member_event = document.getElementById("member_event"); //dl
   var eventDT = member_event.getElementsByTagName("dt"); //dl dt 4개
   var eventDD = member_event.getElementsByTagName("dd"); //dl dd 4개

   //마우스오버   
   for(var i=0;i<eventDT.length;i++){
	   eventDT[i].onfocus = eventDT[i].onmouseover = function(){
		  
		   //모든dd안보이게
		   for(var k=0; k<eventDD.length; k++){
			   eventDD[k].style.display = "none";
		   }
		   
		   var theNext = this.nextSibling;
		   if(theNext.nodeType == 3){
			   theNext = theNext.nextSibling;
		   }
		   theNext.style.display = "block";
		   
		   for(var k=0; k < eventDT.length; k++){
			   var myImg = eventDT[k].children[0].children[0];
			   myImg.src = myImg.src.replace("_on.gif", "_off.gif");
		   }
		   this.children[0].children[0].src = this.children[0].children[0].src.replace("_off.gif", "_on.gif");
		   clearInterval(myAuto_b);
          
           addNum = this.children[0].children[0].alt.charAt(0)-1;
	   }//dt클릭 function

       eventDT[i].onblur = eventDT[i].onmouseout = function(){
		   myAuto_b = setInterval(function(){ autoBanner(); }, 1500);
       }
       
   }//for
   
   
    //마우스오버   
   for(var i=0;i<eventDD.length;i++){
	   eventDD[i].onfocus = eventDD[i].onmouseover = function(){
		  
		  clearInterval(myAuto_b);
	   }//dt클릭 function

       eventDD[i].onblur = eventDD[i].onmouseout = function(){
		  console.log("setInterval");
		  myAuto_b = setInterval(function(){ autoBanner(); }, 1500);
       }
       
   }//for
   
   
   if( type == "auto"){
	  eventDT[addNum].onmouseover();
	  eventDT[addNum].onmouseout();
   }
}

if(window.addEventListener){
	window.addEventListener("load", imgCenter, false);
}else if(window.attachEvent){
	window.attachEvent("onload", imgCenter);
}