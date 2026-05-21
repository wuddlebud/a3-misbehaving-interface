//console.log("hello")
//let blahblahblah = 4
//console.log(blahblahblah)

// what if i only want blahblahblah if it = 6?
// make an iff statement
//if (blahblahblah === 4) {

  //  console.log("it equals four")
//}

//let counter = 0
//document.addEventListener("keydown", (event) => {
  //  console.log(event.key)
    //if (event.key === ' '){
      //    if(counter ==4){
        //console.log("yay"  )
          //}  
  //counter = counter + 1
  //console.log(counter)


    //}

//})

document.addEventListener("click", (event) => {
    if (event.target.id === "buttonTime") {
        console.log("button was clicked")
    }
    buttonTime = buttonTime + 2
})

document.addEventListener("dblclick", (event) => {
    if (event.target.id === "buttonTime") {
        console.log("button was double clicked")
    }
   
})

document.addEventListener("mouseover", (event) => {
    if (event.target.id === "buttonTime") {
        console.log("you're touching the button")
    }
   
})

//function loadButton() {
//const myBtn = document.getElementById("buttonTime");
//myBtn.addEventListener("click", function() {
//  displaydate
//});

const btn = document.getElementById("buttonTime");
const display = document.getElementById("dateDisplay");
btn.addEventListener("click", () => {
  display.textContent = new Date().toLocaleDateString(); 
});

// Select the button by its ID
const myButton = document.getElementById('buttonTime');

// Add a click event listener
myButton.addEventListener('click', function() {
  // Change the background color to green
  myButton.style.backgroundColor = 'green';
  // You can also change the text color
  myButton.style.color = 'white'; 
});
