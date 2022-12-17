import MediaPlayer from "./mediaplayer.js"
//importing a class from another file in the same folder, modularizing the code, ↑ maintainability 

//selecting elements from DOM
const video = document.querySelector("video");
const button = document.querySelector("button");

//instancing the object
const player = new MediaPlayer(video);

//adding click event to the button with object method
button.addEventListener('click', () => {
    //calling the method when event of click triggers the function
    player.playPauseVideo()
});