import React, { useContext } from "react";
import { MyContext } from "../../Context/Context";

export default function CartCard(props) {
  const { CartItem, setCartItem } = useContext(MyContext);
  const { CountItem, setCountItem } = useContext(MyContext);
  console.log( "props:", props)
  function handleDelete(Id) {
    if (CartItem.length != 0) {

     const filterData =  CartItem.filter((item) =>{
      if (item.id!=props.id) {
          return item;
        }
     } 
      );
      setCartItem(filterData);
    } else {
      console.log("Cart is empty");
    }


  }

  console.log("the filter item is:", CartItem);

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

          <a className="btn btn-outline-success mx-2" onClick={ ()=> handleDelete(props.id)}>
            Delete
          </a>

          <a className="btn btn-outline-success mx-2" onClick={HandleShare}>
            Share
          </a>
          <p className=" m-2 p-2"> Qty: <select className="rounded">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select></p>
        </div>
      </div>
    </div>
  );
}
