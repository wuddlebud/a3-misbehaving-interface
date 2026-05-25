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
        console.log("Don't you dare double click me")
    }
    buttonTime = buttonTime + 2
})

document.addEventListener("dblclick", (event) => {
    if (event.target.id === "buttonTime") {
        console.log("okay..the secret is you you can really hide the date by pressing the space bar")
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
//i changed my mind I do want a double click function for hiddenbutton

//hiddenButton.addEventListener('oncontextmenu', function() {
  //window.open('https://youtu.be/RGVBtKtGfds?si=z82irUJBxqL95lAY', '_blank');
//});
//not working rn, gonna turn off the other function to test it. It may not be able to process the two diffrent functions, since it will try and open the link after 1 click it doesnt give you enough time to double click.
//yeah that was the problem, I dont even really want it to lead to 2 diffrent things that badly but its kinda funny. Im going to see if theres another function I can use?
//oncontextmenu is the function for right clicking it, imma try that DIDNT WORK. I dont think i even realized what right clicking is, thats just regular button pressing bro.
//instead, ill make the secret video open from pressing a key
document.onkeydown = function(e) {
  
  if (e.key === " ") {
    window.location.href = "https://youtu.be/RGVBtKtGfds?si=z82irUJBxqL95lAY"; 
  }
};
//so if you press space, it should open my second link
//const element =document.getElementById('answerBox');
//element.addEventListener('click', function closeWebsite() {
  // myWindow.close();
//});

//const element2 = document.getElementById('closeButton');
//element2.addEventListener('click', function closeWebsite() {
  // window.close();
//});

//trying close website?? nahh okay hmm
//im gonna make a close button website to see if the function actually works.

// i dont know if this will work, but ive decdied to add another reaction to the answer box. Id like it to maybe close the website? im doing this past the submit date but im curious so feel free to ignore this
// okay didnt work, gonna try click instead of input

const btn = document.getElementById('closeButton');

  btn.addEventListener('mouseover', () => {
    // Calculate random position within the viewport
    const x = Math.random() * (window.innerWidth - btn.offsetWidth);
    const y = Math.random() * (window.innerHeight - btn.offsetHeight);

    // Update the button's style
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    //okay lets try it