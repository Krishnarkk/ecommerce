import React from "react";
import "./Home-page.style.css";
import MenuItem from "../../components/menu-item/MenuItem";

const HomePage = (props) => {
  return (
    <div className="home-page">
      <h1>Welcome to my Homepage</h1>
      <div className="directory-menu">
        {props.productCategories.map((product) => (
          <MenuItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
