import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorite-context";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        The path
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/" className={classes.nav}>
              Content
            </Link>
          </li>
          <li>
            <Link to="/new-content" className={classes.nav}>
              Add New Content
            </Link>
          </li>
          <li>
            <Link to="/favorites" className={classes.nav}>
              Top Contents
              <span className={classes.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>
          </li>
          {/* <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/auth">Login</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
