import React, { useContext, useState } from "react";
import { MyContext } from "../../Context/Context";
import CartCard from "../Card/CartCard";
import { Link } from "react-router-dom";

export default function Cart() {
  const { ProductDetails, setProductDetails } = useContext(MyContext);
  const { CartItem, setCartItem } = useContext(MyContext);
  const { CounItem, setCountItem } = useContext(MyContext);
  console.log(CartItem);

  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        {CartItem.length != 0 ? (
          <div>
            {CartItem.map((product, index) => (
              <div
                key={product.id}
                className="px-2"
                style={{ marginLeft: "0px", display:'flex', justifyContent:'space-between' }}
              >
                <CartCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <p className="p-3"> Price: ₹ {product.price}</p>
                  <p className="p-3"> Total: ₹ {product.price*product.count}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
          <p className="display-6 text-center">Your Aapki Shop Cart is empty</p>
          <p className="text-center" ><Link to="/"> Shop Now </Link></p>
          </>
        )}
      </div>
    </>
  );
}
