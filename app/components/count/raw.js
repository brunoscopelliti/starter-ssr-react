import React from "react";
import PropTypes from "prop-types";

const Count =
  (props) => {
    return (
      <span>
        Current value is <b>{props.count}</b>
      </span>
    );
  };

Count.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Count;
