import "./styles/main.scss";
import "rsuite/dist/rsuite.min.css";
import { BrowserRouter, Switch } from "react-router-dom";
import Signin from "./pages/Signin";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute exact path="/signin" component={Signin} />
        <PrivateRoute path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
