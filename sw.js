const VERSION = 'v1'

self.addEventListener('install', event => {
    event.waitUntil(precache());
})
//'self' = 'this' for the service worker. 'install' is the event that will trigger the callback that will wait until the function precache loads

//now its time to fetch from the sw the data we want
self.addEventListener('fetch', event => {
    const request = event.request;
    
    //we only want to work with 'GET', so if the request isn't from type 'GET' we return the function
    if (request.method !== 'GET'){
        return;
    }

    //browse in cache
    event.respondWith(cachedResponse(request))

    //update cache → using cache and network
    event.waitUntil(updateCache(request))

})

async function precache(){
    const cache = await caches.open(VERSION)
    //caches API will return a promise
    return cache.addAll([
        '/',
        'index.html',
        '/assets/logic.js',
        '/assets/mediaplayer.js',
        '/assets/plugins/autoplay.js',
        '/assets/plugins/autopause.js',
        '/assets/index.css',
        '/assets/BigBuckBunny.mp4',
    ])
    //storing all the files we want in cache. As cache is a promise we must return it 
}

async function cachedResponse(request){
    const cache = await caches.open(VERSION) 
    //load cache

    const response = await cache.match(request)
    //storing in response if in cache is a file equal to request

    return response || fetch(request)
    //if such response is undefined, return anything that throws fetching the request
}

async function updateCache(request){
    const cache = await caches.open(VERSION) 
    //load cache

    const response = await fetch(request);
    //storing latest response from cache 

    return cache.put(request, response)
    //updating data from response
}