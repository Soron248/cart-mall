import React from 'react';

export default function Product(props) {
    const {pdata,handleButton} = props;
    return (
        <div className="pdiv">
            <div className="pimg">
                <img src={pdata.Image} />
            </div>
            <div className="pd">
            <h2>Products name : {pdata.ProductName}</h2>
            <h3>Price : <span className="pc">{pdata.Price}</span></h3>
            <h4>Brand : <span className="pb">{pdata.Brand}</span></h4>
            <button className="btn" onClick={ ()=>( handleButton(props.pdata) ) }>Add to cart</button>
            </div>
        </div>
    )
}