const productArray = [];

function display(products){
    let totalPrice = 0;
    let count = 0;
    const cartBody = document.getElementById('add-cart-product');
    cartBody.innerText = '';
    for(const product of products){
        const name = product.productName;
        const price = product.productPrice;
        totalPrice += price;
        count++;

        const tr1 = document.createElement('tr');
        tr1.innerHTML = `
            <th>${count}</th>
            <th>${name}</th>
            <th>${price}</th>
        `
        cartBody.appendChild(tr1);
    }
    const tr2 = document.createElement('tr');
    tr2.innerHTML = `
    <th>Total Selected: ${count}</th>
    <th>Total Price</th>
    <th>${totalPrice}</th>
    `
    cartBody.appendChild(tr2);
}

function addToCart(clickBtn){
    const productName = clickBtn.parentElement.parentElement.children[0].innerText;
    const productPrice = clickBtn.parentElement.parentElement.children[1].children[0].innerText;

    const productObject = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    productArray.push(productObject);
    const totalProductCounter = document.getElementById('total-added-product');
    totalProductCounter.innerText = productArray.length;
    display(productArray);
}