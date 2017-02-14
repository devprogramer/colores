

var page = 0;
var coloresCnt = 3;

var colores = [
	{color: "fff", text: "білий" },
	{color: "2DAF32", text: "Закоханої жаби"},
	{color: "57A725", text: "Трав'яний"},
	{color: "8FFF8F", text: "Салатовий"},
	{color: "457539", text: "Зелений папоротнік"},
	{color: "00F87A", text: "Весняно зелений"},
	{color: "96FF98", text: "М'ята"},
	{color: "9DE093", text: "Яблуко Грені"},
	{color: "00F87A", text: "Весняно зелений"},
	{color: "00A86B", text: "Нефритовий"},
	{color: "7DFB01", text: "Зелена поляна"},
	{color: "0CDB4F", text: "Малахітовий"},
	{color: "218C24", text: "Лісний"},
	{color: "35CC99", text: "Трилистник"},
	{color: "7EF9FF", text: "Електрик"},
	{color: "00FCFD", text: "Ціан"},
	{color: "1A676F", text: "Мурена"},
	{color: "2F4D4D", text: "Аспідно сірий"},
	{color: "445743", text: "Сіра спаржа"},
	{color: "495563", text: "Маренго"},
	{color: "768C77", text: "Жаби в обмороці"},
	{color: "82FFD5", text: "Аквамариновий"},
	{color: "00CECC", text: "Яйця дрозда"},
	{color: "464451", text: "Антрацитовий"},
	{color: "4E4E4E", text: "Мокрий асфальт"},
	{color: "7A7A7A", text: "Сірий"},
	{color: "BBBBBB", text: "Сріблястий"},
	{color: "667686", text: "Сірий шифер"},
	{color: "757479", text: "Мусон"},
	{color: "746965", text: "Кам'яний"},
	{color: "E1E1E3", text: "Циркон"},
	{color: "EA7501", text: "Темно-мандариновий"},
	{color: "FF7518", text: "Гарбузовий"},
	{color: "FF8800", text: "Мандариновий"},
	{color: "FE9900", text: "Сигнально-оранжовий"},
	{color: "FEA500", text: "Оранжовий"},
	{color: "F89462", text: "Оранжово-рожевий"},
	{color: "FC8766", text: "Лососевий"},
	{color: "FF8053", text: "Кораловий"},
	{color: "E3714D", text: "Випалена сіена"},
	{color: "ED6124", text: "Морквяний"},
	{color: "C900CB", text: "Яскраво фіолетовий"},
	{color: "FA00FD", text: "Пурпурний"},
	{color: "F953E1", text: "Фуксфї"},
	{color: "FC45C4", text: "Зірки в шоці"},
	{color: "D66FF6", text: "Геліотропний"},
	{color: "D870D3", text: "Орхідейний"},
	{color: "E489F0", text: "Фіалковий"},
	{color: "953163", text: "Рожево ліловий"}


];


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
		if(page < 0) page = 0;
		setColor(colores[page].color)

	}else if (event.keyCode == 39){
		removeTitle()
		page++ ;
		if(page > colores.length-1) page = colores.length;
		setColor(colores[page].color)
		
		

	}else if (event.keyCode == 32){
		if(!textStatus){
			addTitle()
		}else{
			removeTitle()			
		}
	}



	
})
