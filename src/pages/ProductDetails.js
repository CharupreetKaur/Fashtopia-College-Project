import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Layout from "../commponets/Layouts/Layout";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    if (slug) getProduct();
  }, [slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/api/v1/product/get-product/${slug}`);
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={product?.name}>
      <div className="row container mt-3">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="400"
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">{product.name}</h1>
          <h4>{product.description}</h4>
          <h5>
            Price:{" "}
            {product?.price?.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </h5>
          <button className="btn btn-secondary mt-2">Add to Cart</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
