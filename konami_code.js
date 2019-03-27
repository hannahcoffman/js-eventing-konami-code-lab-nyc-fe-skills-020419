const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

let tracker = 0

function init() {
  
function onKeyDown(event) {
  if (event.keyCode === code[tracker]) {
    tracker++
  } else {
  // if they get it wrong 
  tracker = 0
  }

}
event.keyCode

 // event //callback (trigger something)
document.addEventListener('keydown', onKeyDown)
                           
init()


//  let key = parseInt(event.which)
//  console.log(event.which);
//if (key === code[tracker]){
  
}