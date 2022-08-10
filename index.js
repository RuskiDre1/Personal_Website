window.onload = function ondocload() {
    var mybutton = document.getElementById("goToTopBtn");
              window.onscroll = function() {scrollFunction()};
              
              function scrollFunction() {
                if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                  mybutton.style.display = "block";
                } else {
                  mybutton.style.display = "none";
                }
              }
}
// arrow button scroll to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }