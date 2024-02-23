var slideFrom=1;
function nextSlide(slideTo) {
    if (slideTo!=slideFrom) {
        var arr =  document.getElementsByClassName("slide");

        var fadeComplete = function(e) {
            arr[slideFrom-1].classList.remove("slidefader");
            arr[slideFrom-1].style.display='none';
            arr[slideTo-1].style.display='block';
            slideFrom=slideTo;
        };
        arr[slideFrom-1].addEventListener("animationend", fadeComplete, false);
        arr[slideFrom-1].classList.add("slidefader");
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
    }
}