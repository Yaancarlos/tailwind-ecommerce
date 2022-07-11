function showList(a) {
    document.getElementById(`drop-down-${a}`).classList.toggle('hidden')
    changeColor()
}

function changeColor() {
    let change = document.getElementsByClassName("dot")
    for (let i = 0; i < change.length; i++) {
        var x = change[i]
        if (x.classList.contains("text-gray-300")) {
            x.classList.remove("text-gray-300")
        }  
    }
}

window.onclick = function(event) {
    if (!event.target.matches('.dot')) {
      var dropdowns = document.getElementsByClassName("dropDown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("hidden")) {
          openDropdown.classList.remove("hidden");
        }
      }
    }
}

function showlist5() {
  document.getElementById("list5").classList.toggle("hidden")
}

function showResponsive(a) {
  document.getElementById(`list-drop-${a}`).classList.toggle('hidden')
}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

textInput = document.querySelector('#numberInput');
plusButton = document.querySelector('#plusButton');
minusButton = document.querySelector('#minusButton'); 
var plus = plusButton.onclick = () => textInput.value = parseInt(textInput.value) + 1;
var minus = minusButton.onclick = () => textInput.value = parseInt(textInput.value) - 1;