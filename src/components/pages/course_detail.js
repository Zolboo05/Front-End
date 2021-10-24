import React, { Component } from "react";
import CourseDetails from "./course_details";
import CourseView from "./course_view";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";
import Preloader from "../layouts/preloader";
// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      data: [],
      pay: "",
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        // Authorization: `${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/lesson/getLessonDetailByCourseId`,
      data: { courseId: this.props.match.params.id },
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({
            data: response.data.data,
            title: response.data.title,
            pay: response.data.pay,
          });
        } else {
          toast.warning(
            <div style={{ display: "flex", alignItems: "center" }}>
              <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
              {response.data.message}
            </div>
          );
        }
      })
      .catch(function (error) {
        console.log(error);
        <div style={{ display: "flex", alignItems: "center" }}>
          <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
          {"Холболтонд алдаа гарлаа"}
        </div>;
      });
  }

  render() {
    return (
      <div>
        {this.state.pay == "" ? (
          <Preloader />
        ) : this.state.pay == "NOT PAID" || this.props.accessToken == "" ? (
          <CourseDetails pay={this.state.pay} id={this.props.match.params.id} />
        ) : (
          <CourseView id={this.props.match.params.id} />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginOut: () => {
      dispatch(actions.loginOut());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CourseDetail);
