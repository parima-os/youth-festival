
( function(){

    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // const indiaLink = "https://youth.srmd.org/app/Events/RegisterOpenNA?EventCode=N20-07";
    // const worldLink = "https://youth.srmd.org/app/Events/RegisterOpenNA?EventCode=N20-11";
    const worldLink = "https://www.srmd.org/app/Events/RegisterOpenNA?EventCode=N20-10";
    const indiaLink = "https://www.srmd.org/app/Events/RegisterOpenNA?EventCode=N20-07"
    const indiaPrice = "Rs 500";
    const worldPrice = "$10 USD";

    const registrationLinks = document.getElementsByClassName("register-now");
    const priceTextAreas = document.getElementsByClassName("price");
    if(timeZone === 'Asia/Calcutta'){
        Array.from(registrationLinks).forEach( r => r.href = indiaLink);
        Array.from(priceTextAreas).forEach( p => p.innerHTML = indiaPrice);
    }
    else{
        Array.from(registrationLinks).forEach( r => r.href = worldLink);
        Array.from(priceTextAreas).forEach( p => p.innerHTML = worldPrice);
    }

    // Initialize the Locomotive scroll
    const currentScrollContainer = document.querySelector('[data-scroll-container]');
    const scroll = new LocomotiveScroll({
        el: currentScrollContainer,
        smooth: true
    });

   imagesLoaded( document.getElementById('main'), () => {
       scroll.update();
   })

    
    // scroll.on('call', callValue => {
    //    console.log(callValue);
    //    if(callValue === 'bg-blue'){
    //         const videoOverlay = document.getElementById('video-overlay');
    //         const video = document.getElementById("video");
    //         if(videoOverlay.classList.contains('bg-blue')){
    //             videoOverlay.classList.remove('bg-blue');
    //             video.style.opacity = 1;
    //         }
    //         else{
    //             videoOverlay.classList.add('bg-blue');
    //             setTimeout( () => {
    //                 video.style.opacity = 0;
    //             }, 1000);
    //         }
    //     }
    //     if(callValue === 'bg-gray'){
    //         const planeScroll = document.getElementById('plane-scroll');
    //         if(planeScroll.classList.contains(callValue)){
    //             planeScroll.classList.remove(callValue);
    //         }
    //         else{
    //             planeScroll.classList.add(callValue);
    //         }
    //     }


    // });

})();
