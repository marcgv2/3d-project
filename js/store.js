
document.addEventListener('DOMContentLoaded', function() {

  const specificButton = document.getElementById('button');
  const productButtons = document.querySelectorAll('.product-button');
  
  function handleButtonClick(event) {
      // Prevent default behavior if needed
      // event.preventDefault();
      
      // Get the product card that contains this button
      const productCard = event.target.closest('.product-card');
      
      // Get product details
      const productTitle = productCard.querySelector('.product-title').textContent;
      const productPrice = productCard.querySelector('.product-price').textContent;
      
      // Do something with the product (example: add to cart)
      console.log(`Added to cart: ${productTitle} - ${productPrice}`);
      
      // You could also show a confirmation to the user
      alert(`S'ha afegit a la cistella: ${productTitle} - ${productPrice}`);
      
      // Here you would typically:
      // 1. Add the product to a shopping cart array/object
      // 2. Update the UI to show the cart has items
      // 3. Maybe store the cart in localStorage
  }
  
  // Add event listener to the specific button (if it exists)
  if (specificButton) {
      specificButton.addEventListener('click', handleButtonClick);
  }
  
  // Add event listeners to all product buttons
  productButtons.forEach(button => {
      // Skip if this is the specific button we already added a listener to
      if (button !== specificButton) {
          button.addEventListener('click', handleButtonClick);
      }
  });
});