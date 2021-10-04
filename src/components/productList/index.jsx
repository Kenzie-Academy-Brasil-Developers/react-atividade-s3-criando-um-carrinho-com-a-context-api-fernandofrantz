import Button from "../Button";

import { useContext } from "react";

import { CatalogueContext } from "../../Providers/catalogue";
import { CartContext } from "../../Providers/cart";

import { Container, List } from "react-dom";

const ProductList = ({ type }) => {
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <>
      <ul id="list">
        {type === "catalogue" && <h3>Catalogue</h3>}
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <li key={index}>
              {item.name}
              <Button type={type} item={item} />
            </li>
          ))}
        {type === "cart" && <h3>Cart</h3>}
        {type === "cart" &&
          cart.map((item, index) => (
            <li ket={index}>
              {item.name}
              <Button type={type} item={item} />
            </li>
          ))}
      </ul>
    </>
  );
};
export default ProductList;
