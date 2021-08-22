import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/content/content";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/category/:id">
            <Content />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
