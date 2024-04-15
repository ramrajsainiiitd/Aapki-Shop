import { createContext, useState } from "react";
export const MyContext = createContext(null);

export const ContextProvider = (props) => {
  const [ProductDetails, setProductDetails] = useState([]);
  const[Search, setSearch] = useState('');
  const[CartItem, setCartItem] = useState([]);
  const[CountItem, setCountItem] = useState(0)


  return (
    <MyContext.Provider
      value={{
        ProductDetails,
        setProductDetails,
        CartItem, setCartItem,
        CountItem, setCountItem,
        Search, setSearch 
        
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};
