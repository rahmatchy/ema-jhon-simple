import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce( (total, prdc) => total + prdc.price , 0);


    let shipping = 0;

    if (total > 35){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }


    const tax = total / 10;
    const grandTotal = (total + shipping + Number(tax)).toFixed(2);

    function formatNumber(num) {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    
    return (
        <div>
            <p>Items Ordered : {cart.length}</p>
            <p><small>Shipping : {shipping}</small></p>
            <p><small>tax : {formatNumber(tax)}</small></p>
            <p>Total Price : {grandTotal}</p>
        </div>
    );
};

export default Cart;