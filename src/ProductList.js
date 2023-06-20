import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onRemoveProduct }) => {
  return (
    <div>
      <table className="product-table">
        <thead>
          <tr>
            <th>S.NO</th>
            <th>Product</th>
            <th>Price</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </td>
              <td>
                <button onClick={() => onRemoveProduct(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
