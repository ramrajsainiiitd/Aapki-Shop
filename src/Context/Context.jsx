import { createContext, useState } from "react";
export const MyContext = createContext(null);

export const ContextProvider = (props) => {
  const [ProductDetails, setProductDetails] = useState([]);
  const [CartData, setCartData] = useState([]);
  const [search, setSearch] = useState("");

  console.log(CartData);

  return (
    <MyContext.Provider
      value={[
        ProductDetails,
        setProductDetails,
        CartData,
        setCartData,
        search,
        setSearch,
      ]}
    >
      {props.children}
    </MyContext.Provider>
  );
};
