import React from "react";
import Seller from "./SellerProfileContainer";
import Agent from "./agentProfileComponent";
import { connect } from "react-redux";
import LandingPage from './LandingPageContainer';

export class Profile extends React.Component {
  render() {
    if (this.props.userType === "agent") {
      return <Agent />;
    } else if (this.props.userType === "seller") {
      return <Seller />;
    } else {
      return <LandingPage />
    }
  }
}

export default connect(
  /* istanbul ignore next */
  store => {
    const userType = store.currentUser.userType;
    return { userType };
  }
)(Profile);
