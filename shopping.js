 cartArray = [];
 function display(cartProducts){
     
     const tableBody = document.getElementById('add-cart-product');
     tableBody.innerHTML = '';
     
     let count1 = 0;
     let count2 = 0;
     let totalPrice = 0;
    for(const cartProduct of cartProducts){
        count1 ++;
        count2 += 1;
        const name = cartProduct.productName;
        const price = cartProduct.productPrice;
        totalPrice += price;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <th>${count1}</th>
            <th>${name}</th>
            <th>${price}</th>
        `
        tableBody.appendChild(tr);
    }
    const tr2 = document.createElement('tr')
    tr2.innerHTML = `
        <th>Total Item: ${count2}</th>
        <th>Total Price</th>
        <th>${totalPrice}</th>
    `
    tableBody.appendChild(tr2)

 }

 function addToCart(elementButton){

    const productName = elementButton.parentNode.parentNode.children[0].innerText;
    const productPrice = elementButton.parentNode.parentNode.children[1].children[0].innerText;

    const productObject = {
        productName: productName,
        productPrice: parseFloat(productPrice)
    }
    cartArray.push(productObject);

    const totaProductElement = document.getElementById('total-added-product');
    totaProductElement.innerText = cartArray.length;
    
    display(cartArray);
 }