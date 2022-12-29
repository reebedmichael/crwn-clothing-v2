import "./cart-item.styles.scss";

const CartItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem;
  return (
    <div className="car-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}{" "}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
