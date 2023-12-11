function myFunction() {
  var element = document.getElementById("navbarSupportedContent");
  element.classList.toggle("mobilenavitem");

  var element = document.getElementById("navbarSupportedContent1");
  element.classList.add("mobileheader");

  var element = document.getElementById("navbarSupportedContentMobile");
  element.classList.remove("mobilenavitem");

  var element = document.getElementById("overlayContentMobile");
  element.classList.add("mobilenavoverlay");
}

function remove_sub_category_desktop() {
  var element = document.getElementById("overlayContentDesktop");
  element.classList.remove("desktopnavoverlay");

  var element = document.getElementById("navbarSupportedContent1");
  element.classList.remove("desktopheader");

  var element = document.getElementById("navbarSupportedContentsubcategory");
  element.classList.remove("desktop_header_subcategory");

}

function remove_sub_category() {
  var element = document.getElementById("navbarSupportedContentMobile");
  element.classList.remove("mobilenavitem");

  var element = document.getElementById("overlayContentMobile");
  element.classList.remove("mobilenavoverlay");

  var element = document.getElementById("navbarSupportedContent");
  element.classList.remove("mobilenavitem");
}

function productmenu_mobile() {
  var element = document.getElementById("navbarSupportedContentMobile");
  element.classList.toggle("mobilenavitem");

  
  var element = document.getElementById("overlayContentMobile");
  element.classList.toggle("mobilenavoverlay");

  var element = document.getElementById("navbarSupportedContent1");
  element.classList.add("mobileheader");

  var element = document.getElementById("navbarSupportedContent");
  element.classList.remove("mobilenavitem");
}

function open_sub_category(){
  document.getElementById('navbarSupportedContentsubcategory').classList.toggle("desktop_header_subcategory");

  var element = document.getElementById("navbarSupportedContent1");
  element.classList.toggle("desktopheader");

  var element = document.getElementById("overlayContentDesktop");
  element.classList.toggle("desktopnavoverlay");
}

        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('header').outerHeight();
        
        $(window).scroll(function(event){
            didScroll = true;
        });
        
        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);
        
        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('header').removeClass('nav-down').addClass('nav-up');
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('header').removeClass('nav-up').addClass('nav-down');
                }
            }
            
            lastScrollTop = st;
        }