$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      $(".scroll-top-button").fadeIn();
    } else {
      $(".scroll-top-button").fadeOut();
    }
  });

  $(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(".scroll-top-button").on('click', function () {
    $('html , body').animate({
      scrollTop: 0
    }, 100);
  });

  $('.hamburger').click(function(){
    $('.hamburger').toggleClass('active');
    $('.navbar-nav').toggleClass('active-nav');
    $('body').toggleClass('overflowNone')
  });

  var swiper = new Swiper(".swiper-header", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
  var swiper = new Swiper(".swiper-brands", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
      slidesPerView: 2,
      spaceBetween: 18,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-team", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
      slidesPerView: 3,
      spaceBetween: 18,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 18,
      },
    },
  });

  var swiper = new Swiper(".swiper-testimonials", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      300: {
        slidesPerView: 1.2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 2.1,
        spaceBetween: 18,
      },
    },
  });
  
  var swiper = new Swiper(".swiper-products", {
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      300: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 18,
      },
    },
  });

  $("[data-fancybox]").fancybox({
    selector: '[data-fancybox="images"]',
    loop: true
  });


  AOS.init();
});


const countries = [
  { name: "السعودية", code: "+966", flag: "https://flagcdn.com/sa.svg" },
  { name: "مصر", code: "+20", flag: "https://flagcdn.com/eg.svg" },
  { name: "فلسطين", code: "+970", flag: "https://flagcdn.com/ps.svg" },
  { name: "الأردن", code: "+962", flag: "https://flagcdn.com/jo.svg" },
  { name: "الكويت", code: "+965", flag: "https://flagcdn.com/kw.svg" },
  { name: "الإمارات", code: "+971", flag: "https://flagcdn.com/ae.svg" },
  { name: "قطر", code: "+974", flag: "https://flagcdn.com/qa.svg" },
  { name: "البحرين", code: "+973", flag: "https://flagcdn.com/bh.svg" },
  { name: "عمان", code: "+968", flag: "https://flagcdn.com/om.svg" },
  { name: "اليمن", code: "+967", flag: "https://flagcdn.com/ye.svg" },
  { name: "المغرب", code: "+212", flag: "https://flagcdn.com/ma.svg" },
  { name: "تونس", code: "+216", flag: "https://flagcdn.com/tn.svg" },
  { name: "الجزائر", code: "+213", flag: "https://flagcdn.com/dz.svg" },
  { name: "السودان", code: "+249", flag: "https://flagcdn.com/sd.svg" },
  { name: "العراق", code: "+964", flag: "https://flagcdn.com/iq.svg" },
  { name: "لبنان", code: "+961", flag: "https://flagcdn.com/lb.svg" },
  { name: "سوريا", code: "+963", flag: "https://flagcdn.com/sy.svg" },
  { name: "تركيا", code: "+90", flag: "https://flagcdn.com/tr.svg" },
];

const selectedBtn = document.getElementById("selected-country");
const countryDropdown = document.getElementById("country-dropdown");
const countryList = document.getElementById("country-list");
const dialCode = document.getElementById("dial-code");
const searchInput = document.getElementById("country-search");

// فتح/غلق القائمة
selectedBtn.addEventListener("click", () => {
  countryDropdown.classList.toggle("hidden");
  searchInput.value = "";
  renderCountries(countries);
});

// عرض الدول
function renderCountries(list) {
  countryList.innerHTML = "";
  list.forEach((c) => {
    const li = document.createElement("li");
    li.innerHTML = `<img src="${c.flag}" alt=""> ${c.name} <span>${c.code}</span>`;
    li.addEventListener("click", () => {
      selectedBtn.querySelector("img").src = c.flag;
      dialCode.textContent = c.code;
      countryDropdown.classList.add("hidden");
    });
    countryList.appendChild(li);
  });
}

renderCountries(countries);

// البحث
searchInput.addEventListener("input", () => {
  const val = searchInput.value.trim();
  const filtered = countries.filter(
    (c) => c.name.includes(val) || c.code.includes(val)
  );
  renderCountries(filtered);
});

// غلق القائمة لما تضغط بره
document.addEventListener("click", (e) => {
  if (!e.target.closest(".country-select")) {
    countryDropdown.classList.add("hidden");
  }
});

// Smooth scroll مع offset و active class للينكات
$(document).ready(function() {
  // Smooth scroll للينكات والأزرار اللي بتوديك للأقسام
  $('.navbar-nav .nav-link, a[href^="#"]').on('click', function(e) {
    var target = $(this).attr('href');
    
    // لو اللينك بيروح لقسم في نفس الصفحة
    if (target.indexOf('#') === 0 && target.length > 1) {
      e.preventDefault();
      
      var targetSection = $(target);
      if (targetSection.length) {
        // إزالة active من كل اللينكات في القائمة فقط
        $('.navbar-nav .nav-link').removeClass('active');
        // إضافة active للينك المضغوط عليه (لو كان في القائمة)
        if ($(this).hasClass('nav-link')) {
          $(this).addClass('active');
        }
        
        // التمرير للقسم مع offset 100px
        $('html, body').animate({
          scrollTop: targetSection.offset().top - 100
        }, 800);
        
        // غلق القائمة في الموبايل
        $('.hamburger').removeClass('active');
        $('.navbar-nav').removeClass('active-nav');
        $('body').removeClass('overflowNone');
      }
    }
  });
  
  // تتبع القسم الحالي وإضافة active class
  $(window).on('scroll', function() {
    var scrollPos = $(document).scrollTop() + 150; // offset + 50 للدقة
    
    $('.navbar-nav .nav-link').each(function() {
      var currLink = $(this);
      var refElement = $(currLink.attr('href'));
      
      // التأكد من أن اللينك بيشير لقسم موجود
      if (refElement.length && currLink.attr('href').indexOf('#') === 0) {
        if (refElement.offset().top <= scrollPos && 
            refElement.offset().top + refElement.outerHeight() > scrollPos) {
          $('.navbar-nav .nav-link').removeClass('active');
          currLink.addClass('active');
        }
      }
    });
  });
});
