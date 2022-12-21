//creating class for MediaPlayer
class MediaPlayer{
    constructor({media, plugins = []}){ //applying RORO
        this.media = media;
        this.plugins = plugins;
    }
    playPauseVideo(){
        if(this.media.paused){
            this.media.play();
        } else {
            this.media.pause();
        }
    }
    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this.media); //method defined in AutoPlay class
        })
    }
    //Muting button
    muteUnmute(){
        if(this.media.muted){ //unmuting
            this.media.muted = false;
        } else { //muting
            this.media.muted = true;
        }
    }
    
}

export default MediaPlayer;
//exporting a class, modularizing the code 