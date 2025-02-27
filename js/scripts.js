const iconContainer = document.querySelector("#menu");
const closeButton = document.querySelector("#close");
const blurSection = document.querySelector("#blur-section");
const blurSectionModal = document.querySelector("#blur-section-modal");
const menuContainer = document.querySelector(".menu-container");
const modalsContainer = document.querySelector("#modals-container");
const modalsContainerPhone = document.querySelector("#modals-container-phone");
const closeModalButton = document.querySelector("#close-modal");
const sendMail = document.querySelector(".send-mail");
const readMore = document.querySelector("#read-more");
const showMoreText = document.querySelector(".show-more-text");
const showAllBrands = document.querySelector("#show-all-brands");
const brands = document.querySelector(".brands");
const showBrandText = document.querySelector("#show-brand-text");
const showAllComponents = document.querySelector("#show-all-components");
const components = document.querySelector(".components");
const showComponentsText = document.querySelector("#show-components-text");
const servicesSlider = document.querySelector(".services-slider");

function openMenu() {
  menuContainer.style.left = "0px";
  blurSection.style.display = "block";
}

function closeMenu() {
  const menuWidth = menuContainer.offsetWidth + 52;
  menuContainer.style.left = `-${menuWidth}px`;
  blurSection.style.display = "none";
}

function onSendMailClick() {
  modalsContainer.style.right = "0px";
  blurSectionModal.style.display = "block";
    const menuWidth = menuContainer.offsetWidth + 52;
    menuContainer.style.left = `-${menuWidth}px`;
}

function onPhoneClick() {
  modalsContainerPhone.style.right = "0px";
  blurSectionModal.style.display = "block";
    const menuWidth = menuContainer.offsetWidth + 52;
    menuContainer.style.left = `-${menuWidth}px`;
}

function closeModals() {
  const modalsWidth = modalsContainer.offsetWidth;
  modalsContainer.style.right = `-${modalsWidth + 72}px`;
  modalsContainerPhone.style.right = `-${modalsWidth + 72}px`;
  blurSectionModal.style.display = "none";
  blurSection.style.display = "none";
}

readMore.addEventListener("click", () => {
  showMoreText.style.display = "block";
  readMore.style.display = "none";
});

showAllBrands.addEventListener("click", () => {
  if (brands.style.height === "100%") {
    brands.style.height = "180px";
    showBrandText.textContent = "Показать все";
  } else {
    brands.style.height = "100%";
    showBrandText.textContent = "Скрыть";
  }
});

showAllComponents.addEventListener("click", () => {
  if (components.style.height === "100%") {
    components.style.height = "180px";
    showComponentsText.textContent = "Показать все";
  } else {
    components.style.height = "100%";
    showComponentsText.textContent = "Скрыть";
  }
});

const dots = document.querySelectorAll(".dots-item");
const dotsSecond = document.querySelectorAll(".dots-item-second");
const dotsThird = document.querySelectorAll(".dots-item-third");
const brandsItemWidth = 256;
let currentIndex = 0;


document.addEventListener("DOMContentLoaded", function () {
    new Swiper(".swiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        loop: false,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
});

function updateDotsOnScroll(container, dots, className) {
  const scrollLeft = container.scrollLeft;
  const newIndex = Math.round(scrollLeft / brandsItemWidth);
  if (newIndex !== currentIndex) {
    currentIndex = newIndex;
    updateDots(dots, className);
  }
}

function updateDots(dots, className) {
  dots.forEach((dot, index) => {
    dot.classList.toggle(className, index === currentIndex);
  });
}

brands.addEventListener("scroll", function () {
  updateDotsOnScroll(brands, dots, "dots-item-active");
});

components.addEventListener("scroll", function () {
  updateDotsOnScroll(components, dotsSecond, "dots-item-active-second");
});

servicesSlider.addEventListener("scroll", function () {
  updateDotsOnScroll(servicesSlider, dotsThird, "dots-item-active-third");
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    brands.scrollTo({ left: 256 * index, behavior: "smooth" });
    updateDots(dots);
  });
});

dotsSecond.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    components.scrollTo({ left: 256 * index, behavior: "smooth" });
    updateDots(dotsSecond);
  });
});

dotsThird.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index;
    servicesSlider.scrollTo({ left: 256 * index, behavior: "smooth" });
    updateDots(dotsThird);
  });
});

const navigation = document.querySelectorAll(".navigation li");
navigation.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".selected")?.classList.remove("selected");
    item.classList.add("selected");
  });
});

const nav = document.querySelectorAll(".nav li");
nav.forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelector(".nav-item-selected")
      ?.classList.remove("nav-item-selected");
    item.classList.add("nav-item-selected");
  });
});
