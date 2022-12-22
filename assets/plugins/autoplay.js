class AutoPlay {
    run(player){
        if(!player.muted){  //media elements will be autoplayed only if the media is muted
            player.muted = true
        }
        //setting mute in media with a setter

        // console.log({player})

        player.playPause(); //player is the instance of the media element
        //now player is the object recieved in _initPlugins, hence only access to the methods available in the object player
    }
}

export default AutoPlay;