var j = 0; 

var myAppendingFunction = function(){

	if(j % 10 === 3){
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="heartblue"><img class="hpng"src="Asset/hpng_2@300x.png"></div>`);
}else{
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="heartred"><img class="hpng"src="Asset/hpng@300x.png"></div>`);
}


	if(j >= 41){ 
		clearInterval(myAnimating);
	}

	j++;
}


var myAnimating = setInterval(myAppendingFunction, 1000);



