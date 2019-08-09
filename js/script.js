var link = document.querySelector(".phone-link");
var popup = document.querySelector(".modal-phone");
var close = document.querySelector(".modal-close"); 
var form = popup.querySelector("phone-form");
// Слайдер
var slideIndex = 1;
showSlides(slideIndex);
autoSlider();
/* функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
/* авто прокрутка слайдера */
function autoSlider() {
var i;
var slides = document.getElementsByClassName("item");
var dots = document.getElementsByClassName("slider-dots_item");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideIndex++;
if (slideIndex> slides.length) {slideIndex = 1}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";
setTimeout(autoSlider, 3000); // Изменеие значения авто прокрутки в миллисекундах (ms), пример 6000 это 6 секунд
}
//слайдер

//маска для формы
window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ ____",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

//маска для формы


link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
});
            
close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt){
  if (evt.keyCode === 27) {
  evt.preventDefault();

  if (popup.classList.contains("modal-show")) { 
  popup.classList.remove("modal-show");
    }
  } 
});

let inp = document.querySelector('#user-phone');
  inp.addEventListener('focus', _ => {
  if(!/^\+7\d*$/.test(inp.value))
  inp.value = '+7';
 });

inp.addEventListener('keypress', e => {
  if(!/\d/.test(e.key))
  e.preventDefault();
});

