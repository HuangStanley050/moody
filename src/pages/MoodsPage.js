import React from "react";
import Layout from "../components/Layout";
import { Container, Row, Col } from "reactstrap";
import Calender from "../components/Calender";
import MoodsDisplay from "../components/moodsDisplay";

const MoodsPage = props => {
  return (
    <Layout>
      <Container>
        <h1 className="text-center">Test Moods page</h1>
        <Row>
          <Col xs="12" md="6">
            <MoodsDisplay />
          </Col>

          <Col className="d-flex justify-content-center" xs="12" md="6">
            <Calender />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default MoodsPage;
