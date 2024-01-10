import React from 'react';
import "./table.css";

const Table  = ({sortedProducts}) => {
  return (
    <table id="customers">
        <tr>
          <th>Subcategory</th>
          <th>Title</th>
          <th>Price</th>
          <th>Popularity</th>
        </tr>
        {sortedProducts.map(product =>
          <tr>
            <td>{product.subcategory}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.popularity}</td>
          </tr>
        )}
      </table>
  );
};

export default Table;