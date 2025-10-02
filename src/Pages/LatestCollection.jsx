import React from "react";
import "./LatestCollection.css";

import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";
import p4 from "../assets/p4.webp";

const products = [
  { id: 1, name: "Casual T-Shirt", price: "₹499", img: p1 },
  { id: 2, name: "Denim Jacket", price: "₹1,299", img: p2 },
  { id: 3, name: "Sneakers", price: "₹2,099", img: p3 },
  { id: 4, name: "Classic Jeans", price: "₹899", img: p4 },
];

const LatestCollection = () => {
  return (
    <div className="latest-page">
      <h1>Latest Collection</h1>
      <p>Check out our newest arrivals for you!</p>
      <div className="collection-grid">
        {products.map((item) => (
          <div className="collection-card" key={item.id}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
