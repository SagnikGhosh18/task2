import "./App.css";

import React, { useState, useEffect } from 'react';
import { fetchData } from './data/data';
import Table from "./components/table";

const App = () => {
  const [data, setData] = useState({});
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const sortedProducts = await fetchData();
        setData(sortedProducts);
        setProducts(Object.values(data.products));
        setSortedProducts(products.sort((a,b)=>+b.popularity - +a.popularity));
      } catch (error) {
        // Handle error if needed
        console.log("Error fetching values");
      }
    };

    fetchProducts();
  }, [data, products]);

  console.log(data);

  return (
    <>
      <h1>Import products</h1>
      <div className="container">
        <div className="upperContainer">
          <div className="leftContainer">
            <h3>Container 1</h3>
          </div>
          <div className="rightContainer">
            <h3>Container 2</h3>
          </div>
        </div>
        <div>
          Container 3
        </div>
      </div>
      <Table sortedProducts={sortedProducts} />
    </>
  );
};

export default App;