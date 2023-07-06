import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategories, productCategories } from "./Action";

const Home = () => {
  const dispatch = useDispatch();
  const counter = useSelector((e) => e.products);
  const category = useSelector((e) => e.product_category);

  // const Data = async () => {
  //     try {
  //         const response = await fetch('https://fakestoreapi.com/products')
  //         const json = await response.json();
  //         setData(json);
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  useEffect(() => {
    dispatch(getProducts());
    dispatch(getCategories());
  }, []);

  return (
    <div className="main m-4">
      <h1 className="text-center">All Products</h1>
      <select
        onChange={(event) => dispatch(productCategories(event.target.value))}
        className="text-center text-capitalize"
      >
        <option value="">Select Category</option>
        {category?.map((item) => (
          <option value={item}>{item}</option>
        ))}
      </select>
      <div className="row">
        {counter?.map((item) => (
          <div className="col-md-3" key={item.id} style={{ padding: "20px" }}>
            <div className="card d-flex align-items-center p-4 rounded-lg" >
              <img
                src={item.image}
                style={{ height: "180px", width: "180px" }}
              />
              <div className="card-body" style={{ height: "auto" }}>
                <h5 className="card-title" style={{ fontSize: "15px" }}>
                  {item.title}
                </h5>
                <p className="card-text">
                  {item.description.slice(0, 100)}
                  {item.description.length > 100 && "..."}
                </p>
                <p className="card-text">
                  <strong>Price : </strong>
                  {item.price}
                </p>
              </div>
              <div
                className="d-flex justify-content-end"
                style={{ width: "300px" }}
              >
                <Link to={`/blog/${item.id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
