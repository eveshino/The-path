import { useContext } from "react";

import ContentList from "../components/contents/ContentList";
import FavoritesContext from "../store/favorite-context";

function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>you got no important content?</p>;
  } else {
    content = <ContentList contents={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>Most important Content</h1>
      {content}
    </section>
  );
}

export default Favorites;
