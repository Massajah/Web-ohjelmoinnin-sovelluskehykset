import React from "react";

export default function ProductItem(props){
    return( 
        <div className="productItem">
            <img src={props.image} alt="productImage" />
            <div className="itemName"><h4>{props.name}</h4></div>
            <div className="itemRating">Rating: {props.rating}</div>
            <div className="itemPrice">${props.price}</div>
        </div>);
  
}