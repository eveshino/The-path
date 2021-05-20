import classes from "./Card.module.css";

function Cart(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Cart;
