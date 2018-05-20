import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Component from "./raw";

import { incrementCount } from "./actions";

const mapDispatchToProps =
  (dispatch) => bindActionCreators({ incrementCount }, dispatch);

export default connect(null, mapDispatchToProps)(Component);
