console.log("hello")
let blahblahblah = 4
console.log(blahblahblah)

// what if i only want blahblahblah if it = 6?
// make an iff statement
if (blahblahblah === 4) {

    console.log("it equals four")
}

let counter = 0
document.addEventListener("keydown", (event) => {
    console.log(event.key)
    if (event.key === ' '){
          if(counter ==4){
        console.log("yay"  )
          }  
  counter = counter + 1
  console.log(counter)


    }

})

function loadButton(){