var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");


function openFullImg(pic){
    fullImgBox.style.display = "flex"; 
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display = "none"
  
}