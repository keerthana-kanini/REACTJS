import React, { useState } from "react";
import "./FilterComp.css";

function FilterComp() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      productId: 1,
      productName: "Mobile",
      productPrice: "₹20,000"
    },
    {
      productId: 2,
      productName: "Laptop",
      productPrice: "₹50,000"
    },
    {
      productId: 3,
      productName: "Headphones",
      productPrice: "₹2,000"
    },
    {
      productId: 4,
      productName: "Smartwatch",
      productPrice: "₹10,000"
    },
    {
      productId: 5,
      productName: "Tablet",
      productPrice: "₹30,000"
    },
    {
      productId: 6,
      productName: "Camera",
      productPrice: "₹40,000"
    },
    {
      productId: 7,
      productName: "Television",
      productPrice: "₹60,000"
    },
    {
      productId: 8,
      productName: "Gaming Console",
      productPrice: "₹25,000"
    },
    {
      productId: 9,
      productName: "Speaker",
      productPrice: "₹5,000"
    },
    {
      productId: 10,
      productName: "Printers",
      productPrice: "₹8,000"
    },
   
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  return (
    <div className="filter-container">
      <input
        type="text"
        placeholder="Search by product name"
        onChange={handleSearch}
        className="search-input"
      />

      <table className="filter-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.productId}>
              <td>{product.productId}</td>
              <td>{product.productName}</td>
              <td>{product.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilterComp;
