import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Content from "./components/content/content";

function App() {
  // console.log("location", location);
  // console.log("useHistory", history);

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
