'use strict';
let fitlerPopup = document.querySelector('.filterPopup');
let fitlerLabel = document.querySelector('.filterLabel');
let filterIcon = document.querySelector('.filterIcon');
let cart = {}

let cartProducts = document.querySelector('.cartProducts')
let addToCart = document.querySelectorAll('button')
addToCart.forEach(function (cartPosition) {
    cartPosition.addEventListener('click', buttonClicker)
})

function buttonClicker(event) {
    cartProducts.style.visibility = 'visible'
    if (!(event.target.parentNode.parentNode.parentNode.querySelector('.featuredName').innerHTML in cart)) {
        cart[event.target.parentNode.parentNode.parentNode.querySelector('.featuredName').innerHTML] =
            Number(event.target.parentNode.parentNode.parentNode.querySelector('.featuredPrice').innerHTML.substring(1,))
    } else {
        cart[event.target.parentNode.parentNode.parentNode.querySelector('.featuredName').innerHTML] =
            Number(event.target.parentNode.parentNode.parentNode.querySelector('.featuredPrice').innerHTML.substring(1,))
            + cart[event.target.parentNode.parentNode.parentNode.querySelector('.featuredName').innerHTML]
    }
    ++cartProducts.innerHTML
}

let cartTable = document.querySelector('.cartTable')
let cartIcon = document.querySelector('.cartIcon')
cartIcon.addEventListener('mouseover', cartTableShow)
function cartTableShow() {
    cartTable.style.visibility = 'visible'
    for (let [key, value] of Object.entries(cart)) {
        cartTable.innerHTML = cartTable.innerHTML + `${key}: $${value}<br>`
    }
}
cartIcon.addEventListener('mouseout', cartTableHide)
function cartTableHide() {
    cartTable.innerHTML = ''
    cartTable.style.visibility = 'hidden'
}
let featuredNames = document.querySelectorAll('.featuredName')
for (let i = 1; i < 7; ++i) {
    featuredNames[i - 1].innerHTML = `PRODUCT ${i}`
}

let featuredPrices = document.querySelectorAll('.featuredPrice')
featuredPrices.forEach(function (prices) {
    prices.innerHTML = `$${Math.round((Math.random() * 1000) * 100) / 100}`
})


fitlerLabel.addEventListener('click', function () {
    fitlerPopup.classList.toggle('hidden');
    fitlerLabel.classList.toggle('filterLabelPink');
    filterIcon.classList.toggle('filterIconPink');

    if (filterIcon.getAttribute('src') === 'images/filter.svg') {
        filterIcon.setAttribute('src', 'images/filterHover.svg')
    } else {
        filterIcon.setAttribute('src', 'images/filter.svg')
    }
});

let filterHeaders = document.querySelectorAll('.filterCategoryHeader');
filterHeaders.forEach(function (header) {
    header.addEventListener('click', function (event) {
        event.target.nextElementSibling.classList.toggle('hidden');
    })
});

let filterSizes = document.querySelector('.filterSizes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
filterSizeWrap.addEventListener('click', function () {
    filterSizes.classList.toggle('hidden');
});