document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".read-more");
  const extraText = document.querySelector(".extra-text");

  button.addEventListener("click", () => {
      extraText.classList.toggle("hidden");
      button.classList.toggle("active");
      button.querySelector(".button-text").textContent =
          extraText.classList.contains("hidden") ? "Читать далее" : "Скрыть";
  });
});

// show more lenovo

const showMoreButton = document.querySelector('.show-more');
const showMoreIcon = document.querySelector('.show-more__icon');
const showMoreText = document.querySelector('.show-more__text');
const hiddenImages = document.querySelectorAll('.hidden-slider');

showMoreButton.addEventListener('click', () => {
hiddenImages.forEach(image => {
  image.classList.toggle('hidden-slider');
});

const isHidden = Array.from(hiddenImages).some(image => image.classList.contains('hidden-slider'));

if (isHidden) {
  showMoreText.textContent = 'Показать все';
  showMoreIcon.classList.remove('rotated');
} else {
  showMoreText.textContent = 'Скрыть';
  showMoreIcon.classList.add('rotated');
}
});

// show more notes

const showMoreNoteButton = document.querySelector('.show-more-note');
const showMoreNoteIcon = document.querySelector('.show-more-note_icon');
const showMoreNoteText = document.querySelector('.show-more-note_text');
const hiddenNoteImages = document.querySelectorAll('.slider-note__hidden');

showMoreNoteButton.addEventListener('click', () => {
  hiddenNoteImages.forEach(image => {
  image.classList.toggle('slider-note__hidden');
});

const isHiddenNote = Array.from(hiddenNoteImages).some(image => image.classList.contains('slider-note__hidden'));

if (isHiddenNote) {
  showMoreNoteText.textContent = 'Показать все';
  showMoreNoteIcon.classList.remove('rotated');
} else {
  showMoreNoteText.textContent = 'Скрыть';
  showMoreNoteIcon.classList.add('rotated');
}
});

//swiper wrapper

document.addEventListener("DOMContentLoaded", function () {
new Swiper('.image-slider', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
});

// swiper wrapper remont

new Swiper('.image-slider__remont', {
slidesPerView: 'auto',
spaceBetween: 20,
loop: true,
pagination: {
   el: '.swiper-pagination',
   clickable: true,
},
});

// swiper wrapper coust

new Swiper(".swiper", {
slidesPerView: "auto",
spaceBetween: 20,
loop: false,
pagination: {
    el: ".swiper-pagination",
    clickable: true,
}
});


// buttons sidebar menu

function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  const mainContent = document.getElementById("mainContent");

  sidebar.classList.toggle("active");

  if (sidebar.classList.contains("active")) {
      mainContent.classList.add("blur");
      document.getElementById('sidebar').classList.add('active')
      // document.addEventListener("click", closeMenuOutside);
  } else {
      // mainContent.classList.remove("blur");
      document.getElementById('sidebar').classList.remove('active')
      document.getElementById('mainContent').classList.remove('blur')
      document.removeEventListener("click", closeMenuOutside);
  }
}


//call menu

function toggleCall() {
  document.getElementById("phone-info").classList.toggle("active");
  document.getElementById("overlay").classList.toggle("active");
    document.getElementById('sidebar').classList.remove('active')
    document.getElementById('mainContent').classList.remove('blur')
}


document.querySelectorAll(".callIcon").forEach(button => {
  button.addEventListener("click", toggleCall);
});

document.querySelector(".call-close").addEventListener("click", toggleCall);

document.getElementById("overlay").addEventListener("click", toggleCall);

// chat
function togglePopup() {
document.getElementById("contact-info").classList.toggle("active");
document.getElementById("overlay-chat").classList.toggle("active");
    document.getElementById('sidebar').classList.remove('active')

document.getElementById('mainContent').classList.remove('blur')
}

document.querySelectorAll(".contactIcon").forEach(button => {
button.addEventListener("click", togglePopup);
});

document.querySelectorAll(".chat-close, .chat-close-overlay").forEach(button => {
button.addEventListener("click", togglePopup);
});

document.getElementById("overlay-chat").addEventListener("click", togglePopup);
