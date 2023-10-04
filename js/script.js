let serchForm = document.querySelector('.serch-form')
document.querySelector('#search-btn').onclick = () => {
    console.log("hi");
    serchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart')
document.querySelector('#cart-btn').onclick = () => {
    console.log("hi");
    shoppingCart.classList.toggle('active');
    serchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');
}
let loginForm = document.querySelector('.login-form')
document.querySelector('#profile-btn').onclick = () => {
    console.log("hi");
    loginForm.classList.toggle('active');
    serchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navBar.classList.remove('active');
}
let navBar = document.querySelector('.navbar')
document.querySelector('#menu-btn').onclick = () => {
    console.log("hi");
    navBar.classList.toggle('active');
    serchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');

}

window.onscroll = () => {
    serchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navBar.classList.remove('active');

}

// swiper

var swiper = new Swiper(".product-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredslides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,

        },
    },
});
var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredslides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,

        },
    },
});