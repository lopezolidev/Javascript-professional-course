class AutoPlay {
    constructor(){

    }
    run(player){
        player.muted = true; //media elements will be autoplayed only if the media is muted
        player.play(); //player is the instance of the media element
    }
}

export default AutoPlay;