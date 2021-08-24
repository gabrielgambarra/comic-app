import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Header from "../components/Header";
import { AppContent } from "../shared/styles";
import Favorite from "../pages/Favorite";

const Routes = () => {
  return (
    <AppContent>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/favorites" component={Favorite} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </AppContent>
  );
};

export default Routes;
