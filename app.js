// SECTION VARIABLES

const flavors = [{
  name: 'Cookie Dough',
  image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
  price: 1
}, {
  name: 'Vanilla',
  image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
  price: 1
}, {
  name: 'Strawberry',
  image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
  price: 2
}]

const toppings = [{
  name: 'Sprinkles',
  image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
  price: 1
}, {
  name: 'Chocolate Chips',
  image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
  price: 2
}]

const containers = [{
  name: 'Waffle Cone',
  image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
  price: 2
}, {
  name: 'Waffle Bowl',
  image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
  price: 4
}]

let cart = []



// SECTION DRAW FUNCTIONS

function drawFlavors(){
  let storeElem = document.getElementById('flavors-cards')
  let template = ''

  for (let i = 0; i < flavors.length; i++) {
    const product = flavors[i];
    template += `<div class="col-md-6 col-lg-4 my-3">
    <div class="card product-card">
      <img class="store-card-img rounded-top"
        src="${product.image}"
        alt="${product.name}">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <p><b>${product.name}</b></p>
          <p>$${product.price}</p>
        </div>
        <div class="add-item-btn d-flex justify-content-center align-items-center">
          <button class="btn btn-outline-dark mdi mdi-cart d-flex align-items-center" title="Add to cart"
            onclick="addItemToCart('sku')"><small>ADD</small></button>
        </div>
      </div>
    </div>
  </div>
  `
  }
  storeElem.innerHTML = template
}

function drawToppings(){
  let storeElem = document.getElementById('toppings-cards')
  let template = ''

  for (let i = 0; i < toppings.length; i++) {
    const product = toppings[i];
    template += `<div class="col-md-6 col-lg-4 my-3">
    <div class="card product-card">
      <img class="store-card-img rounded-top"
        src="${product.image}"
        alt="${product.name}">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <p><b>${product.name}</b></p>
          <p>$${product.price}</p>
        </div>
        <div class="add-item-btn d-flex justify-content-center align-items-center">
          <button class="btn btn-outline-dark mdi mdi-cart d-flex align-items-center" title="Add to cart"
            onclick="addItemToCart('sku')"><small>ADD</small></button>
        </div>
      </div>
    </div>
  </div>
  `
  }
storeElem.innerHTML = template
}
function drawContainers(){
  let storeElem = document.getElementById('containers-cards')
  let template = ''

  for (let i = 0; i < containers.length; i++) {
    const product = containers[i];
    template += `<div class="col-md-6 col-lg-4 my-3">
    <div class="card product-card">
      <img class="store-card-img rounded-top"
        src="${product.image}"
        alt="${product.name}">
      <div class="card-body">
        <div class="d-flex align-items-center justify-content-between">
          <p><b>${product.name}</b></p>
          <p>$${product.price}</p>
        </div>
        <div class="add-item-btn d-flex justify-content-center align-items-center">
          <button class="btn btn-outline-dark mdi mdi-cart d-flex align-items-center" title="Add to cart"
            onclick="addItemToCart('sku')"><small>ADD</small></button>
        </div>
      </div>
    </div>
  </div>
  `
  }
storeElem.innerHTML = template
}

function drawStore(){
  drawFlavors()
  drawToppings()
  drawContainers()
}



// SECTION ADD, REMOVE, TOTAL


// SECTION INITIALIZERS

drawStore()