import React from "react";
import { logOut } from ".././actions/index";
import { connect } from "react-redux";

import "./styles/navbar-style.css";

export class Logout extends React.Component {
  componentDidMount() {
    return this.props.logOut();
  }

  render() {
    return null;
  }
}
export default connect(
  state => ({}),
  dispatch => {
    return {
      logOut: () => dispatch(logOut())
    };
  }
)(Logout);
