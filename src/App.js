import React,{useState} from 'react';
import Cart from './components/cart';
import Product from './components/product';
import data from './data.json';

function App() {
  const [pdata, setpdata] = useState(data);
  const [cart, setcart] = useState([]);
  const hndlBtn = ((pdata)=> {
    const newCart = [...cart,pdata];
    setcart(newCart);
  })
  return (
    <div>
      <div className="hd">
        <h1>Welcome to our online shop</h1>
      </div>
      <div className="main2">
        <div className="pdct">
          {
            pdata.map((pdata,index)=> <Product key={index} pdata={pdata} handleButton={hndlBtn}/>)
          }
        </div>
        <div className="crt">
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
