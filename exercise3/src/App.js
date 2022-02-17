import './App.css';
import ProductItem from './components/ProductItem';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';

function App() {

  const [products, setProducts] = useState(ProductList);
  const [searchProducts, setSearchProducts] = useState("");

  return (
    <div>
      <div className='searchBox'>
        <input type="text" placeholder="Search..." onChange={event => {setSearchProducts(event.target.value)}}/>
      </div>

      <div className='productContainer'>
     
      { products.filter(val=>{
        if (searchProducts === ""){
         return val;
        } else if(
          val.title.toLowerCase().includes(searchProducts.toLowerCase())
        ){
          return val;
 
        }
        }).map(p => <ProductItem image={p.thumbnail} name={p.title} rating={p.rating} price={p.price}/>)}
      </div>
    </div>
  );
}

export default App;
