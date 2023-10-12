let resultNames = document.getElementById('names');
let innerName;
const namesGenerate = ["Alice", "Bob", "Charlie", "David", "Eva", "Frank", 'Ravi', 'Rohan', 'Mohan', 'Sohan', "sunny",'pinku'];
function generateTheName(){
    // innerName =  resultNames.innerText = ':'
    let generated = namesGenerate[Math.floor(Math.random() * namesGenerate.length)];
    return generated
}
function generateToName(){
    let generate = generateTheName()
    resultNames.innerHTML = generate;
}