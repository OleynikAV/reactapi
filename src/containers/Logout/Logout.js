import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../store/actions/authActions";
import api from "../../api/api";
import withErrorHandler from "./../../hoc/withErrorHandler";

const Logout = ({ logout, token }) => {
  useEffect(() => {
    logout(token);
  }, [logout, token]);

  return <Redirect to="/login" />;
};

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect(
  mapStateToProps,
  { logout }
)(withErrorHandler(Logout, api));
