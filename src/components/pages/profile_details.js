import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import Certificate from "../pages/certificate";
import Footer from "../layouts/footer";
import Events from "./event.js";
import PopularCourseProfile from "../layouts/popular_course_profile";
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { constants } from "../../constants";
import axios from "axios";
import { FcPlanner, FcSettings, FcGraduationCap } from "react-icons/fc";
import { FaCertificate } from "react-icons/fa";
import { Tooltip, OverlayTrigger } from "react-bootstrap";
import PacmanLoader from "react-spinners/PacmanLoader";
// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";
//Modal
import Modal from "react-awesome-modal";
import { ImCancelCircle } from "react-icons/im";

const DnDCalendar = withDragAndDrop(Calendar);

class ProfileDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1",
      firstname: "",
      lastname: "",
      phone: "",
      register: "",
      calendarVisable: false,
      calendarTitle: "",
      calendarTimeStart: "",
      newPassword: "",
      oldPassword: "",
      buttonPassword: true,
    };
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.props.accessToken}`,
      },
      url: `${constants.apiUrl}/user/getUserById/`,

      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        console.log(response, "res");
        this.setState({
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
          phone: response.data.data.phone,
          register: response.data.data.register,
          email: response.data.data.email,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  onEventResize(data) {
    const { start, end } = data;
    this.setState((state) => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: [...state.events] };
    });
  }
  onSelectEvent(e) {
    console.log(e, "e");
    this.setState({
      calendarTitle: e.title,
      calendarVisable: true,
      calendarTimeStart: e.start,
    });
  }
  onEventDrop(data) {
    console.log(data);
  }
  onPasswordChange() {
    this.setState({ buttonPassword: false });
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${this.props.accessToken}`,
      },
      url: `${constants.apiUrl}/user/changePassword/`,
      json: true,
      data: {
        username: this.state.newPassword,
        password: this.state.oldPassword,
        newPassword: this.state.newPassword,
      },
    };
    axios(requestOptions)
      .then((response) => {
        this.setState({ buttonPassword: true });
        console.log(response, "res");
      })
      .catch(function (error) {
        this.setState({ buttonPassword: true });
      });
  }

  render() {
    const options = {
      responsiveClass: false,
      nav: false,
      dots: true,
      autoplay: true,
      navText: [
        "<i class='fas fa-chevron-left'></i>",
        "<i class='fas fa-chevron-right'></i>",
      ],
      smartSpeed: 1500,
      responsive: {
        0: {
          items: 1,
        },
        400: {
          items: 1,
        },
        600: {
          items: 1,
        },
        700: {
          items: 3,
        },
        800: {
          items: 4,
        },
        1000: {
          items: 4,
        },
      },
    };

    const localizer = momentLocalizer(moment);

    return (
      <div>
        <Header />
        <Breadcrumb
          BreadcumbTitle="Онлайн"
          BreadcumbBigTitle="Teacher"
          BreadcumbLinkText="Teacher"
        />
        <Modal
          visible={this.state.calendarVisable}
          effect="fadeInUp"
          onClickAway={() => this.setState({ calendarVisable: false })}
          className="modal_container"
        >
          <div
            className="modal_exit"
            onClick={() => this.setState({ calendarVisable: false })}
          >
            <ImCancelCircle size={40} />
          </div>
          <div className="modalCalendar">
            <table>
              <tr>
                <th>Хичээлийн код</th>
                <th>Хичээлийн нэр</th>
                <th>Орох цаг</th>
                <th>Тарах цаг</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>{this.state.calendarTitle}</td>
                <td>aa</td>
                <td>$100</td>
              </tr>
            </table>
          </div>
        </Modal>
        <section>
          <div className="container" style={{ marginTop: "20px" }}>
            <div className="row">
              <div className="col-md-12">
                <div className="teacher-details-content mb45">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="teacher-details-img">
                        <img
                          src={require("../../assets/img/teacher/td-1.jpg")}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="teacher-details-text">
                        <div className="section-title-2  headline text-left">
                          <h2>
                            {this.state.firstname.charAt(0).toUpperCase() +
                              this.state.firstname.slice(1)}{" "}
                            <span className="text-gradiant">
                              {this.state.lastname.charAt(0).toUpperCase() +
                                this.state.lastname.slice(1)}
                            </span>
                          </h2>
                          <div className="teacher-deg">
                            Specialities: <span>Mobile Apps.</span>
                          </div>
                        </div>

                        <div className="teacher-address">
                          <div className="address-details ul-li-block">
                            <ul>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className="add-info">
                                  <span>
                                    <b>Нэр: </b>
                                    {this.state.lastname}
                                  </span>
                                </div>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className="add-info">
                                  <span>
                                    <b>Утас: </b> {this.state.phone}
                                  </span>
                                </div>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className="add-info">
                                  <span>
                                    <b>Регистр: </b>
                                    {this.state.register}
                                  </span>
                                </div>
                              </li>
                              <li
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div className="add-info">
                                  <span>
                                    <b>И-мэйл: </b>
                                    {this.state.email}
                                  </span>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="about-teacher about-faq faq-secound-home-version">
                  <div className="faq-tab mb35">
                    <div className="faq-tab-ques  ul-li">
                      <div className="tab-button  mb30">
                        <ul className="product-tab">
                          <li
                            onClick={() => this.setState({ activeTab: "tab1" })}
                            className={
                              this.state.activeTab === "tab1"
                                ? "active"
                                : "nonActive"
                            }
                            rel="tab1"
                            style={{ display: "flex" }}
                          >
                            {" "}
                            <FcGraduationCap
                              size={20}
                              style={{ marginRight: "10px" }}
                            />
                            Сургалтууд{" "}
                          </li>
                          <li
                            onClick={() => this.setState({ activeTab: "tab3" })}
                            className={
                              this.state.activeTab === "tab3" ? "active" : ""
                            }
                            rel="tab3"
                            style={{ display: "flex" }}
                          >
                            <FcPlanner
                              size={20}
                              style={{ marginRight: "10px" }}
                            />
                            хуваарь{" "}
                          </li>
                          <li
                            onClick={() => this.setState({ activeTab: "tab2" })}
                            className={
                              this.state.activeTab === "tab2"
                                ? "active"
                                : "nonActive"
                            }
                            rel="tab2"
                            style={{ display: "flex" }}
                          >
                            {" "}
                            <FcSettings
                              size={20}
                              style={{ marginRight: "10px" }}
                            />
                            Тохиргоо{" "}
                          </li>
                          <li
                            onClick={() => this.setState({ activeTab: "tab4" })}
                            className={
                              this.state.activeTab === "tab4"
                                ? "active"
                                : "nonActive"
                            }
                            rel="tab4"
                            style={{ display: "flex" }}
                          >
                            {" "}
                            <FaCertificate
                              size={20}
                              style={{
                                marginRight: "10px",
                                color: "#8BC34A",
                              }}
                            />
                            СЕРТИФИКАТ{" "}
                          </li>
                        </ul>
                      </div>

                      <div className="tab-container">
                        <div
                          id="tab3"
                          className="tab-content-1 pt35"
                          style={{
                            display:
                              this.state.activeTab === "tab3"
                                ? "block"
                                : "none",
                          }}
                        >
                          <div className="brandBackground">
                            <DnDCalendar
                              localizer={localizer}
                              events={Events}
                              startAccessor="start"
                              endAccessor="end"
                              culture="mn-MN"
                              onEventDrop={this.onEventDrop}
                              onEventResize={this.onEventResize}
                              onSelectEvent={(event) =>
                                this.onSelectEvent(event)
                              }
                              resizable
                              defaultDate={new Date()}
                              messages={{
                                next: "Дараа",
                                previous: "Өмнөх",
                                today: "Өнөөдөр",
                                month: "Долоо хоног",
                                week: "Сар",
                                day: "Өдөр",
                                agenda: "Хичээлүүд",
                              }}
                              eventPropGetter={(
                                event,
                                start,
                                end,
                                isSelected
                              ) => {
                                let newStyle = {
                                  background:
                                    "-webkit-linear-gradient(69deg, #10abff, #1beabd)",
                                  color: "white",
                                  borderRadius: "20px",
                                  border: "1px solid #DDDDDD",
                                };

                                if (event.isMine) {
                                  newStyle.backgroundColor = "lightgreen";
                                }

                                return {
                                  className: "",
                                  style: newStyle,
                                };
                              }}
                              style={{ height: 500 }}
                            />
                          </div>
                        </div>

                        <div
                          id="tab2"
                          style={{
                            display:
                              this.state.activeTab === "tab2"
                                ? "block"
                                : "none",
                          }}
                          className="tab-content-1 pt35"
                        >
                          <div id="accordion" className="panel-group">
                            <div className="panel">
                              <div className="panel-title" id="headingSix">
                                <h3 className="mb-0">
                                  <button
                                    className="btn btn-link"
                                    data-toggle="collapse"
                                    data-target="#collapseSix"
                                    aria-expanded="true"
                                    aria-controls="collapseSix"
                                  >
                                    Нууц үг солих
                                  </button>
                                </h3>
                              </div>
                              <div
                                id="collapseSix"
                                className="collapse show"
                                aria-labelledby="headingSix"
                                data-parent="#accordion"
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <div className="panel-body">
                                    {this.state.buttonPassword === true ? (
                                      <>
                                        <input
                                          type="password"
                                          placeholder="Хуучин нууц үг"
                                          required
                                          onChange={(e) => {
                                            this.setState({
                                              oldPassword: e.target.value,
                                            });
                                          }}
                                        ></input>

                                        <input
                                          required
                                          type="password"
                                          placeholder="Шинэ нууц үг"
                                          onChange={(e) => {
                                            this.setState({
                                              newPassword: e.target.value,
                                            });
                                          }}
                                        ></input>
                                      </>
                                    ) : (
                                      ""
                                    )}
                                    <div
                                      className="buttonLessen"
                                      onClick={() => {
                                        this.onPasswordChange();
                                      }}
                                    >
                                      {this.state.buttonPassword === true ? (
                                        "СОЛИХ"
                                      ) : (
                                        <div
                                          style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            width: "100%",
                                            paddingBottom: "6px",
                                          }}
                                        >
                                          <PacmanLoader
                                            color="white"
                                            loading={true}
                                            size={10}
                                          />
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="panel">
                              <div className="panel-title" id="headingSeven">
                                <h3 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseSeven"
                                    aria-expanded="false"
                                    aria-controls="collapseSeven"
                                  >
                                    Гар утас баталгаажуулах
                                  </button>
                                </h3>
                              </div>
                              <div
                                id="collapseSeven"
                                className="collapse"
                                aria-labelledby="headingSeven"
                                data-parent="#accordion"
                              >
                                <div className="panel-body">
                                  <input
                                    type="password"
                                    placeholder="Хуучин нууц үг"
                                  ></input>

                                  <input
                                    type="password"
                                    placeholder="Шинэ нууц үг"
                                  ></input>

                                  <div
                                    className="buttonLessen"
                                    onClick={() => {
                                      this.onPasswordChange.bind();
                                    }}
                                  >
                                    СОЛИХ
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="panel">
                              <div className="panel-title" id="headingEight">
                                <h3 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseEight"
                                    aria-expanded="false"
                                    aria-controls="collapseEight"
                                  >
                                    И-мэйл баталгаажуулах
                                  </button>
                                </h3>
                              </div>
                              <div
                                id="collapseEight"
                                className="collapse"
                                aria-labelledby="headingEight"
                                data-parent="#accordion"
                              >
                                <div className="panel-body">
                                  <input
                                    type="password"
                                    placeholder="Хуучин нууц үг"
                                  ></input>

                                  <input
                                    type="password"
                                    placeholder="Шинэ нууц үг"
                                  ></input>

                                  <div
                                    className="buttonLessen"
                                    onClick={() => {
                                      this.onPasswordChange.bind();
                                    }}
                                  >
                                    СОЛИХ
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* <div className="panel">
                              <div className="panel-title" id="headingNine">
                                <h3 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    data-toggle="collapse"
                                    data-target="#collapseNine"
                                    aria-expanded="false"
                                    aria-controls="collapseNine"
                                  >
                                    Adipiscing Diamet Nonnumy Nibh Euismod?
                                  </button>
                                </h3>
                              </div>
                              <div
                                id="collapseNine"
                                className="collapse"
                                aria-labelledby="headingNine"
                                data-parent="#accordion"
                              >
                                <div className="panel-body">
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit, sed diam nonummy nibh euismod
                                  tincidunt ut laoreet dolore magna aliquam
                                  volutpat. Ut wisi enim ad minim veniam
                                  consectetuer adipiscing elit, sed diam
                                  nonummy.
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>

                        <div
                          id="tab1"
                          style={{
                            display:
                              this.state.activeTab === "tab1"
                                ? "block"
                                : "none",
                          }}
                          className="tab-content-1 pt35 PopularCourseProfile"
                        >
                          <PopularCourseProfile
                            show={false}
                            subTitle="Таны худалдан авсан сургалтууд"
                          />
                        </div>

                        <div
                          id="tab4"
                          style={{
                            display:
                              this.state.activeTab === "tab4"
                                ? "block"
                                : "none",
                          }}
                          className="tab-content-1 pt35"
                        >
                          <div className="row">
                            <OwlCarousel {...options}>
                              <Certificate multi={true} />
                              <Certificate multi={true} />
                              <Certificate multi={true} />
                              <Certificate multi={true} />
                              <Certificate multi={true} />
                              <Certificate multi={true} />
                            </OwlCarousel>
                          </div>
                        </div>

                        <div
                          id="tab5"
                          style={{
                            display:
                              this.state.activeTab === "tab5"
                                ? "block"
                                : "none",
                          }}
                          className="tab-content-1 pt35"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <div className="ques-ans mb45 headline">
                                <h3> What is Genius Courses?</h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit, sed diam nonummy nibh euismod
                                  tincidunt ut laoreet dolore magna aliquam
                                  volutpat. Ut wisi enim ad minim veniam.
                                </p>
                              </div>

                              <div className="ques-ans mb45 headline">
                                <h3>
                                  {" "}
                                  What Lorem Ipsum Dolor Sit Amet Consectuerer?
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit, sed diam nonummy nibh euismod
                                  tincidunt ut laoreet dolore magna aliquam
                                  volutpat. Ut wisi enim ad minim veniam.
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="ques-ans mb45 headline">
                                <h3>
                                  {" "}
                                  How to Register or Make An Account in Genius?
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit, sed diam nonummy nibh euismod
                                  tincidunt ut laoreet dolore magna aliquam
                                  volutpat. Ut wisi enim ad minim veniam.
                                </p>
                              </div>

                              <div className="ques-ans mb45 headline">
                                <h3>
                                  {" "}
                                  Adipiscing Diamet Nonnumy Nibh Euismod?
                                </h3>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetuer
                                  adipiscing elit, sed diam nonummy nibh euismod
                                  tincidunt ut laoreet dolore magna aliquam
                                  volutpat. Ut wisi enim ad minim veniam.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* 
                  <div className="about-btn">
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <a href="#">
                        Make Question <i className="fas fa-caret-right"></i>
                      </a>
                    </div>
                    <div className="genius-btn gradient-bg text-center text-uppercase ul-li-block bold-font">
                      <a href="#">
                        contact us <i className="fas fa-caret-right"></i>
                      </a>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="col-md-3">
                <AboutSidebar />
              </div> */}
            </div>
            {/* <PopularCourse id="1" /> */}
          </div>
        </section>
        {/* 
        <BestProduct productBG={true} /> */}
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
};
const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDetail);
