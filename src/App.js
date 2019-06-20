import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "redux/store";

import "styles/theme.css";
import "styles/theme-elements.css";
import "styles/theme-blog.css";
import "styles/theme-shop.css";

import "styles/demo-wedding.css";
import "styles/skin-wedding.css";
import "styles/custom.css";

import Navbar from "components/layout/Navbar";
import Landing from "components/layout/Landing";

import Blog from "components/blog/Blog";
import Blogs from "components/blog/Blogs";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <div className="body">
            <Navbar />
            <div role="main" className="main">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/blog" component={Blog} />
                <Route exact path="/blogs" component={Blogs} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
