import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import { MyContext } from "../../Context/Context";

export default function Cart() {
  const [ProductDetails, setProductDetails] = useContext(MyContext);
  const [CartData, setCartData] = useContext(MyContext);


  return (
    <>
      <div className="container" style={{ marginTop: "100px" }}>
        This is Cart.
      </div>
    </>
  );
}
