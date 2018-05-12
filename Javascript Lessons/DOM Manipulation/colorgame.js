var colors = randomizeColor(6);

var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var easySelect = document.querySelector("#easy");
var hardSelect = document.querySelector("#hard");
var refresh = document.querySelector("#refresh");
var title = document.querySelector("h1");
var pickedColor = pickColor();
var defaultColor =  "rgb(35, 35, 35)";

setSquare();

refresh.addEventListener("click", function(){
  colors = randomizeColor(colors.length);
  pickedColor = pickColor();
  setSquare();
  this.textContent = "New Colors";
  title.style.backgroundColor = "steelblue";
  message.textContent = "";
});
easySelect.addEventListener("click", function(){
  colors = randomizeColor(3);
  pickedColor = pickColor();
  setSquare();
  this.classList.add("selected");
  hardSelect.classList.remove("selected");
  message.textContent = "";
});
hardSelect.addEventListener("click", function(){
  colors = randomizeColor(6);
  setSquare();
  this.classList.add("selected");
  easySelect.classList.remove("selected");
  message.textContent = "";
});


function setSquare(){
  for(var i = 0; i < squares.length; i++){

    if (colors[i] != null){
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.backgroundColor = "#232323";
    }

    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor != defaultColor){
        if (clickedColor != pickedColor){
          this.style.backgroundColor = "#232323";
          message.textContent = "Try Again";
        }else{
          message.textContent = "Correct";
          changeColors(pickedColor);
          refresh.textContent = "Play Again?";
        }
      }
    });
  }
}

function randomizeColor(numColors){
  var temp = [];
  for (var i = 0; i < numColors; i++){
    color = "rgb("
    + Math.floor(Math.random() * 256)
    + ", "
    + Math.floor(Math.random() * 256)
    + ", "
    + Math.floor(Math.random() * 256)
    + ")"

    temp.push(color);
  }

  return temp;
}

function pickColor(){
  var num = Math.floor(Math.random() * colors.length);
  document.querySelector("#RGB").textContent = colors[num];
  return colors[num];
}

function changeColors(color){
  for (var a = 0; a < colors.length; a++){
    squares[a].style.backgroundColor = color;
  }
  title.style.backgroundColor = color;
}
