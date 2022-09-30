import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actions/actionsDisp";

export const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state);
  return (
    <div className="cart">
      <h2>Number of items in Cart:{state.noOfItems}</h2>
      <button
        className="green"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button
        disabled={state.noOfItems <= 0 ? true : false}
        className="red"
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item from Cart
      </button>
    </div>
  );
};
