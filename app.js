var user_number = document.getElementById("user_number")
var random_number = document.getElementById("random_number")
var result = document.getElementById("result")
var box_result = document.getElementById("box_result")
var total = document.getElementById("total")
var win_html = document.getElementById("win")
var loss_html = document.getElementById("loss")
var msg = document.getElementById("msg")

var total_count = 15
var win = 0 
var loss  = 0
function trymyluck(user) {
  var random = Math.random()*6
  var ceil = Math.ceil(random)
  console.log(ceil);
  user_number.innerText = user
  random_number.innerText = ceil

total.innerText = --total_count

if (ceil === user){
  console.log("you win");
 result.innerText = "you win"
 box_result.style.backgroundColor = "green"
 box_result.style.color = "white" 

 win_html.innerText = ++win

}else{
  console.log("loss");
  result.innerText = "you loss"
result.style.color = "white"
box_result.style.backgroundColor = "red"

  loss_html.innerText = ++loss
}

checkResult();           
}

function checkResult() {
  if (total_count == 0) {
    if (win >= 3) {
      msg.innerText = "Congrats! You won";
      msg.style.color = "white"
    } else {
      msg.innerText = "Sorry! You loss try again";
      msg.style.color = "white"
    }
    total_count = 15;
    win = 0;
    loss = 0;
    total.innerText     = total_count;
    win_html.innerText  = win;
    loss_html.innerText = loss;
   

  }
}