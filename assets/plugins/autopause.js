class AutoPause{
    constructor(){
        this.threshold = 0.25,
        this.callback = this.callback.bind(this)
        //referencing the instance of the plugin with this using bind, then every time the callback is invoked will have as permanent context of 'this' the instance of the object
        this.handelVisibilityChange = this.handelVisibilityChange.bind(this) 
        //pointing the object of execution as the player and not the event from the document itself
    }
    run(player){
        // console.log('run!')
        this.player = player;

        const observer = new IntersectionObserver(this.callback, {
            // rootMargin: '100px',
            //similar to CSS, the margin will dictate when the observed element 'starts', then and there the callback will be invoked

            threshold: this.threshold,
            //the minimun fraction of the media element to trigger the callback function
            //this is the config object parameter
        })

        observer.observe(this.player.media)
        //sending the video as the media element defined in the object of player

        document.addEventListener("visibilitychange", this.handelVisibilityChange);
        //inserting new event for pausing the video whenever the page is not visible
    }
    callback(entries){
        //this callback recieves an array of elements regarding information of all the elements the intersection observer is observing
        const entry = entries[0];
        //the first element of the array. In this case there'll be only one element that is observing so there's only one element of info

        const intersectionRatio = entry.intersectionRatio;
    
        const visibility = intersectionRatio > this.threshold;
        //only way I found for comparing these two values and not get a false

        // if(visibility){
        //     this.player.play();
        // } else {
        //     this.player.pause()
        // }

        if(entry.isIntersecting){
            this.player.play()
        } else {
            this.player.pause()
        }
        //IntersectionObserverEntry already throws a flag if its intersecting, this is way useful
    }
    handelVisibilityChange(){
        if(document.visibilityState !== "visible"){
            this.player.pause()
        } else {
            this.player.play()
        }
        //function that will handle the event of visibility change in the document. If its visible the video will play
    }
}

export default AutoPause;