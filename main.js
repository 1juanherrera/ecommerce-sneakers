// Cambio de cantidad de articulos ingresado por el usuario...

let minusBtn= document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', () => {
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
})

minusBtn.addEventListener('click', () => {
    userInputNumber--;
    if(userInputNumber <= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
})

// Agregar el total de productos al carrito cuando se presiona el boton  de ADD TO CART...


const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
lastValue = Number(cartNotification.innerText);

addToCartBtn.addEventListener('click', () => {
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductModal()
});

// Mostrar en el carrito si esta vacio o no...

const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
// let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');


cartIconBtn.addEventListener('click', () => {
    cartModal.classList.toggle('show');

    if(lastValue == 0){
        productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
    }else {
        drawProductModal();
    }
});


// Borrar contenido de carrito...
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');


    deleteProductBtn.addEventListener('click', () => {
    productContainer.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
    lastValue = 0;
    cartNotification.innerText = lastValue;
});

}


// Cambiar imagenes cuando se presionen los botones flecha...
const imageContainer = document.querySelector('.gallery__image-container');
const previuosGalleryBtn = document.querySelector('.gallery__previous');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imgIndex = 1;

nextGalleryBtn.addEventListener('click', () =>{
    changeNextImage(imageContainer);
})

previuosGalleryBtn.addEventListener('click', () => {
    changePreviousImage(imageContainer)
})

// Mostrar el modal de imagenes cuando hago click en la imagen principal...
const imagesModal = document.querySelector('.modal-gallery__background')
const closeModalBtn = document.querySelector('.modal-gallery__close')

imageContainer.addEventListener('click', () => {
    imagesModal.style.display = 'grid';
})

closeModalBtn.addEventListener('click', () => {
    imagesModal.style.display = 'none'
})

// Cambiar las imagenes principales desde thumbnails...

let thumbnails = document.querySelectorAll('.gallery__thumbnail')
thumbnails = [...thumbnails] 
console.log(thumbnails)


thumbnails.forEach(thumbnails => {
    thumbnails.addEventListener('click', event => {
        imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
    })
})


// Cambiar las imagenes principales desde los thumbnails en el MODAL...

let modalThumbnails = document.querySelectorAll('.modal-gallery__thumbnail')
modalThumbnails = [...modalThumbnails]
const modalImageContainer = document.querySelector('.modal-gallery__image-container');


modalThumbnails.forEach(modalThumbnails =>{
    modalThumbnails.addEventListener('click', event =>{
        modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
    })
})


// Cambiar imagen principal de modal desde flechas en el modal...

const previousModalBtn = document.querySelector('.modal-gallery__previous');
const NextModalBtn = document.querySelector('.modal-gallery__next');

previousModalBtn.addEventListener('click', () =>{
    changeNextImage(modalImageContainer);
})

NextModalBtn.addEventListener('click', () => {
    changePreviousImage(modalImageContainer)
})



// FUNCIONES 

function drawProductModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
            <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125 x3 <span>$375.00</span></p>
            </div>
        <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
    </div>
        <button class="cart-modal__checkout">Checkout</button>`
        deleteProduct();
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`
     
}

function changeNextImage(imageContainer){
    if(imgIndex == 4){
        imgIndex = 1;
    }else {
        imgIndex++;
    }
    imgIndex++;
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}

function changePreviousImage(imageContainer){
    if(imgIndex == 1){
        imgIndex = 4;
    }else {
        imgIndex--;
    }
    imageContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`;
}