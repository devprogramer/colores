

var page = 1;
var coloresCnt = 3;

var colores = {
	1: {color: "fff", text: "білий" },
	2: {color: "000", text: "чорний" },
	3: {color: "ffd", text: "незрозумілий" },

};


function removeTitle(){
	title_disp.innerText = "";
	textStatus = 0;			
}

function addTitle(){
	title_disp.innerText = colores[page].text;
	textStatus = 1;
}

function setColor(color){
	main_container.style["background-color"] = "#"+color;
}


var textStatus = 0;
window.addEventListener("keyup", function(event){

	if(event.keyCode == 37){
		removeTitle()
		page--;
		if(page < 1) page = 1;
		setColor(colores[page].color)

	}else if (event.keyCode == 39){
		removeTitle()
		page++ ;
		if(page > coloresCnt) page = coloresCnt;
		setColor(colores[page].color)
		
		

	}else if (event.keyCode == 32){
		if(!textStatus){
			addTitle()
		}else{
			removeTitle()			
		}
	}



	
})