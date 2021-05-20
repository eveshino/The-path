import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllContentsPage from "./pages/AllContents";
import Favorites from "./pages/Favorites";
import NewContent from "./pages/NewContent";

function App() {
  // path ex:   localhost:3000/
  // my-page.com/
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllContentsPage />
        </Route>
        <Route path="/new-content">
          <NewContent />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
