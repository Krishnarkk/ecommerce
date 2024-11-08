import React, { useEffect, useState } from "react";
import CollectionPreview from "../../components/collections/CollectionPreview";
import SHOP_DATA from "./shop-data";
import { useParams } from "react-router-dom";
import axios from "axios";
const ShopPage = () => {
  const { title } = useParams();
  const [shops, setShops] = useState([]);
  const [shopData, setShopData] = useState([]);
  useEffect(() => {
    const fetchShopData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/shop-item");
        setShops(response.data.data.shopItems);
      } catch (err) {
        console.error(err);
      }
    };
    fetchShopData();
  }, []);

  useEffect(() => {
    if (title) {
      const filteredData = shops.filter(
        (prodItem) => prodItem.routeName === title
      );
      setShopData(filteredData);
    } else {
      setShopData(shops);
    }
  }, [title, shops]);
  return (
    <div>
      {shopData.length > 0 ? (
        shopData.map((shops) => (
          <CollectionPreview shopData={shops} key={shops.id} />
        ))
      ) : (
        <div>
          <p> Something went wrong </p>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
