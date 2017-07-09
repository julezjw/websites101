function changefont(){
    var x = document.getElementById("cn");
    x.style.fontSize = "25px";           
    x.style.color = "red"; 
}
function changeBackground(){ 
	document.body.style.color= getRandomColor();
	document.body.style.backgroundColor= getRandomColor();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}