import React from 'react'

export default function cart(props) {
    const cart = props.cart;
    let sum = cart.reduce((x, y) => {
        return x + parseInt(y.Price);
    }, 0);
    let tax = sum/20;
    const ordered = ()=>{
        alert("Item orderd");
    }
    return (
        <div className="cart">
            <h1>CART</h1>
            <h2>Total items : <span className="pc">{cart.length}</span> </h2>
            <h4>Price : {sum} </h4>
            <h4>Tax : {tax}</h4><p>--With 5% Vat--</p>
            <h2>Total Price : <span className="pc">{sum + tax}</span></h2>
            <button className="btn" onClick={()=>(ordered())}>Order Now</button>
        </div>
    )
}
