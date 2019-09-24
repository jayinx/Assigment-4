var j = 0; // to keep track of how many times you want to loop, you have to simulate a for loop:

var myAppendingFunction = function(){

	if(j % 10 === 3){
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="heartblue" style="
		"><img class="hpng"src="Asset/hpng_2@300x.png"></div>`);
}else{
	document.getElementById("root_5_setinterval").insertAdjacentHTML("beforeend", ` 
		<div class="heartred" style=""><img class="hpng"src="Asset/hpng@300x.png"></div>`);
}


	if(j >= 41){ // defining the maximum amount of cycles
		console.log("we're done!");
		clearInterval(myAnimating);
	}

	j++;
}


var myAnimating = setInterval(myAppendingFunction, 1000);



