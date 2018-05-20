import React, { Component, Fragment } from "react";
import { NavLink, Route } from "react-router-dom";

import Page from "pages/page";

class App extends Component {
  render (props) {
    return (
      <Fragment>
        <header className="site-header">
          <h1>Welcome</h1>
          <p>This site...<NavLink to="/foo">Link</NavLink>.</p>
        </header>
        <main>
          <Route exact path="/foo" component={Page} />
        </main>
      </Fragment>
    );
  }
}

export default App;
