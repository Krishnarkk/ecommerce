import React from "react";
import "./collectionItem.scss";
import CustomButton from "../custom-button/CustomButton";
const CollectionItem = ({ productItems }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${productItems.imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{productItems.name}</span>
        <span className="price">{productItems.price}</span>
        <CustomButton >Add to cart</CustomButton>
      </div>
    </div>
  );
};

export default CollectionItem;
