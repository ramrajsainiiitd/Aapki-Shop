import React from "react";

export default function CartCard(props) {
  function handleDelete() {}

  function HandleShare(params) {}

  return (
    <div className="d-flex" style={{justifyContent:'space-between'}} >
      <div
        className=""
        style={{ marginLeft: "0px", width: "18rem" }}
      >
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
          <p className="fw-3 m-2 p-3" >Count: 1</p>
        </div>
      </div>
    </div>
  );
}
