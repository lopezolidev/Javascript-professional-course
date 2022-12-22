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
        const player = {
            playPause: () => this.playPauseVideo(), //referencing the object of the video player itself, now I can use any of the functions defined in the class and don't rewrite them

            // pause: () => this.media.pause(),
            
            media: this.media,
            get muted(){
                return this.media.muted
            },
            set muted(value){
                this.media.muted = value;
            }
        }
        //to use getters and setters we create an object
        console.log(player)
        this.plugins.forEach(plugin => {
            plugin.run(player); //method defined in AutoPlay class
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