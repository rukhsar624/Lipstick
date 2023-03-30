(function ($) {
  "use strict";
  //  WOW init
  new WOW().init();


  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 90) {
      $("#navbar-fixed-top").css("background", "#ffffff");
      $("#navbar-fixed-top").css("box-shadow", "rgb(0 0 0 / 46%) 8px 8px 33px");
      $(".destop-nav-bar .header_links").css("color", "#000000");
      $(".destop-nav-bar .logo h1").css("color", "#ffffff");
      $(".destop-nav-bar .header_links.active").css(
        "border-bottom",
        "2px solid pink"
      );
      $(".hamburger div").css(
        "background", "#000"
      );
      $(".hamburger.active div").css(
        "background", "#8b0129"
      );
      $(".destop-nav-bar .fa-solid " ).css("color" ,"#000");
      $(".destop-nav-bar .fa-regular " ).css("color" ,"#000");
      $(".destop-nav-bar .example" ).css("border" ,"2px solid #000");
      $(".destop-nav-bar .example" ).css("border-radius" ,"10px");

    } else {
      $("#navbar-fixed-top").css("background", "none");
      $("#navbar-fixed-top").css("box-shadow", "none");
      $(".destop-nav-bar .header_links").css("color", "#fff");
      $(".destop-nav-bar .logo h1").css("color", "#1a1a1a");
      $(".destop-nav-bar .header_links.active").css(
        "border-bottom",
        "2px solid pink"
      );
      $(".hamburger div").css(
        "background", "red"
      );
      $(".hamburger.active div").css(
        "background", "#00000"
      );
      $(".destop-nav-bar .fa-solid " ).css("color" ,"#fff");
      $(".destop-nav-bar .fa-regular " ).css("color" ,"#fff");
      $(".destop-nav-bar .example" ).css("border" ,"none");
    }
  });
  // MOBILE SCREEN SIDE NAV
  var sidebarBox = document.querySelector("#box");
  var sidebarBtn = document.querySelector("#btn");
  var pageWrapper = document.querySelector("#main-content");

  sidebarBtn.addEventListener("click", function (event) {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      sidebarBox.classList.remove("active");
      $("#main-content #btn div").css(
        "background", "#ffffff"
      );
    } else {
      this.classList.add("active");
      sidebarBox.classList.add("active");
      $("#main-content #btn div").css(
        "background", "#000"
      );
    }
  });

  pageWrapper.addEventListener("click", function (event) {
    if (sidebarBox.classList.contains("active")) {
      sidebarBtn.classList.remove("active");
      sidebarBox.classList.remove("active");
    }
  });
  window.addEventListener("keydown", function (event) {
    if (sidebarBox.classList.contains("active") && event.keyCode === 27) {
      sidebarBtn.classList.remove("active");
      sidebarBox.classList.remove("active");
    }
  });

  //Butter
  // butter.init({
  //   wrapperId: "butter",
  // });

  // Scroll to div on next page
  // $(document).ready(function () {
  //   $("html, body").hide();

  //   if (window.location.hash) {
  //     setTimeout(function () {
  //       $("html, body").scrollTop(0).show();
  //       $("html, body").animate(
  //         {
  //           scrollTop: $(window.location.hash).offset().top,
  //         },
  //         1000
  //       );
  //     }, 0);
  //   } else {
  //     $("html, body").show();
  //   }
  // });

  // Click Scroll to Top Function
  // $(".scroll").on("click", function (event) {
  //   event.preventDefault();
  //   $("html,body").animate(
  //     {
  //       scrollTop: $(this.hash).offset().top,
  //     },
  //     1000
  //   );
  // });

  // $("body").append(
  //   "<a href='#' class='back-top'><i class='fa fa-angle-up'></i></a>"
  // );
  // var amountScrolled = 700;
  // var backBtn = $("a.back-top");
  // $(window).on("scroll", function () {
  //   if ($(window).scrollTop() > amountScrolled) {
  //     backBtn.addClass("back-top-visible");
  //   } else {
  //     backBtn.removeClass("back-top-visible");
  //   }
  // });
  // backBtn.on("click", function () {
  //   $("html, body").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     700
  //   );
  //   return false;
  // });
})(jQuery);
// Swiper Slider
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop:true,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	breakpoints: {
	  // when window width is >= 320px
	  768: {
		slidesPerView: 3,
		spaceBetween: 20
	  },
	  375: {
		slidesPerView: 2,
		spaceBetween: 20
	  },
	  320: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  280: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  414: {
		slidesPerView: 2,
		spaceBetween: 20
	  },
	  1920: {
		slidesPerView: 3,
		spaceBetween: 20
	  },
	  1600: {
		slidesPerView: 3,
		spaceBetween: 20
  
	  },
	  1366: {
		slidesPerView: 3,
		spaceBetween: 10
	  },
	  1400: {
		slidesPerView: 5,
		spaceBetween: 20
	  },
    1366: {
      slidesPerView: 5,
      spaceBetween: 20
      },
      2560: {
        slidesPerView: 5,
        spaceBetween: 20
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20
          }
	}
  
  });
  // Swiper Slider
var swiper = new Swiper(".mySwiper1", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop:true,
	navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
	breakpoints: {
	  // when window width is >= 320px
	  768: {
		slidesPerView: 3,
		spaceBetween: 20
	  },
	  375: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  320: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  280: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  414: {
		slidesPerView: 1,
		spaceBetween: 20
	  },
	  1920: {
		slidesPerView: 3,
		spaceBetween: 20
	  },
	  1600: {
		slidesPerView: 3,
		spaceBetween: 20
  
	  },
	  1366: {
		slidesPerView: 3,
		spaceBetween: 10
	  },
	  1400: {
		slidesPerView: 3,
		spaceBetween: 20
	  },
    
	}
  
  });
  // Counter
  let count = document.getElementById("count");
let countNum = 1;
$("#count").val(countNum);
$("#minus-btn").on("click", () => {
  if (countNum <= 1) {
    return false
}
  else {
    countNum -= 1;
  }

  $("#count").val(countNum);
});
$("#plus-btn").on("click", () => {
  countNum += 1;
  $("#count").val(countNum);
});
// 
let count1 = document.getElementById("count1");
let countNum1 = 1;
$("#count1").val(countNum);
$("#minus-btn1").on("click", () => {
  if (countNum <= 1) {
    return false
}
  else {
    countNum -= 1;
  }

  $("#count1").val(countNum);
});
$("#plus-btn1").on("click", () => {
  countNum += 1;
  $("#count1").val(countNum);
});
// 
let count2 = document.getElementById("count2");
let countNum2 = 1;
$("#count2").val(countNum);
$("#minus-btn2").on("click", () => {
  if (countNum <= 1) {
    return false
}
  else {
    countNum -= 1;
  }

  $("#count2").val(countNum);
});
$("#plus-btn2").on("click", () => {
  countNum += 1;
  $("#count2").val(countNum);
});
// 
let count3 = document.getElementById("count3");
let countNum3 = 1;
$("#count3").val(countNum);
$("#minus-btn3").on("click", () => {
  if (countNum <= 1) {
    return false
}
  else {
    countNum -= 1;
  }

  $("#count3").val(countNum);
});
$("#plus-btn3").on("click", () => {
  countNum += 1;
  $("#count3").val(countNum);
});
// eye 
$(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye fa-eye-slash");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});