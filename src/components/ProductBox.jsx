import React from "react";
import { NavLink } from "react-router-dom";

const ProductBox = (props) => {
  return (
    <NavLink to={props.href}>
      <div
        className="group rounded relative shadow p-2 bg-white"
        title={props.title}
      >
        <img
          className={`${
            props.imgHeight || "h-48"
          } w-full rounded object-contain p-4 group-hover:scale-105`}
          src={props.image}
        />
        <p className="text-sm text-gray-500 mt-4 line-clamp-1">{props.title}</p>
        <p className="text-sm font-semibold mt-2 flex justify-between">
          <span>${props.price}</span>
          <span>⭐{props.rating.rate}</span>
        </p>
      </div>
    </NavLink>
  );
};

export default ProductBox;