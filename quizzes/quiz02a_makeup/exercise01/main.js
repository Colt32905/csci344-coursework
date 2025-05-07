function addCat() {
    // your code here...
    let snippet1 = `<img src="cat.jpg" />`;
   document.getElementById("animals").insertAdjacentHTML("beforeend",snippet1);
}

function addDog() {
    // your code here...
    let snippet2 = `<img src="dog.jpg" />`;
    document.getElementById("animals").insertAdjacentHTML("beforeend",snippet2);
    
}
