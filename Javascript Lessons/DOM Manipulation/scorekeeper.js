var p1 = document.querySelector("button");
var p2 = document.querySelectorAll("button")[1];
var resetbut = document.querySelectorAll("button")[2];
var score = document.querySelector("h1");
var max = document.querySelector("input");
var maxDisp = document.querySelector("#max");
var gamedone = false;
var winNum = 7;
var p1Score = 0;
var p2Score = 0;

function reset(){
  document.querySelector("#p1score").textContent = 0;
  document.querySelector("#p2score").textContent = 0;
  document.querySelector("#p1score").style.color = "black";
  document.querySelector("#p2score").style.color = "black";
  gamedone = false;
  p1Score = 0;
  p2Score = 0;
}

p1.addEventListener("click", function(){
  if (!gamedone){
    p1Score += 1;
    document.querySelector("#p1score").textContent = p1Score;
  }
  if (p1Score === winNum){
    document.querySelector("#p1score").style.color = "green";
    gamedone = true;
  }
});

p2.addEventListener("click", function(){
  if (!gamedone){
    p2Score += 1;
    document.querySelector("#p2score").textContent = p2Score;
  }
  if (p2Score === winNum){
    document.querySelector("#p2score").style.color = "green";
    gamedone = true;
  }
});

resetbut.addEventListener("click", reset);

max.addEventListener("change", function(){
  if (Number(this.value < 1 )){
    this.value = 1;
  }
  maxDisp.textContent = Number(this.value);
  winNum = Number(this.value);
  reset();
})
