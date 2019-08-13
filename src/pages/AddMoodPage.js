import React from "react";
import Layout from "../components/Layout";
import AddMoodForm from "../components/addMoodForm";
import Loader from "../components/loader";
import { connect } from "react-redux";

const AddMoodPage = props => {
  return (
    <Layout>
      <h1 className="text-center">Add Mood</h1>
      {props.loading ? <Loader /> : null}
      <AddMoodForm />
    </Layout>
  );
};
const mapStateToProps = state => {
  return {
    loading: state.mood.loading
  };
};
export default connect(mapStateToProps)(AddMoodPage);
