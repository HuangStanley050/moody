import React, { useState } from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { connect } from "react-redux";

const MoodsDisplay = props => {
  const [open, changeStatus] = useState(false);
  const toggle = () => changeStatus(!open);
  // console.log(props.auth);
  // console.log(props.data.data);
  return (
    <section>
      <Button onClick={toggle}>Open</Button>
      {props.data.data.moods.map(mood => {
        return (
          <Toast key={mood.timestamp} isOpen={open}>
            <ToastHeader toggle={toggle}>{mood.description}</ToastHeader>
            <ToastBody>
              <img src={mood.gifUrl} />
            </ToastBody>
          </Toast>
        );
      })}
    </section>
  );
};
const mapStateToProps = state => ({
  data: state.mood,
  auth: state.auth.isAuth
});
export default connect(
  mapStateToProps,
  null
)(MoodsDisplay);
