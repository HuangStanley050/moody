import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages";
import LoginPage from "./pages/LoginPage";
import MoodsPage from "./pages/MoodsPage";
import AddMoodPage from "./pages/AddMoodPage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/moods" component={MoodsPage} />
      <Route path="/addmood" component={AddMoodPage} />
    </Switch>
  );
}

export default App;
