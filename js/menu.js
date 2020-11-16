/*  main.js */

var aout = 1;
var ulout = 1;

function hideMenu(){
	var mMenu = document.getElementById("gnb");
	var lMenu = mMenu.childNodes;
	var sMenu = mMenu.getElementsByTagName("ul");
	
	if(aout && ulout){
		for(var j=0; j < sMenu.length; j++){
			sMenu[j].style.display = "none";
		}
	}
}
window.onload = function(){
	
	var mMenu = document.getElementsByClassName("gnb"); //큰ul
	var lMenu = mMenu.childNodes; //li 6
	var sMenu = mMenu.getElementsByTagName("ul");
	var sMenuCon = window.document.getElementsByClassName("navi");
    var myAuto = null;
	
	//처음 하위 ul보이지 않게
	
	for( var i=0; i<lMenu.length; i++ ){
		var node = lMenu.item(i);
		
		node.onmouseover = function(){			
			for(var j=0;j<sMenu.length; j++){
				
				sMenu[j].style.display="none";
			}
						
			var myNext = this.getElementsByTagName("ul");			
			myNext[0].style.display = "block";
		
		}
		
		
		
		node.onmouseout =function(){
			//안보이기
			if(myAuto) clearTimeout(myAuto)
			myAuto = setTimeout(hideMenu, 1000)
			aout = 1;
		}
		
	}
	
	for( var i=0; i<sMenuCon.length; i++ ){
		var node2 = sMenuCon[i].childNodes[2];
		var node3 = node2.childNodes;
		
		for( var j = 0; j< node3.length; j++ ){
			
			node3.item(j).onmouseover = function(){
				//보이기
				ulout = 0;
			}
			
			node3.item(j).onmouseout = function(){
				//안보이게
				if(myAuto) clearTimeout(myAuto)
				myAuto = setTimeout(hideMenu, 1000)
				ulout = 1;
			}
		}
	}
}