// Get elements
const shopLink = document.getElementById('shopLink');
const shopMenu = document.getElementById('shopMenu');
const phonesLink = document.getElementById('phonesLink');
const phoneBrands = document.getElementById('phoneBrands');

// Show the shop menu when the "Shop" navbar link is clicked
shopLink.addEventListener('click', () => {
  shopMenu.classList.toggle('active');
});

// Show phone brands when "Phones" is clicked
phonesLink.addEventListener('click', () => {
  phoneBrands.style.display = 'block';
  phoneBrands.classList.add('active');
});

// Optional: Close the menu when clicking outside of the shop menu
document.addEventListener('click', function (e) {
  if (!shopMenu.contains(e.target) && !shopLink.contains(e.target)) {
    shopMenu.classList.remove('active');
    phoneBrands.style.display = 'none'; // Hide phone brands when closing menu
  }
});
function addToCart(product) {
  console.log('Adding to cart:', product);
  cart.push(product);
  updateCart();
}
document.getElementById('cartIcon').onclick = function() {
  cartSidebar.style.display = 'block';
  updateCart();
};
function updateCart() {
  console.log('Cart contents:', cart);
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>No items in the cart</p>';
  } else {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      total += item.price;
    });
    console.log('Total Price:', total);
  }
}
// Initialize cart array
let cart = [];

// Get DOM elements
const cartCount = document.getElementById('cartCount');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const totalPrice = document.getElementById('totalPrice');

// Open Cart Sidebar
document.getElementById('cartIcon').onclick = function() {
  console.log('Cart Icon Clicked');
  cartSidebar.style.display = 'block';
  updateCart();
};

// Close Cart Sidebar
closeCart.onclick = function() {
  console.log('Closing Cart');
  cartSidebar.style.display = 'none';
};

// Add Product to Cart
function addToCart(product) {
  console.log('Adding to cart:', product);
  cart.push(product);
  updateCart();
}

// Update Cart Sidebar
function updateCart() {
  console.log('Updating cart...');
  console.log('Cart contents:', cart);
  if (cart.length === 0) {
    cartItems.innerHTML = '<p>No items in the cart</p>';
  } else {
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
      let cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.name} - $${item.price}</p>
        <button onclick="removeFromCart('${item.name}')">Remove</button>
      `;
      cartItems.appendChild(cartItem);
      total += item.price;
    });
    totalPrice.innerText = `$${total}`;
    cartCount.innerText = cart.length;
    console.log('Total Price:', total);
  }
}

// Remove Product from Cart
function removeFromCart(itemName) {
  console.log('Removing item:', itemName);
  cart = cart.filter(item => item.name !== itemName);
  updateCart();
}
// Handle newsletter form submission
document.getElementById('newsletterForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('newsletterEmail').value;
  alert(`Thank you for subscribing, ${email}!`);
  e.target.reset();
});
let lastScrollY = window.scrollY; // Track the last scroll position

// Select the navigation bar
const bottomNavBar = document.querySelector('.bottom-nav-bar');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY) {
    // Scrolling down: hide the navigation bar
    bottomNavBar.style.transform = 'translateY(100%)';
  } else {
    // Scrolling up: show the navigation bar
    bottomNavBar.style.transform = 'translateY(0)';
  }

  lastScrollY = currentScrollY;
});
function liveSearch() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  const products = document.querySelectorAll('.product-item');

  products.forEach(product => {
    const productName = product.querySelector('h3').textContent.toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}
function buyNow(productName, productPrice) {
  // Simulate a buy action by redirecting to a checkout page
  alert(`You selected to buy: ${productName} for $${productPrice}. Proceeding to checkout...`);

  // Redirect to a checkout page (replace with actual checkout logic)
  window.location.href = `checkout.html?product=${encodeURIComponent(productName)}&price=${productPrice}`;
}
