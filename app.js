function update() {
  document.getElementById('new').innerHTML = 'Updated';
}



button.onclick = function () {
  alert('Click!');
};



var btn1 = document.querySelector("#btn1");
var btn2 = document.querySelector("#btn2");


btn1.onclick = function () {
  qutu.style.background = "#ff0000";
}

btn2.onclick = function () {
  qutu.style.color = "#ffffff";
}





document.querySelectorAll('#id1, #id2, #id3').style = 'background-color: red';
document.querySelectorAll('#id4, #id5, #id6').forEach(item => {
  item.style = 'background-color: red';
})




function myFunction() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}




function changeColor() {
  var newColor = document.getElementById('colorPicker').value;
  document.getElementById('colorMsg').style.color = newColor;
}





function MouseOver(elem) {
  elem.style.color = "brown";
}

function MouseOut(elem) {
  elem.style.color = "black";
}




