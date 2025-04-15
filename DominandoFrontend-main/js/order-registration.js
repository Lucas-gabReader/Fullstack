document.getElementById('orderForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const orderData = {
        orderId: document.getElementById('orderId').value,
        customerName: document.getElementById('customerName').value,
        product: document.getElementById('product').value,
        quantity: document.getElementById('quantity').value,
    };

    try {
        const response = await fetch('http://localhost:8080/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });

        if (response.ok) {
            alert('Order registered successfully!');
            document.getElementById('orderForm').reset();
        } else {
            alert('Failed to register order. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
});
