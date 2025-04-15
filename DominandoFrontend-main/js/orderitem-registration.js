document.getElementById('orderItemForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const orderItemData = {
        orderId: document.getElementById('orderId').value,
        productId: document.getElementById('productId').value,
        quantity: document.getElementById('quantity').value,
        price: document.getElementById('price').value,
    };

    try {
        const response = await fetch('/http://localhost:8080/api/orderitems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderItemData),
        });

        if (response.ok) {
            alert('Order item registered successfully!');
            document.getElementById('orderItemForm').reset();
        } else {
            alert('Failed to register order item. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
