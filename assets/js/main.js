(function ($) {
  "use strict";
  jQuery(document).on("ready", function () {
    var wind = $(window);

    // Var Background image
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
      if ($(this).attr("data-background")) {
        $(this).css("background-image", "url(" + $(this).data("background") + ")");
      }
    });

    // Header Sticky
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 120) {
        $(".navbar-area").addClass("is-sticky");
      } else {
        $(".navbar-area").removeClass("is-sticky");
      }
    });

    // Mean Menu
    jQuery(".mean-menu").meanmenu({
      meanScreenWidth: "991",
    });

    // Button Hover JS
    $(function () {
      $(".default-btn")
        .on("mouseenter", function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find("span").css({ top: relY, left: relX });
        })
        .on("mouseout", function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find("span").css({ top: relY, left: relX });
        });
    });

    // Progress bar
    wind.on("scroll", function () {
      $(".skill-progress .progres").each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var myVal = $(this).attr("data-value");
        if (bottom_of_window > bottom_of_object) {
          $(this).css({
            width: myVal,
          });
        }
      });
    });

    // Testimonial Slider
    $(".testimonial-slider").owlCarousel({
      loop: true,
      nav: true,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 20,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        },
      },
    });

    // Partner Logo
    $("#partner-carousel").owlCarousel({
      margin: 0,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 800,
      nav: false,
      dots: false,
      autoplayHoverPause: true,
      loop: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });

    //  Star Counter
    $(".counter-number").counterUp({
      delay: 15,
      time: 2000,
    });

    // FAQ Accordion
    $(function () {
      $(".accordion")
        .find(".accordion-title")
        .on("click", function () {
          // Adds Active Class
          $(this).toggleClass("active");
          // Expand or Collapse This Panel
          $(this).next().slideToggle("slow");
          // Hide The Other Panels
          $(".accordion-content").not($(this).next()).slideUp("slow");
          // Removes Active Class From Other Titles
          $(".accordion-title").not($(this)).removeClass("active");
        });
    });

    // Image Sliders
    $(".image-sliders").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      autoplayHoverPause: true,
      autoplay: true,
      smartSpeed: 1000,
      margin: 20,
      navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1200: {
          items: 1,
        },
      },
    });

    // Go to Top
    $(function () {
      // Scroll Event
      $(window).on("scroll", function () {
        var scrolled = $(window).scrollTop();
        if (scrolled > 600) $(".go-top").addClass("active");
        if (scrolled < 600) $(".go-top").removeClass("active");
      });
      // Click Event
      $(".go-top").on("click", function () {
        $("html, body").animate({ scrollTop: "0" }, 500);
      });
    });

    // Count Time
    function makeTimer() {
      var endTime = new Date("January 25, 2023 20:00:00 PDT");
      var endTime = Date.parse(endTime) / 1000;
      var now = new Date();
      var now = Date.parse(now) / 1000;
      var timeLeft = endTime - now;
      var days = Math.floor(timeLeft / 86400);
      var hours = Math.floor((timeLeft - days * 86400) / 3600);
      var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
      var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
      if (hours < "10") {
        hours = "0" + hours;
      }
      if (minutes < "10") {
        minutes = "0" + minutes;
      }
      if (seconds < "10") {
        seconds = "0" + seconds;
      }
      $("#days").html(days + "<span>Days</span>");
      $("#hours").html(hours + "<span>Hours</span>");
      $("#minutes").html(minutes + "<span>Minutes</span>");
      $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
      makeTimer();
    }, 1000);
  });

  // WOW JS
  $(window).on("load", function () {
    if ($(".wow").length) {
      var wow = new WOW({
        boxClass: "wow", // Animated element css class (default is wow)
        animateClass: "animated", // Animation css class (default is animated)
        offset: 20, // Distance to the element when triggering the animation (default is 0)
        mobile: true, // Trigger animations on mobile devices (default is true)
        live: true, // Act on asynchronously loaded content (default is true)
      });
      wow.init();
    }
  });

  // Preloader Area
  // $(window).on("load", function () {
  //   $(".preloader").fadeOut("500");
  // });
})(jQuery);

$(function () {
  $("a[href*=\\#]:not([href=\\#])").on("click", function () {
    var target = $(this.hash);
    target = target.length ? target : $("[name=" + this.hash.substr(1) + "]");
    if (target.length) {
      $("html,body").animate(
        {
          scrollTop: target.offset().top - 120,
        },
        1000
      );
      return false;
    }
  });
});

function translateLanguage(lang) {
  localStorage.setItem("lang", JSON.stringify(`${lang}`));
  let language = JSON.parse(localStorage.getItem("lang"));

  if (language === "vi") {
    resetToOriginalLanguage();
    return;
  }

  const languageSettings = {
    "zh-CN": {
      active: ".china_lang",
      block: ".vietnam_lang",
      remove: [".english_lang"],
    },
    en: {
      active: ".english_lang",
      block: ".vietnam_lang",
      remove: [".china_lang"],
    },
  };

  if (languageSettings[language]) {
    updateLanguageUI(languageSettings[language]);
    googleTranslateElementInit(language, "vi");
  }
}

function updateLanguageUI(settings) {
  const { active, block, remove } = settings;

  document.querySelectorAll(".select_language .active, .other_languages .active, .other_languages .block").forEach((el) => {
    el.classList.remove("active", "block");
  });

  const elements = [
    { selector: `.select_language ${active}`, class: "active" },
    { selector: `.other_languages ${active}`, class: "active" },
    { selector: `.other_languages ${block}`, class: "block" },
  ];

  elements.forEach(({ selector, class: className }) => {
    document.querySelector(selector).classList.add(className);
  });

  // Remove 'active' class from elements specified in the 'remove' array
  remove.forEach((selector) => {
    document.querySelector(`.select_language ${selector}`).classList.remove("active");
    document.querySelector(`.other_languages ${selector}`).classList.remove("active");
  });
}

function googleTranslateElementInit(lang, pageLanguage) {
  new google.translate.TranslateElement(
    {
      pageLanguage: pageLanguage,
      autoDisplay: false,
    },
    "google_translate_element"
  );
  document.querySelector(".preloader").style.display = "block";
  setTimeout(function () {
    let selectElement = document.querySelector("#google_translate_element select");
    selectElement.value = lang;
    selectElement.dispatchEvent(new Event("change"));
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
}

function resetToOriginalLanguage() {
  document.cookie.split(";").forEach(function (c) {
    document.cookie = c.trim().split("=")[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  });

  localStorage.clear();
  sessionStorage.clear();
  location.reload();
}
document.addEventListener("DOMContentLoaded", function () {
  let language = JSON.parse(localStorage.getItem("lang"));
  if (language) {
    translateLanguage(language);
  }
});

function handleSelectLanguage() {
  document.querySelector(".other_languages").classList.toggle("active");
}

document.addEventListener("click", function (event) {
  if (!document.querySelector(".option_language").contains(event.target)) {
    document.querySelector(".other_languages").classList.remove("active");
  }
});
