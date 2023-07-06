import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { singleProduct } from "./Action";
import { Link } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((e) => e.product_data);
  console.log(product);

  // const Detail = async () => {
  //     try {
  //         const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  //         const json = await response.json();
  //         setProduct(json);
  //         console.log(product.id)
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }
  useEffect(() => {
    dispatch(singleProduct(id));
  }, []);

  return (
    <div className="p-5 ">
      <Link to="/">
        <button style={{ borderRadius: "20px" }}>
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </button>
      </Link>
      <div className="body p-4">
        <div className="card d-flex align-items-center p-4">
          <img
            src={product.image}
            style={{ height: "250px", width: "250px" }}
          />
          <div className="card-body" style={{ height: "auto" }}>
            <h5 className="card-title" style={{ fontSize: "30px" }}>
              {product.title}
            </h5>
            <p className="card-text" style={{ fontSize: "20px" }}>
              {product.description}
            </p>
            <p className="card-text">
              <strong>Price : </strong>
              {product.price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
