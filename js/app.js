function searchGoogle(value){
    document.getElementById("search-button").onclick = function () {
        location.href = "https://www.google.fr/#q=" + value;
    };
}

function show() {
    let container = document.getElementById("hidden-container");
    document.getElementById("button-container").classList.add("hidden");
    container.style.display = "block";
}

  