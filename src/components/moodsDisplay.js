import React, { useEffect } from "react";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { connect } from "react-redux";
import Loader from "./loader";
import { get_moods } from "../store/actions/moodActions";

const formatTime = today => {
  let dd = today.getDate();
  let mm = today.getMonth() + 1; //January is 0!

  let yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = dd + "/" + mm + "/" + yyyy;

  return today;
};

const MoodsDisplay = props => {
  useEffect(() => {
    const timeString = formatTime(new Date());
    //console.log(timeString);
    props.getMoods(timeString);
  }, []);

  return (
    <section>
      {props.loading ? <Loader /> : null}
      {props.data.data.moods.map(mood => {
        return (
          <Toast className="mx-auto" key={mood.timestamp}>
            <ToastHeader>{mood.description}</ToastHeader>
            <ToastBody style={{ display: "flex", justifyContent: "center" }}>
              <img
                alt="animated"
                crossOrigin="anonymous"
                src={mood.image_url}
              />
            </ToastBody>
          </Toast>
        );
      })}
    </section>
  );
};
const mapDispatchToProps = dispatch => ({
  getMoods: timeString => dispatch(get_moods(timeString))
});
const mapStateToProps = state => ({
  data: state.mood,
  loading: state.mood.loading,
  auth: state.auth.isAuth
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoodsDisplay);
