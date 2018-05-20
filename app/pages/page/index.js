import React, { PureComponent, Fragment } from "react";

import Count from "components/count";
import IncrementButton from "components/increment-button";

class Home extends PureComponent {
  render () {
    return (
      <Fragment>
        <IncrementButton />
        <Count />
      </Fragment>
    );
  }
}

export default Home;
