
//creating class for MediaPlayer
class MediaPlayer{
    constructor(media){
        this.media = media
    }
    playPauseVideo(){
        if(this.media.paused){
            this.media.play();
        } else {
            this.media.pause();
        }
    }

}

export default MediaPlayer;
//exporting a class, modularizing the code