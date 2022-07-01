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