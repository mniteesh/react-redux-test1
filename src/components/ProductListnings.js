import React from "react";
import { useDispatch } from 'react-redux';
import Product from "./Product";
import axios from "axios";
import { setProducts } from "../redux/action/ProductAction";
import { useEffect } from "react";

const ProductListnings = () => {
   const dispatch = useDispatch() ;
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error", err);
      });
      dispatch(setProducts(response.data))
  };

  useEffect(() => {
     fetchProducts();
  })
  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductListnings;
