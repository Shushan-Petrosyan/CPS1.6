// read more desktop

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("button-more");
  const extraText = document.getElementById("extra-text");
  const buttonText = document.getElementById("read-text");

  button.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (extraText.classList.contains("hiddenabout")) {
      extraText.classList.remove("hiddenabout");
      buttonText.textContent = "Скрыть";
    } else {
      extraText.classList.add("hiddenabout");
      buttonText.textContent = "Читать далее";
    }
  });
});

// read more ipad

document.addEventListener("DOMContentLoaded", function () {
  const buttonIpad = document.getElementById("button-moreipad");
  const extraTextIpad = document.getElementById("extra-textIpad");
  const buttonTextIpad = document.getElementById("button-textipad");

  buttonIpad.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (extraTextIpad.classList.contains("hiddenaboutIpad")) {
      extraTextIpad.classList.remove("hiddenaboutIpad");
      buttonTextIpad.textContent = "Скрыть";
    } else {
      extraTextIpad.classList.add("hiddenaboutIpad");
      buttonTextIpad.textContent = "Читать далее";
    }
  });
});



const toggleButton = document.getElementById('toggle-button');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const hiddenImages = document.querySelectorAll('.hidden');

toggleButton.addEventListener('click', () => {
  hiddenImages.forEach(image => {
    image.classList.toggle('hidden');
  });

  const isHidden = Array.from(hiddenImages).some(image => image.classList.contains('hidden'));

  if (isHidden) {
    toggleText.textContent = 'Показать все';
    toggleIcon.classList.remove('rotated');
  } else {
    toggleText.textContent = 'Скрыть';
    toggleIcon.classList.add('rotated');
  }
});

// remont

const remontButton = document.getElementById('remont-button');
const remontIcon = document.getElementById('remont-icon');
const remontText = document.getElementById('remont-text');
const remontImages = document.querySelectorAll('.remont-hidden');

remontButton.addEventListener('click', () => {
  remontImages.forEach(image => {
    image.classList.toggle('remont-hidden');
  });

  const remontHidden = Array.from(remontImages).some(image => image.classList.contains('remont-hidden'));

  if (remontHidden) {
    remontText.textContent = 'Показать все';
    remontIcon.classList.remove('rotated');
  } else {
    remontText.textContent = 'Скрыть';
    remontIcon.classList.add('rotated');
  }
});

//ipad


const toggleButtonIpad = document.getElementById('toggle-button-ipad');
const toggleIconIpad = document.getElementById('toggle-icon-ipad');
const toggleTextIpad = document.getElementById('toggle-text-ipad');
const hiddenImagesIpad = document.querySelectorAll('.hidden-ipad');

toggleButtonIpad.addEventListener('click', () => {
  hiddenImagesIpad.forEach(image => {
    image.classList.toggle('hidden-ipad');
  });

  const isHiddenIpad = Array.from(hiddenImagesIpad).some(image => image.classList.contains('hidden-ipad'));

  if (isHiddenIpad) {
    toggleTextIpad.textContent = 'Показать все';
    toggleIconIpad.classList.remove('rotated');
  } else {
    toggleTextIpad.textContent = 'Скрыть';
    toggleIconIpad.classList.add('rotated');
  }
});

const remontButtonIpad = document.getElementById('remont-button__ipad');
const remontIconIpad = document.getElementById('remont-icon__ipad');
const remontTextIpad = document.getElementById('remont-text__ipad');
const remontHiddenIpad = document.querySelectorAll('.remont-hidden__ipad');

remontButtonIpad.addEventListener('click', () => {
  remontHiddenIpad.forEach(image => {
    image.classList.toggle('remont-hidden__ipad');
  });

  const isRemontIpad = Array.from(remontHiddenIpad).some(image => image.classList.contains('remont-hidden__ipad'));

  if (isRemontIpad) {
    remontTextIpad.textContent = 'Показать все';
    remontIconIpad.classList.remove('rotated');
  } else {
    remontTextIpad.textContent = 'Скрыть';
    remontIconIpad.classList.add('rotated');
  }
});

new Swiper('.image-slider', {

  pagination: {
   el: '.swiper-pagination',
   clickable: true,
 
  },
 
  autoHeight: true,


 
});
new Swiper('.image-slider__remont', {

  pagination: {
   el: '.swiper-pagination',
   clickable: true,
 
  },
 
  autoHeight: true,


});

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const burgerButtons = document.querySelectorAll(".burgerButton"); 
  const sidebarModal = document.querySelector(".sidebar-modal"); 
  const rejectIcon = document.querySelector(".sidebar-close"); 

  if (!burgerButtons.length || !sidebarModal || !rejectIcon) {
      console.error("Ошибка: Один из элементов не найден!");
      return;
  }

  // open window
  burgerButtons.forEach(button => {
      button.addEventListener("click", (event) => {
          event.preventDefault();
          sidebarModal.classList.toggle("sidebar-modal--active");
          event.stopPropagation();
      });
  });

//close window

  rejectIcon.addEventListener("click", () => {
      sidebarModal.classList.remove("sidebar-modal--active");
  });


  document.addEventListener("click", (event) => {
      if (!sidebarModal.contains(event.target) && !event.target.closest(".burgerButton")) {
          sidebarModal.classList.remove("sidebar-modal--active");
      }
  });


  sidebarModal.addEventListener("click", (event) => {
      event.stopPropagation();
  });
});



// call

document.addEventListener("DOMContentLoaded", function () {
  const callIcon = document.querySelector("#callIcon");
  const orderCall = document.querySelector(".order-call");
  const rejectIcon = document.querySelector(".call-close"); 

  if (!callIcon || !orderCall || !rejectIcon) {
    console.error("Ошибка: Один из элементов не найден!");
    return;
  }


  callIcon.addEventListener("click", (event) => {
    event.preventDefault();
    orderCall.classList.toggle("order-call--active"); 
  });


  document.addEventListener("click", (event) => {
    if (!event.target.closest(".order-call") && !event.target.closest("#callIcon")) {
      orderCall.classList.remove("order-call--active");
    }
  });


  rejectIcon.addEventListener("click", () => {
    orderCall.classList.remove("order-call--active");
  });
});


//chat

document.addEventListener("DOMContentLoaded", function () {
  const chatIcon = document.querySelector("#chatIcon");
  const chat = document.querySelector(".chat");
  const chatClose = document.querySelector(".chat-close"); // Кнопка закрытия

  if (!chatIcon || !chat || !chatClose) {
    console.error("Ошибка: Один из элементов не найден!");
    return;
  }

  chatIcon.addEventListener("click", (event) => {
    event.preventDefault();
    chat.classList.toggle("chat--active"); 
  });


  document.addEventListener("click", (event) => {
    if (!event.target.closest(".chat") && !event.target.closest("#chatIcon")) {
      chat.classList.remove("chat--active");
    }
  });


  chatClose.addEventListener("click", () => {
    chat.classList.remove("chat--active");
  });

  chat.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});







