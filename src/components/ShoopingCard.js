import React from "react";
import "./shoopingCard.css";

function ShoopingCard({ prop, category }) {
  return (
    <>
      {prop.category === category || category === 'all' ? (
        <div className="shoopingCard-container">
          <img
            src={prop.image}
            draggable="false"
            width={"150px"}
            height={"180px"}
          />
          <hr />
          <div className="shopingCard-details">
            <h3>{prop.title.slice(0, 10)} ...more</h3>
            <div className="sizes-container">
              <p>Sizes</p>
              <p>S,M,XXl</p>
            </div>
            <p>Rating: {prop.rating.rate}⭐</p>
            <button>${prop.price}</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ShoopingCard;
