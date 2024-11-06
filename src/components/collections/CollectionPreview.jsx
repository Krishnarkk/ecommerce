import React from "react";
import CollectionItem from "../collection-item/CollectionItem";
import "./collectionPreview.scss";
const CollectionPreview = ({ shopData }) => {
  return (
    <div className="collection-preview">
      <h1>{shopData.title}</h1>
      <div className="preview">
        {shopData.items.slice(0, 4).map((subItem) => (
          <CollectionItem productItems={subItem} key={subItem.id}/>
        ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
