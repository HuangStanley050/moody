import React from "react";
import LoginForm from "../components/loginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Layout from "../components/Layout";

const LoginPage = props => {
  if (props.isAuth) {
    return <Redirect to="/moods" />;
  }
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};
export default connect(mapStateToProps)(LoginPage);
