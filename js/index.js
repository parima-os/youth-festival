
( function(){

    // Initialize the Locomotive scroll
    console.log("in index.js");
    const currentScrollContainer = document.querySelector('[data-scroll-container]');
    const scroll = new LocomotiveScroll({
        el: currentScrollContainer,
        smooth: true
    });

    console.log(scroll);
    
    scroll.on('call', callValue => {
       console.log(callValue);
       if(callValue === 'bg-blue'){
            const videoOverlay = document.getElementById('video-overlay');
            const video = document.getElementById("video");
            if(videoOverlay.classList.contains('bg-blue')){
                videoOverlay.classList.remove('bg-blue');
                video.style.opacity = 1;
            }
            else{
                videoOverlay.classList.add('bg-blue');
                setTimeout( () => {
                    video.style.opacity = 0;
                }, 1000);
            }
        }
        if(callValue === 'bg-gray'){
            const planeScroll = document.getElementById('plane-scroll');
            if(planeScroll.classList.contains(callValue)){
                planeScroll.classList.remove(callValue);
            }
            else{
                planeScroll.classList.add(callValue);
            }
        }


    });

})();
