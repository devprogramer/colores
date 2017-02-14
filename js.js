

var page = 1;

var colores = {
	1: {color: "fff", text: "білий" },
	2: {color: "000", text: "чорний" }
};
var textStatus = 0;
window.addEventListener("keyup", function(event){

	if(event.keyCode == 37){

	}else if (event.keyCode == 39){

	}else if (event.keyCode == 32){
		if(!textStatus){
			title_disp.innerText = colores[page].text;
			textStatus = 1;
		}else{
			title_disp.innerText = "";
			textStatus = 0;			
		}
		
		



	}



	
})