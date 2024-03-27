
import React from 'react';
import { useState,useRef,useEffect } from 'react';
import { useCart } from './cartContext';

function Home(){
    const [selectedCounts, setSelectedCounts] = useState(1);
    const { addToCart } = useCart();
    const inputElement = useRef(null);
    const [products,setData]=useState([])
  
  
    useEffect(()=>{

      fetch("http://localhost:8000/products").then((res)=>res.json()).then((data)=>{
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
    }, []);
    
    useEffect(() => {
      inputElement.current?.focus();
    }, []);
  
  
    const handleSelectChange = (e) => {
      const counts = e.target.value;
      setSelectedCounts(counts);
    };
  
    return (
      <div className="container mt-5">
        <h2 className="mb-4">Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: {product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
          }
export default Home;
