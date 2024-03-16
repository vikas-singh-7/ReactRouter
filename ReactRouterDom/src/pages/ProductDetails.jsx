import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  console.log(params.id);

  return <div>ProductDetails number :- {params.id}</div>;
};

export default ProductDetails;
