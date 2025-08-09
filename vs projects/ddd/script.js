const cart = {};

document.querySelectorAll('.buy').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.products');
        const productId = product.dataset.productId;
        const productName = product.dataset.productName;
        const productPrice = parseFloat(product.dataset.productPrice);
        const quantity = parseInt(product.querySelector('.quantity').value);

        if (cart[productId]) {
            cart[productId].quantity += quantity;
        } else {
            cart[productId] = {
                name: productName,
                price: productPrice,
                quantity: quantity
            };
        }

        updateCartDisplay();
    });
});

function updateCartDisplay() {
    const cartItemsList = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsList.innerHTML = '';

    let total = 0;
    for (const productId in cart) {
        const item = cart[productId];
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} x${item.quantity} - Ksh ${item.price * item.quantity}`;
        cartItemsList.appendChild(listItem);
        total += item.price * item.quantity;
    }

    cartTotalElement.textContent = total;
}