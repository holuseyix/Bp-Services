document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission behavior
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Log the data (you can replace this with actual API calls or backend integration)
    console.log('Form Submitted:', { name, email, message });
  
    // Clear the form and show a success message
    alert('Thank you for reaching out! We will get back to you soon.');
    e.target.reset();
  });
  function proceedToPayment() {
    const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
  
    // Map payment methods to their respective pages
    const paymentPages = {
      "Bank Transfer": "bank-transfer.html",
      "Credit/Debit Card": "credit-card.html",
      "Wallet": "wallet.html",
      "Cash on Delivery": "cash-on-delivery.html"
    };
  
    const redirectPage = paymentPages[selectedPaymentMethod];
    if (redirectPage) {
      alert(`You selected ${selectedPaymentMethod}. Redirecting to the payment page...`);
      window.location.href = `${redirectPage}?product=${encodeURIComponent(productName)}&price=${productPrice}`;
    } else {
      alert("Invalid payment method selected.");
    }
  }
 // Get product details from the URL
 const urlParams = new URLSearchParams(window.location.search);
 const productName = urlParams.get('product');
 const productPrice = urlParams.get('price');

 // Display product details
 document.getElementById('product-name').textContent = `Product: ${productName}`;
 document.getElementById('product-price').textContent = `Price: $${productPrice}`;

 // Handle purchase confirmation
 function confirmPurchase() {
   const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
   alert(`You selected ${selectedPaymentMethod}. Purchase confirmed!`);
   // Redirect to a thank you or homepage
   window.location.href = 'index.html';
 }
 function proceedToPayment() {
  // Get selected payment method
  const selectedPaymentMethod = document.querySelector('input[name="payment-method"]:checked')?.value;

  if (!selectedPaymentMethod) {
    alert("Please select a payment method.");
    return;
  }

  // Map payment methods to respective pages
  const paymentPages = {
    "Bank Transfer": "bank-transfer.html",
    "Credit/Debit Card": "credit-card.html",
    "Wallet": "wallet.html",
    "Cash on Delivery": "cash-on-delivery.html"
  };

  // Get the page URL based on the selected method
  const redirectPage = paymentPages[selectedPaymentMethod];

  if (redirectPage) {
    // Append product details to the URL
    const productName = new URLSearchParams(window.location.search).get('product');
    const productPrice = new URLSearchParams(window.location.search).get('price');
    const queryString = `?product=${encodeURIComponent(productName)}&price=${encodeURIComponent(productPrice)}`;

    // Redirect to the selected payment page
    window.location.href = `${redirectPage}${queryString}`;
  } else {
    alert("Invalid payment method selected.");
  }
}

fetch('https://example.com/api/orders', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    shippingDetails: shippingDetails,
    productDetails: {
      product: 'Tecno Spark 8',
      price: '120'
    }
  })
}).then(response => response.json())
  .then(data => console.log('Order placed:', data))
  .catch(error => console.error('Error:', error));
  async function validateAddress(address) {
    const apiKey = "YOUR_GOOGLE_MAPS_API_KEY";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.status === "OK") {
        const formattedAddress = data.results[0].formatted_address;
        alert(`Address validated successfully: ${formattedAddress}`);
        return true;
      } else {
        alert("Invalid address. Please check and try again.");
        return false;
      }
    } catch (error) {
      console.error("Error validating address:", error);
      alert("An error occurred while validating the address.");
      return false;
    }
  }
  
  // Example usage
  const addressInput = document.getElementById("address");
  addressInput.addEventListener("blur", () => {
    validateAddress(addressInput.value);
  });
  const shippingDetails = JSON.parse(localStorage.getItem('shippingDetails'));
  const orderDetails = {
    product: "iphone 14 pro",
    price: "$999",
  };
  
  async function submitOrder() {
    try {
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ shippingDetails, orderDetails }),
      });
  
      if (response.ok) {
        const result = await response.json();
        alert(`Order placed successfully! Order ID: ${result.orderId}`);
      } else {
        alert('Failed to submit the order. Please try again.');
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert('An error occurred. Please try again.');
    }
  }
  
  // Call this function on form submission or checkout
  submitOrder();
    