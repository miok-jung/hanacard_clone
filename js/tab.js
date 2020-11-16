/* tab.js */
function TabMenu(TabID){
	var myDL = document.getElementById(TabID);
    var myDT = myDL.getElementsByTagName("dt");
    var myDD = myDL.getElementsByTagName("dd");
	
	for(var i=0;i<myDT.length;i++){
		 myDT[i].onclick = myDT[i].onfocus = myDT[i].hover = function(event){
		 event.preventDefault;
			for(var k=0;k<myDD.length;k++){
                myDD[k].style.display="none";                
            }
			var theNext = this.nextSibling;
            if(theNext.nodeType == 3){
                theNext = theNext.nextSibling;
            }
            theNext.style.display="block";
			
			for(var j=0;j<myDT.length;j++){
                var myImg = myDT[j].children[0].children[0];
                myImg.src=myImg.src.replace("_on.gif","_off.gif");
            }
			
			this.children[0].children[0].src=this.children[0].children[0].src.replace("_off.gif","_on.gif");
            return false;
		 }
		
	}
	
}

if(window.addEventListener){
   window.addEventListener("load",TabMenu,false);
   //표준방식 브라우저에서 load될때
}else if(window.attchEvent){
   window.attachEvent("onload",TabMenu);
   //비표준 방식 브라우저에서 onload라는 이벤트 추가해서 galleryLoad실행
}