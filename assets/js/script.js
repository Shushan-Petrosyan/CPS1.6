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

// read more phone

document.addEventListener("DOMContentLoaded", function () {
  const buttonMobile = document.getElementById("button-moreMobile");
  const extraTextMobile = document.getElementById("extra-textMobile");
  const buttonTextMobile = document.getElementById("button-textMobile");

  buttonMobile.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (extraTextMobile.classList.contains("hiddenaboutMobile")) {
      extraTextMobile.classList.remove("hiddenaboutMobile");
      buttonTextMobile.textContent = "Скрыть";
    } else {
      extraTextMobile.classList.add("hiddenaboutMobile");
      buttonTextMobile.textContent = "Читать далее";
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
  slidesPerView: 'auto', 
  spaceBetween: 20, 
  loop: true, 
  pagination: {
     el: '.swiper-pagination',
     clickable: true,
  },
})
new Swiper('.image-slider__remont', {
  slidesPerView: 'auto', 
  spaceBetween: 20, 
  loop: true, 
  pagination: {
     el: '.swiper-pagination',
     clickable: true,
  },


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

document.addEventListener("DOMContentLoaded", function () {

  const callIcon = document.querySelector("#callIcon");
  const callIconModal = document.querySelector("#callIconModal");
  const orderCall = document.querySelector(".order-call");
  const rejectIcon = document.querySelector(".call-close");
  const sendButton = document.querySelector(".order-call__send");

  if (orderCall && rejectIcon) {
    function toggleCall() {
      orderCall.classList.toggle("order-call--active");
    }

    function closeCall() {
      orderCall.classList.remove("order-call--active");
    }

    if (callIcon) callIcon.addEventListener("click", toggleCall);
    if (callIconModal) callIconModal.addEventListener("click", toggleCall);
    rejectIcon.addEventListener("click", closeCall);
    sendButton.addEventListener("click", () => {
      console.log("Данные отправлены!");
      closeCall();
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".order-call") && 
          !event.target.closest("#callIcon") && 
          !event.target.closest("#callIconModal")) {
        closeCall();
      }
    });
  } else {
    console.error("Ошибка: Не найдены элементы для Call!");
  }

  //call chat call-phone chat-phone

  const chatIcon = document.querySelector("#chatIcon");
  const chatIconModal = document.querySelector("#chatIconModal");
  const chatWindow = document.querySelector(".chat");
  const chatCloseIcon = document.querySelector(".chat-close");
  const chatSendButton = document.querySelector(".chat-send");

  if (chatWindow && chatCloseIcon) {
    function toggleChat() {
      chatWindow.classList.toggle("chat--active");
    }

    function closeChat() {
      chatWindow.classList.remove("chat--active");
    }

    if (chatIcon) chatIcon.addEventListener("click", toggleChat);
    if (chatIconModal) chatIconModal.addEventListener("click", toggleChat);
    chatCloseIcon.addEventListener("click", closeChat);
    chatSendButton.addEventListener("click", () => {
      console.log("Сообщение отправлено!");
      closeChat();
    });

    document.addEventListener("click", (event) => {
      if (!event.target.closest(".chat") &&
          !event.target.closest("#chatIcon") &&
          !event.target.closest("#chatIconModal")) {
        closeChat();
      }
    });
  } else {
    console.error("Ошибка: Не найдены элементы для Chat!");
  }
});




