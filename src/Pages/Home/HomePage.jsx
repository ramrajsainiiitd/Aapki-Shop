import React, { useContext, useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Axios from "axios";
import { MyContext } from "../../Context/Context";

export default function HomePage() {
  const[ProductDetails, setProductDetails] = useContext(MyContext);
  const data = Object.values(ProductDetails);

  return (
    <>
      <div className="container mt-5 pt-3" >
        <div className="row row-cols-4 pt-4">
        {
          data.map((product, index)=>(
          <div key={product.id} className="px-2" style={{marginLeft:'0px'}}>
           <Card 
            id = {product.id}
            title = {product.title}
            price = {product.price}
            description = {product.description}
            category = {product.category}
            image = {product.image}
            rating = {product.rating.rate}
            count = {product.rating.count}
            />
            </div>
          ))
        }
        </div>
      </div>
    </>
  );
}
