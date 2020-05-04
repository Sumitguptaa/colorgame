window.setTimeout(function(){
	var numsquare=6;
	var colors=generaterandomcolors(numsquare);
	var squares=document.querySelectorAll(".square");
	var pickedcolor=pickcolor();
	var colordisplay=document.getElementById("colordisplay");
	var messagedisplay=document.querySelector("#message");
	var h1=document.querySelector("h1");
	var reset=document.querySelector("#reset");
	var easy=document.querySelector("#easy");
	var hard=document.querySelector("#hard");

	easy.addEventListener("click",function(){
		hard.classList.remove("selected");
		easy.classList.add("selected");
		numsquare=3;
		colors=generaterandomcolors(numsquare);
		pickedcolor=pickcolor(); 
		colordisplay.textContent=pickedcolor;
		for(var i=0;i<squares.length;i++)
		{
			if(colors[i]){
				squares[i].style.backgroundColor=colors[i];
			}else{
				squares[i].style.display="none";
			}
		}
	})
	hard.addEventListener("click",function(){
		hard.classList.add("selected");
		easy.classList.remove("selected");
		numsquare=6;
		colors=generaterandomcolors(numsquare);
		pickedcolor=pickcolor(); 
		colordisplay.textContent=pickedcolor;
		for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		}
	})

	reset.addEventListener("click",function(){
		//generate all new colors\
		colors=generaterandomcolors(numsquare);
		//pick a new random color from array
		pickedcolor=pickcolor();
		//change color display to match pickedcolor
		colordisplay.textContent=pickedcolor;
		//change colors of square
		for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
		}
		h1.style.backgroundColor="steelblue";
		this.textContent="New Colors";
		messagedisplay.textContent="";
	})

	colordisplay.textContent=pickedcolor;

	for(var i=0;i<squares.length;i++){
		//add initial color to square
		squares[i].style.backgroundColor=colors[i];
		//add click listener to squares
		squares[i].addEventListener("click",function(){
			// grab coclor to compare
			var clickedcolor=this.style.backgroundColor;
			// compare the color
			if(clickedcolor === pickedcolor)
			{
				messagedisplay.textContent="Correct";
				reset.textContent="Play Again";
				changecolor(clickedcolor);
				h1.style.backgroundColor=clickedcolor;
			}else{
				this.style.backgroundColor="#232323";
				messagedisplay.textContent="Try Again";
			}
		})
	}

	function changecolor(color){
		//loop through to all color
		for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=color;
		}
	}

	function pickcolor(){
		var random = Math.floor(Math.random()*colors.length);
		return colors[random];
	}

	function generaterandomcolors(num){
		// create a array
		var a=[];
		// repeat num times to get random color
		for(var i=0;i<num;i++){
			//to set the random array
			a.push(randomcolor());
		}
		// return the array
		return a;
	}

	function randomcolor(){
		//pick a red from 0-255
		var r=Math.floor(Math.random()*256);
		//pick a green from 0-255
		var g=Math.floor(Math.random()*256);
		//pick a blue from 0-255
		var b=Math.floor(Math.random()*256);
		return "rgb(" +r +", "+g+", "+b+")";
	}
},500);