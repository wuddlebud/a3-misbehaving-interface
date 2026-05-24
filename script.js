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
        console.log("okay..the secret is you you can double click the hide date button, and it will take you somehwere new! try it")
    }
   
})
// this is a lie i just want to rick roll you again lol (but i therotically could make it go somewhere else if i wanted to)
counter = 0

document.addEventListener("mouseover", (event) => {
    console.log('get your mouse off of me')
    if (event.target.id === "buttonTime" && counter == 1) {
        console.log("you're touching the button")
        document.body.style.backgroundColor = "red"
    } else {
        document.body.style.backgroundColor = "white"
    }

        
   
})

//function loadButton() {
//const myBtn = document.getElementById("buttonTime");
//myBtn.addEventListener("click", function() {
//  displaydate
//});
// okay no offence micheal but now ive gotta fix this stuff
const btn = document.getElementById("buttonTime");
const display = document.getElementById("dateDisplay");
btn.addEventListener("click", () => {
  display.textContent = new Date().toLocaleDateString(); 

  counter = counter + 1 

  counter = counter % 2
  console.log(counter)
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
// make this insible lol

const element = document.getElementById('buttonTime');

element.addEventListener('dblclick', function() {
  // Removes the 'active-style' class from the element
  element.removeAttribute('style');
});

// im goint to try and make an event listener to react to the hiden button being pressed, that will open a very unexpected link that no one could possibly ever predict

hiddenButton.addEventListener('click', function() {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
});
//okay, that might work
//it worked ;p