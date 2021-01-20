
( function(){

    // Initialize the Locomotive scroll
    console.log("in index.js");
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    console.log(scroll);

})();
