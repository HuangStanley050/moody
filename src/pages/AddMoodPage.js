import React from "react";
import Layout from "../components/Layout";
import AddMoodForm from "../components/addMoodForm";

const AddMoodPage = props => {
  return (
    <Layout>
      <h1 className="text-center">Add Mood</h1>
      <AddMoodForm />
    </Layout>
  );
};

export default AddMoodPage;
