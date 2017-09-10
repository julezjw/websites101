var changes; 

// function changeGrid(){
// 	var cell; 
// 	for (var i = 0; i < 10; i++){
// 		cell = "0" + i; 
// 		setTimeout(changeColor, 1000, cell); 
// 	}
// }

// function changeGrid(){ 
// 	setTimeout(changeColor, 1000, "00"); 
// 	wait(1000);
// 	setTimeout(changeColor, 1000, "01"); 
// 	wait(2000);
// 	setTimeout(changeColor, 1000, "02"); 
// 	wait(3000);
// 	setTimeout(changeColor, 1000, "03"); 
// 	wait(4000);
// 	setTimeout(changeColor, 1000, "04"); 
// }
function changeGrid(){ 
	changeColor("00");
	wait(500);
	changeColor("01");
	wait(1000);
	changeColor("02");
	wait(2000);
	changeColor("03");
	wait(3000);
	changeColor("04");

}
function changeColor(cell){ 
	document.getElementById(cell).style.background = "purple"; 
}

function wait(ms)
{
var d = new Date();
var d2 = null;
do { d2 = new Date(); }
while(d2-d < ms);
}