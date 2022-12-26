import MediaPlayer from "./mediaplayer.js"
//importing a class from another file in the same folder, modularizing the code, ↑ maintainability 
import AutoPlay from "./plugins/autoplay.js"
import AutoPause from "./plugins/autopause.js";

//selecting elements from DOM
const video = document.querySelector("video");
const button = document.querySelector("button");
const muteButton = document.querySelector(".muting-button")

//instancing the object
const player = new MediaPlayer({
    media: video,
     plugins: [
    new AutoPlay(),
    new AutoPause(), 
]});
//passing parameters of the MediaPlayer class as an object, attributes as video and its plugins         

//adding click event to the button with object method
button.addEventListener('click', () => {
    //calling the method when event of click triggers the function
    player.toggleButton()
});

//creating muting button
muteButton.addEventListener('click', () => {
    player.muteUnmute();
})

player._initPlugins()