function getsName() {
    var input = document.getElementById("form");
    var name = "";
    for (var i = 0; i < input.length ;i++) {
        name += input.elements[i].value;
    }

    document.getElementById("greeting").innerHTML = name;
    return name; 
}

function saysHi(){ 
	var name = this.getsName().trim(); 

	if (name == "") {
		document.getElementById("greeting").innerHTML = "I need your name please!";
	}
	else {
		document.getElementById("greeting").innerHTML = "Hello there, " + name + "!"; 
	} 

}