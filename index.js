
let page = document.getElementById("pt1");


let ctrl_fadein = (checkpoint, selector_string) => {
    const currentScroll = window.pageYOffset - page.offsetTop;
    let opacity = 0;
    if (currentScroll <= checkpoint) {
      opacity = currentScroll / checkpoint;
    } else {
      opacity = 1;
    }


    document.querySelector(selector_string).style.opacity = opacity;
}


window.addEventListener("scroll", () => {
    
});

page.onwheel = (e) => {



    ctrl_fadein (100,"#line1");
    ctrl_fadein (200,"#line2");
    ctrl_fadein (400,"#line3");
    ctrl_fadein (500,"#line4");  
    
}

// ============================================================================ 

let query2 = document.getElementById("slide2");


let ctrl_fade_in = (checkpoint, selector_string) => {
    const section_top = query2.scrollTop;
    let opacity = 0;
    if (section_top <= checkpoint) {
      opacity = section_top / checkpoint;
    } else {
      opacity = 1;
    }

    if (section_top > checkpoint+100){
        opacity = checkpoint/section_top;
    }


    document.querySelector(selector_string).style.opacity = opacity;
}




query2.onscroll = () => {
    ctrl_fade_in(100,"#ed1");
    ctrl_fade_in(1100,"#ed2"); 
    ctrl_fade_in(2100,"#ed3");
    ctrl_fade_in(3200,"#ed4");
    
}
