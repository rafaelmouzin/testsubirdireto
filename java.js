let cart = [];
let totalPrice = 0;

function addToCart(productId) {
    // Simulação de adicionar produto ao carrinho
    const product = {
        id: productId,
        name: `Produto ${productId}`,
        price: productId * 10 // Preço simulado
    };

    cart.push(product);
    totalPrice += product.price;

    updateCart();
}

function updateCart() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    cartItemsElement.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(li);
    });

    cartTotalElement.textContent = totalPrice.toFixed(2);
}

function checkout() {
    alert('Compra finalizada! Total: R$ ' + totalPrice.toFixed(2));
    cart = [];
    totalPrice = 0;
    updateCart();
}
