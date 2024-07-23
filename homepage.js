const button = document.getElementById("myButton"); // Assuming your button has id "myButton"

hasmouseclicked= false;

button.addEventListener("click", function () {
  this.innerHTML = "Get Rick Rolled!";
  hasmouseclicked = true;
});

myaudio = document.getElementById("myaudio");

audioplayed = 0;
button.addEventListener("mouseover", function () {
  
if (hasmouseclicked){
  // Generate random positions within the window
  // audioplayed++;
  // if(audioplayed == 0){
  //   myaudio.play();
  //   audioplayed++;
  // }else{
  //   audioplayed++;
  //   myaudio.resume();
  // }
 
  myaudio.play();
  const randomX = Math.random() * (window.innerWidth - button.offsetWidth);
  const randomY = Math.random() * (window.innerHeight - button.offsetHeight);


  // Apply the new positions to the button
  button.style.position = "absolute";
  button.style.zIndex = 500;
  button.style.left = randomX + "px";
  button.style.top = randomY + "px";

  setTimeout(pauseAudio, 4000);
  }
});

function pauseAudio(){
  myaudio.pause();
}
