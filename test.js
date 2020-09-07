function randFood()
{
  var foods = ['Yakisoba', 'Curry', 'Udon', 'Nachos', 'Fried Rice'];
  var food = foods[Math.floor(Math.random() * foods.length)];
  alert(food);
}

function foodMap()
{
  let foods = new Set();
  foods.add();
}

function inputs() {
    var node = document.createElement("Li");
    var text = document.getElementById("foodinput").value;
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
}


/*
var input = document.getElementById("foodinput").value;
foodSet.add(input);
var test = '';
for (item of foodSet.values()) {
  test+=item;
}
document.getElementById("demo").innerHTML = test;
alert(input + " added to food list");
*/
