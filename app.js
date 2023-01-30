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
  let flavorsElem = document.getElementById('flavors-cards')
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
            onclick="addFlavorToCart('${product.name}')"><small>ADD</small></button>
        </div>
      </div>
    </div>
  </div>
  `
  }
  flavorsElem.innerHTML = template
}

function drawToppings(){
  let toppingsElem = document.getElementById('toppings-cards')
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
            onclick="addToppingsToCart('${product.name}')"><small>ADD</small></button>
        </div>
      </div>
    </div>
  </div>
  `
  }
toppingsElem.innerHTML = template
}
function drawContainers(){
  let containersElem = document.getElementById('containers-cards')
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
            onclick="addContainersToCart('${product.name}')"><small>ADD</small></button>
        </div>
      </div>
    </div>
  </div>
  `
  }
containersElem.innerHTML = template
}

function drawStore(){
  drawFlavors()
  drawToppings()
  drawContainers()
}

function drawCart(){
  let cartElem = document.getElementById('cart')
  let cartTotalElem = document.getElementById('cart-total')
  let template = ''

  cart.forEach(product => {
    template += `<div>${product.name} - ${product.quantity}</div>
    `
  })
  cartElem.innerHTML = template
}



// SECTION ADD, REMOVE, TOTAL

function addFlavorToCart(name){
  let addFlavor = flavors.find(p => p.name == name)
  let productFoundInCart = cart.find(p => p.name == name)

  if(productFoundInCart){
    productFoundInCart.quantity++
  }else{
    cart.push({
      name: addFlavor.name,
      price: addFlavor.price,
      img: addFlavor.image,
      quantity: 1
    })
  }
  drawCart()
}
function addToppingsToCart(name){
  let addToppings = toppings.find(p => p.name == name)
  let productFoundInCart = cart.find(p => p.name == name)

  if(productFoundInCart){
    productFoundInCart.quantity++
  }else{
    cart.push({
      name: addToppings.name,
      price: addToppings.price,
      img: addToppings.image,
      quantity: 1
    })
  }
  drawCart()
}
function addContainersToCart(name){
  let addContainers = containers.find(p => p.name == name)
  let productFoundInCart = cart.find(p => p.name == name)

  if(productFoundInCart){
    productFoundInCart.quantity++
  }else{
    cart.push({
      name: addContainers.name,
      price: addContainers.price,
      img: addContainers.image,
      quantity: 1
    })
  }
  drawCart()
}


// TODO
// function addToCart (){
//   addFlavorToCart()
//   addToppingsToCart()
//   addContainersToCart()
//   drawCart()
// }





// function addItemToCart(name){
//   let addFlavor = flavors.find(p => p.name == name)
//   let addToppings = toppings.find(p => p.name == name)
//   let addContainers = containers.find(p => p.name == name)

//   let productFoundInCart = cart.find(p => p.name == name)

//   if(productFoundInCart){
//     productFoundInCart.quantity++
//   }else{
//     cart.push({
//       name: addFlavor.name,
//       price: addFlavor.price,
//       img: addFlavor.image,
//       quantity: 1
//     })
//   }else{
//     cart.push({
//       name: addToppings.name,
//       price: addToppings.price,
//       img: addToppings.image,
//       quantity: 1
//     })
//   }else{
//     cart.push({
//       name: addContainers.name,
//       price: addContainers.price,
//       img: addContainers.image,
//       quantity: 1
//     })
//   }
//   drawCart()
// }

// SECTION INITIALIZERS

drawStore()