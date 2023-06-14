// Add Event on Element

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNav);

const slider = document.querySelector("[data-slider]");
const nextBtn = document.querySelector("[data-next]");
const prevBtn = document.querySelector("[data-prev]");

//set the slider default position
let sliderPos = 0;

// set the number of total slider items
const totalSliderItems = 5;

// make next slide btn workable
const slideToNext = function () {
  sliderPos++;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
};

addEventOnElem(nextBtn, "click", slideToNext);

// make prev slide btn workable
const slideToPrev = function () {
  sliderPos--;
  slider.style.transform = `translateX(-${sliderPos}00%)`;

  sliderEnd();
};

addEventOnElem(prevBtn, "click", slideToPrev);

// When slider is end.
function sliderEnd() {
  if (sliderPos >= totalSliderItems - 1) {
    nextBtn.classList.add("disabled");
  } else {
    nextBtn.classList.remove("disabled");
  }

  if (sliderPos <= 0) {
    prevBtn.classList.add("disabled");
  } else {
    prevBtn.classList.remove("disabled");
  }
}

sliderEnd();

// Product quantity functionality
const totalPriceElem = document.querySelector("[data-total-price]");
const qtyElem = document.querySelector("[data-qty]");
const qtyMinusBtn = document.querySelector("[data-qty-minus]");
const qtyPlusBtn = document.querySelector("[data-qty-plus]");

// default qty
let qty = 1;

// default price
let productPrice = 125;

// initial total price
let totalPrice = 125;

const increaseProductQty = function () {
  qty++;
  totalPrice = qty * productPrice;
  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
};

addEventOnElem(qtyPlusBtn, "click", increaseProductQty);

const decreaseProductQty = function () {
  if (qty > 1) qty--;
  totalPrice = qty * productPrice;
  qtyElem.textContent = qty;
  totalPriceElem.textContent = `$${totalPrice}.00`;
};

addEventOnElem(qtyMinusBtn, "click", decreaseProductQty);
