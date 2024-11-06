import React, { useEffect, useState } from "react";
import CollectionPreview from "../../components/collections/CollectionPreview";
import SHOP_DATA from "./shop-data";
import { useParams } from "react-router-dom";
const ShopPage = () => {
  const { title } = useParams();
  const [products, setProducts] = useState(SHOP_DATA);
  useEffect(() => {
    console.log(" call useefec");
    if (title) {
      const filteredData = products.filter(
        (prodItem) => prodItem.routeName === title
      );
      setProducts(filteredData);
    }
  }, [title]);
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <CollectionPreview shopData={product} key={product.id} />
        ))
      ) : (
        <div>
          <p> Something went wrong </p>{" "}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
