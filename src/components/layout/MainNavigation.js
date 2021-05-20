import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorite-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>The path</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Content</Link>
          </li>
          <li>
            <Link to="/new-content">Add New Content</Link>
          </li>
          <li>
            <Link to="/favorites">
              Top Contents
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
