var swiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 3500, // تغيير كل 1 ثانية
    disableOnInteraction: false, // يستمر التشغيل التلقائي حتى بعد التفاعل
  },
  speed: 900, // حركة سلسة
  effect: "slide", // تأثير السلايد
  slidesPerView: 1, // عرض سلايد واحد في كل مرة
  spaceBetween: 0, // بدون مسافات بين السلايدز
  fadeEffect: {
    crossFade: true, // تأثير التلاشي مع الـ linear grad
  },
});
