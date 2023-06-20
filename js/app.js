
const dark_mode_button = document.getElementById("dark_mode_button"); 

dark_mode_button.addEventListener("click", () => {
    document.body.classList.toggle('dark_mode'); 
})


let divElement = document.querySelector("#dark_mode_button");
console.log(divElement.classList); 