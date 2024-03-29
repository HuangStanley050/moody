import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
export default connect(mapStateToProps)(PrivateRoute);
