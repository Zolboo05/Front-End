import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";

const Style = true;

class SearchCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pre_courses: 0,
      courses: 0,
      teacher: 0,
      users: 0,
      data: [],
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/elearn/getCounts`,
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        console.log(response.data.data[0].count, "res");
        if (response.data.status === "success") {
          this.setState({
            data: response.data.data,
            pre_courses: response.data.data[0].count,
            courses: response.data.data[1].count,
            teacher: response.data.data[2].count,
            users: response.data.data[3].count,
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
        toast.warning(
          <div style={{ display: "flex", alignItems: "center" }}>
            <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
            {"Холболтонд алдаа гарлаа"}
          </div>
        );
      });
  }
  render() {
    return (
      <section
        id="search-course"
        className={
          this.props.Style !== true
            ? "search-course-section"
            : "search-course-section search-course-secound"
        }
      >
        <div className="container">
          <div className="search-counter-up">
            {this.state.data.length > 0 ? (
              <div className="row">
                <div className="col-md-3 col-sm-6">
                  <div className="counter-icon-number ">
                    <div className="counter-icon">
                      <i className="text-gradiant flaticon-graduation-hat" />
                    </div>
                    <div className="counter-number">
                      <CountUp end={this.state.users} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span
                              className="counter-count bold-font"
                              ref={countUpRef}
                            ></span>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <span>+</span>
                      <p>Хэрэглэгч</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter-icon-number ">
                    <div className="counter-icon">
                      <i className="text-gradiant flaticon-book" />
                    </div>
                    <div className="counter-number">
                      <CountUp end={this.state.courses} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span
                              className="counter-count bold-font"
                              ref={countUpRef}
                            ></span>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <span>+</span>
                      <p>Курс</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter-icon-number ">
                    <div className="counter-icon">
                      <i className="text-gradiant flaticon-favorites-button" />
                    </div>
                    <div className="counter-number">
                      <CountUp end={this.state.pre_courses} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span
                              className="counter-count bold-font"
                              ref={countUpRef}
                            ></span>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <span>+</span>
                      <p>Чанартай курсууд</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 col-sm-6">
                  <div className="counter-icon-number ">
                    <div className="counter-icon">
                      <i className="text-gradiant flaticon-group" />
                    </div>
                    <div className="counter-number">
                      <CountUp end={this.state.teacher} redraw={true}>
                        {({ countUpRef, start }) => (
                          <VisibilitySensor onChange={start} delayedCall>
                            <span
                              className="counter-count bold-font"
                              ref={countUpRef}
                            ></span>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                      <span>+</span>
                      <p>Багш нар</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default SearchCourse;
