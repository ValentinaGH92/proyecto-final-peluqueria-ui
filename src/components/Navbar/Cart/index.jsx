import "./cart.css";
import { Image } from "react-bootstrap";
import CartIconSvg from "../../../svg/cart.svg";
import { useCartContext } from "../../../context/cart";
import { getTotalPrice } from "../../../utils/priceFormater.js";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { cart } = useCartContext();
  const navigate = useNavigate();
  const count = cart.length || 0;

  const total = getTotalPrice(cart);

  const handlerRedirectToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="cart-icon-container">
      <span>$ {total}</span>
      <span className="count">{count}</span>
      <Image src={CartIconSvg} width="30" onClick={handlerRedirectToCart} />
    </div>
  );
};

export default CartIcon;
