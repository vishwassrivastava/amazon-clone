import React from 'react';
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
    <div className="home_container">
        <img className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/WRS_June/GW/Heros/WRS-GW-PC-Bunk._CB635369647_.jpg" alt="#2"></img>
    
    <div className="home_row">
        <Product 
         id="12321341"
         title="The Monk Who Sold His Ferrari:BestSeller written By Indian Author Depicting the life of An advocate who later converted to monk"
         price={29.99}
         rating={5}
         image="https://images-eu.ssl-images-amazon.com/images/I/410BqHSamiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        ></Product>
        <Product 
        id="49538094"
        title="Kenwood kmix Stand Mixer for Baking,Stylish
        Kitchen Mixer with K-beater,Dough Hook and whisk,5 Litre
        Glass Bowl"
        price={239.0}
        rating={4}
        image="https://m.media-amazon.com/images/I/51y8XGTdDQL._SX425_.jpg">
        </Product>
        
        
    </div>
    <div className="home_row">
        <Product
        id="4903850"
        title="Samsung Galaxy 4LTE"
        price={199.99}
        rating={5} 
        image="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$1300_1038_PNG$"></Product>
        <Product
        id="23445930"
        title="Amazon Echo (3rd Generation)| Smart speaker with Alexa,Charcoal Fabric"
        price={98.99}
        rating={5} 
        image="data:image/jpeg;base64,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"
        ></Product>
        <Product
        id="3254354345"
        title="New Apple iPaf Pro (12,9 -inch,Wi-fi,128GB)-Silver(4th Generation)"
        price={598.23}
        rating={4}
        image="https://images-eu.ssl-images-amazon.com/images/I/41viAWscfNS._SY445_SX342_QL70_FMwebp_.jpg"></Product>

        
    </div>
    <div className="home_row">
    <Product
    id="90829332"

    title="Samsung LC49RG90SSUXEN 49' CURVED LED Gaming Monitor -Duper Ultra Wide
    Dual WOHD 5120 x 1440"
    price={1094.98}
    rating={4}
    image="https://m.media-amazon.com/images/I/7160TtJzTWL._SL1500_.jpg"></Product>
    </div>
    </div>
    </div>
  );
}

export default Home;