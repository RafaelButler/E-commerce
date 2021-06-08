import {
  Switch,
  Route,
} from "react-router-dom";

import { Contact } from "./pages/Contact";
import Cart from "./pages/Cart";
import { Home } from "./pages/Home";


function Routes() {
  return(
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/cart" component={Cart} />
      </Switch>
  );
}

export default Routes;