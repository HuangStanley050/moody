import React from "react";
import Layout from "../components/Layout";
import Calender from "../components/Calender";

const TestDatePicker = props => {
  return (
    <Layout>
      <h1>Date picker</h1>
      <Calender />
    </Layout>
  );
};

export default TestDatePicker;
