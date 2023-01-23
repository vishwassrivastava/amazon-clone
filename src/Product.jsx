import React from 'react';
import "./product.css";
import { useStateValue } from './Stateprovider';

function   Product  ({id,title,price,image,rating}) {

  const [{basket},dispatch]=useStateValue();

  console.log("this is a basket>>>",basket);


  const addToBasket=()=>{
    //dispatch the item to data layer
    dispatch({
    type: "ADD_TO_BASKET",
    item:  {
      id:id,
      title:title,
      image:image,
      price:price,
      rating: rating
    },
  });
  };


  return (
    <div className="product">
       <div className="product_Info">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
         {Array(rating)
         .fill()
         .map((_,i)=>(
          <p>*</p>
         ))}
        </div>
       </div>
       <img src={image} alt="#1"></img>
        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;
