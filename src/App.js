import React from "react";

import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/privateRoute";
import LandingPage from "./pages";
import LoginPage from "./pages/LoginPage";
import MoodsPage from "./pages/MoodsPage";
import AddMoodPage from "./pages/AddMoodPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <PrivateRoute path="/moods" component={MoodsPage} />
      <PrivateRoute path="/addmood" component={AddMoodPage} />
    </Switch>
  );
}

export default App;
