var nunSquares = 3;
var colors = [];
var pickedColor;
var squares= document.querySelectorAll(".square");
var DisplayColor = document.querySelector("#DisplayColor");
var messageDisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtoms = document.querySelectorAll(".mode");


inital();

function inital()
{

	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons()
{
	for(var i=0; i<modeButtoms.length;i++)
    {
		modeButtoms[i].addEventListener("click", function(){
		modeButtoms[0].classList.remove("selected");
		modeButtoms[1].classList.remove("selected");
		modeButtoms[2].classList.remove("selected");
		modeButtoms[0].disabled = false;
		modeButtoms[1].disabled = false;
		modeButtoms[2].disabled = false;
		this.classList.add("selected");
		this.disabled = true;
		if(this.textContent ==="EASY")
		{
			nunSquares = 3;
		}
		else if(this.textContent ==="HARD")
		{
			nunSquares = 6;
		}
		else
		{
			nunSquares = 9;
		}
		// this.textContent ==="EASY" ? nunSquares = 3: nunSquares = 6;
		 reset();
		});
    }
}

function setupSquares()
{
	for (var i=0; i<squares.length; i++)
    { 
		//add click listeners to squares
		squares[i].addEventListener("click", function(){
			//grab color of click square
			var clickedColor = this.style.backgroundColor;
			//compare color to picked color
			if(clickedColor === pickedColor)
			{
				messageDisplay.innerHTML = 'Winner' + ' <i class="far fa-smile-wink"></i>';
				messageDisplay.style.color = "green";
				messageDisplay.style.fontWeight = "bold";
				changeColors(clickedColor);
				h1.style.backgroundColor= clickedColor;
				resetButton.textContent = "NEW GAME"
			}
			else
			{
				this.style.backgroundColor= "#232323";
				// messageDisplay.textContent = "Try Again" +"!";
				messageDisplay.innerHTML = 'Try Again' +' <i class="far fa-frown"></i>';
				messageDisplay.style.color = "red";
			}
		});	
	 }
}

resetButton.addEventListener("click", function(){
	reset();
});

function reset()
{
	//generate all new colors
	colors = generateRandomColors(nunSquares);
	//pick new random color
	pickedColor= pickColor();
	//change colorDisplay to match picked color
	DisplayColor.textContent = pickedColor;
	h1.style.backgroundColor= "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for (var i=0; i<squares.length; i++)
	{
		if(colors[i])
		{
			//befire I am giving a coloe I make sure that the aquare is visible
			squares[i].style.display= "block";
			squares[i].style.backgroundColor= colors[i];
		}
		else
		{
			squares[i].style.display= "none";
		}
	}
}

function changeColors(color)
{
	for(var i= 0; i<squares.length ; i++)
	{
		squares[i].style.backgroundColor= color;
	}
}

function pickColor()
{
	//Math.random- pick number between 0 to 1
	// Math.floor(Math.random() * 255 + 1);
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(size)
{
	var temp = new Array();

	for(var i=0; i< size; i++)
	{
		temp.push(randomColor());
	}

	return temp;
}

function randomColor()
{
     var R = Math.floor(Math.random() * 255) + 1;
	 var G = Math.floor(Math.random() * 255) + 1;
	 var B = Math.floor(Math.random() * 255) + 1;

	 return "rgb(" + R + ", " + G + ", " + B + ")";
}