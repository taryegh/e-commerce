import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="col my-1 text-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rem", height: "5rem" }}
          className="img-fluid"
          alt=""
        />
      </div>

      <div className="col my-1 text-capitalize text-center">
        <span className="d-lg-none">product : </span>
        {title}
      </div>

      <div className="col my-1 text-capitalize text-center">
        <span className="d-lg-none">price : </span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <span
            className="span btn btn-black mx-1"
            onClick={() => decrement(id)}
          >
            -
          </span>

          <span className="span btn btn-black mx-1">{count}</span>

          <span
            className="span btn btn-black mx-1"
            onClick={() => increment(id)}
          >
            +
          </span>
        </div>
      </div>

      <div className="col my-1 text-capitalize text-center">
        <div
          className="cart-icon"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="icon ion-ios-trash" />
        </div>
      </div>

      <div className="col my-1 text-capitalize text-center">
        <strong>item total: ${total}</strong>
      </div>
    </div>
  );
}
