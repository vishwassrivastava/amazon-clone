import React from 'react';
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./Stateprovider";
import {getBasketTotal} from "./reducer";


function Subtotal () {

  const[{basket},dispatch]=useStateValue();

  return (
    <div className="subtotal">
       <CurrencyFormat              //what to show in the screen
       renderText={(value)=>(
        <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{value}</strong>
              </p>
              <small className="subtotal_gift">
                <input type="checkbox" />This order
                contains a gift

              </small>

        </>
       )}
       decimalScale={2}            //how many decimals to show
       value={getBasketTotal(basket)}                  //prices of item to show

       displayType={"text"}        //prices to show in text
       thousandSeperator={true}   //having a thousand seperator
       prefix={"$"}
       />

       <button>Proceed to checkout</button>
    </div>
  );
       }


export default Subtotal;
