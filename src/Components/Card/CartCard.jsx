import React, { useContext } from "react";
import { MyContext } from "../../Context/Context";

export default function CartCard(props) {
  const { CartItem, setCartItem } = useContext(MyContext);
  const { CountItem, setCountItem } = useContext(MyContext);
  function handleDelete() {
    if (CartItem.length != 0) {

     const filterData =  CartItem.filter((item) =>{
      if (item.id!=props.id) {
          return item;
        }
     } 
      );
      setCartItem(filterData);

      // setCartItem(filterData);
    } else {
      console.log("Cart is empty");
    }
  }

  function HandleShare() {}

  return (
    <div className="d-flex text-center" style={{ alignItems: "center" }}>
      <div className="border" style={{ marginLeft: "0px", width: "18rem" }}>
        <img
          style={{
            objectFit: "contain",
            alignItems: "center",
            width: "200px",
            height: "200px",
          }}
          src={props.image}
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <h5>{props.title}</h5>

          <a className="btn btn-primary mx-2" onClick={handleDelete}>
            Delete
          </a>

          <a className="btn btn-primary mx-2" onClick={HandleShare}>
            Share
          </a>
          <p className="fw-3 m-2 p-2"> Qty : {props.count} </p>
        </div>
      </div>
    </div>
  );
}
