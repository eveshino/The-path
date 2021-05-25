import { useContext } from "react";
import FavoritesContext from "../../store/favorite-context";
import Cart from "../ui/Card";
import classes from "./ContentItem.module.css";

function ContentItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Cart>
        <div className={classes.image}>
          <img className={classes.img} src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.address}</h3>
          <p className={classes.text}>{props.description}</p>
          <div className={classes.actions} />
          <button
            className={classes.favorites}
            onClick={toggleFavoriteStatusHandler}
          >
            {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
          </button>
        </div>
      </Cart>
    </li>
  );
}

export default ContentItem;
