import React, { useEffect, useState } from "react";
import "./Home-page.style.css";
import MenuItem from "../../components/menu-item/MenuItem";
import axios from "axios";
const HomePage = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("http://localhost:3000/shop");
        setCategoryData(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
  }, []);
  return (
    <div className="home-page">
      <h1>Welcome to my Homepage</h1>
      <div className="directory-menu">
        {categoryData.map((product) => (
          <MenuItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
