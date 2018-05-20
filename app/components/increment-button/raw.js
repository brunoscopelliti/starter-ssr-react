import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class IncrementButton extends PureComponent {
  constructor (props) {
    super(props);
    this.increment = this.increment.bind(this);
  }

  increment () {
    this.props.incrementCount();
  }

  render () {
    return (
      <button onClick={this.increment}>Increment</button>
    );
  }
}

IncrementButton.propTypes = {
  incrementCount: PropTypes.func.isRequired,
};

export default IncrementButton;
