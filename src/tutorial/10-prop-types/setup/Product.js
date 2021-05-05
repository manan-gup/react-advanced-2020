import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, image, price }) => {
  return (
    <article className="product">
      <h4>{name || "Default Name"}</h4>
      <h6>${price || 3.99}</h6>
      <img src={image ? image.url : defaultImage} alt={name} />
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   image: defaultImage,
//   name: "Default Name",
//   price: 3.99
// };

export default Product;
