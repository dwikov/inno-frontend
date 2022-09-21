

let parentDiv = document.getElementById("random-facts");
for(let i = 0; i < 20; i++ ){
    fetch("http://numbersapi.com/random/math")
    .then(response => response.text())
    .then((text) => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML =  text;
        newDiv.appendChild(newImage);
        console.log(text);
        parentDiv.appendChild(newDiv);
    })
}
