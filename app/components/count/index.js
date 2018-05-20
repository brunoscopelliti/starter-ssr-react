import { connect } from "react-redux";

import Component from "./raw";

const mapStateToProps =
  (state, props) => ({
    count: state.count,
  });

export default connect(mapStateToProps)(Component);
