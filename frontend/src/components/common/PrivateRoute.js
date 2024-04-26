import React from "react";
import { Redirect, Route } from "react-router-dom";
import { connect } from "react-redux";

// Applying Private Route check on our components
// here component will manage our two components of App.js (Blogs and Forms) followed by auth
const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (!auth.isAuthenticated) {
        return <Redirect to="/login" />;
      } else {
        return <Component {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
