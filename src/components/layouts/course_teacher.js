import React from "react";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";

class CourseTeacher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/course/getTeachers`,
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({
            data: response.data.data,
            isLoading: true,
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
      <section id="course-teacher" className="course-teacher-section">
        <div className="jarallax">
          <div className="container">
            <div className="section-title mb20 headline text-center ">
              <h2>Багш зөвлөхүүд</h2>
            </div>
            <div className="teacher-list">
              <div className="row justify-content-center">
                {this.state.data.length > 0
                  ? this.state.data.map((item, i) => (
                      <div key={item.id} className="col-md-3">
                        <div className="teacher-img-content ">
                          <div className="teacher-cntent">
                            <div className="teacher-social-name ul-li-block">
                              <ul>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-facebook-f" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-twitter" />
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="fab fa-google-plus-g" />
                                  </a>
                                </li>
                              </ul>
                              <div className="teacher-name">
                                <span>
                                  {item.lastname} &nbsp; {item.firstname}
                                </span>
                              </div>
                            </div>
                            <div className="teacher-img-category">
                              <div className="teacher-img">
                                <img src={item.image} alt="" />
                                <div className="course-price text-uppercase text-center gradient-bg">
                                  <span>Featured</span>
                                </div>
                              </div>
                              <div className="teacher-category float-right">
                                <span className="st-name">Mobile Apps </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
              <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font ">
                <a href="#">
                  All teacher <i className="fas fa-caret-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseTeacher;
