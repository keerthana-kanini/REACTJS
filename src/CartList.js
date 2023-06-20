import React from 'react';

const CartList = ({ cartItems, onRemoveItem }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.price}</td>
            <td>
              <img src={item.image} alt={item.name} />
            </td>
            <td>
              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CartList;
