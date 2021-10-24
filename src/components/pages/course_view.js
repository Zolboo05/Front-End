import React, { Component } from "react";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import Footer from "../layouts/footer";
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import { GiSunflower } from "react-icons/gi";
import { IoMdMoon } from "react-icons/io";
import TruncateMarkup from "react-truncate-markup";

import {
  FcBookmark,
  FcGraduationCap,
  FcReading,
  FcClock,
  FcSelfie,
} from "react-icons/fc";
import { FcOpenedFolder, FcDownload } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import Card from "../layouts/card";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { constants } from "../../constants";

class CourseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light: true,
      title: "",
      url: [
        "",
        "https://www.youtube.com/embed/-AbaV3nrw6E",
        "https://www.youtube.com/embed/FKoNh_naWms",
      ],
      number: 1,
      title: ["", "Сургалтанд тавтай морил", "Энэ сургалтаар бид юу үзэх вэ?"],
      data: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/lesson/getLessonDetailByCourseId`,
      data: { courseId: this.props.id },
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        console.log(response.data, "res");
        if (response.data.status === "success") {
          this.setState({
            data: response.data.data,
            title: response.data.title,
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
  handleChange() {
    if (this.state.light === true) {
      this.setState({ light: false });
    } else {
      this.setState({ light: true });
    }
  }
  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          progressClassName="toastProgress"
          bodyClassName="toastBody"
        />
        <Header />
        <Breadcrumb
          BreadcumbTitle=""
          BreadcumbBigTitle={this.state.title}
          BreadcumbLinkText="Reactjs"
        />
        <section
          id="checkout"
          className="checkout-section"
          style={
            this.state.light === true
              ? { backgroundColor: "white" }
              : { backgroundColor: "#292929" }
          }
        >
          {this.state.data.length > 0 ? (
            <div className="container">
              <div className="checkout-content">
                <div className="row">
                  <div className="col-md-8">
                    <iframe
                      width="100%"
                      height="400px"
                      src={
                        this.state.data[this.state.number].video_url
                          ? this.state.data[this.state.number].video_url
                          : "https://www.youtube.com/embed/SRec90j6lTY"
                      }
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: "10px",
                      }}
                    >
                      <div
                        className="btnCourseView btnCourseViewLeft"
                        onClick={() => {
                          if (this.state.number > 0) {
                            this.setState({
                              number: this.state.number - 1,
                            });
                          }
                        }}
                      >
                        Өмнөх
                      </div>
                      <Switch
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          border: "1px dashed #3BA9FA",
                          height: "50px",
                        }}
                        onChange={this.handleChange}
                        checkedChildren={
                          <IoMdMoon size={45} style={{ color: "#ECECEC" }} />
                        }
                        unCheckedChildren={
                          <GiSunflower size={45} style={{ color: "#F1B215" }} />
                        }
                      />
                      <div
                        className="btnCourseView btnCourseViewRight"
                        onClick={
                          this.state.data.length > this.state.number + 1
                            ? () => {
                                this.setState({
                                  number: this.state.number + 1,
                                });
                              }
                            : () => {}
                        }
                      >
                        Дараах
                      </div>
                    </div>

                    <div className="lessonNumber">
                      <div className="box">
                        <div
                          className="boxNumber"
                          style={
                            this.state.light === true
                              ? { color: "black", backgroundColor: "white" }
                              : { color: "white", backgroundColor: "#292929" }
                          }
                        >
                          {this.state.number + 1}
                        </div>
                      </div>

                      <div className="detailLesson">
                        <div className="detailLessonTop">
                          <FcGraduationCap size={25} />{" "}
                          <span>
                            {this.state.data[this.state.number].name !==
                              undefined &&
                            this.state.data[this.state.number].name !== null ? (
                              <TruncateMarkup lines={1}>
                                <div>
                                  {" "}
                                  {this.state.data[this.state.number].name}
                                </div>
                              </TruncateMarkup>
                            ) : (
                              ""
                            )}
                          </span>
                        </div>
                        <div
                          className="detailLessonBottom"
                          style={
                            this.state.light === true
                              ? { color: "black" }
                              : { color: "white" }
                          }
                        >
                          <FcReading size={18} />{" "}
                          {this.state.data[this.state.number].teacher_name !==
                            undefined &&
                          this.state.data[this.state.number].teacher_name !==
                            null
                            ? this.state.data[this.state.number].teacher_name
                            : ""}
                          <div
                            className="detailLessonBottomText"
                            style={
                              this.state.light === true
                                ? { color: "black" }
                                : { color: "white" }
                            }
                          >
                            <FcClock size={18} style={{ color: "black" }} />{" "}
                            {this.state.data[this.state.number].time !==
                              undefined &&
                            this.state.data[this.state.number].time !== null
                              ? this.state.data[this.state.number].time
                              : ""}
                          </div>
                          <div
                            className="detailLessonBottomText"
                            style={
                              this.state.light === true
                                ? { color: "black" }
                                : { color: "white" }
                            }
                          >
                            <AiFillEye size={20} /> 100
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="rowLibrary"
                      style={
                        this.state.light === true
                          ? { color: "black" }
                          : { color: "white" }
                      }
                    >
                      <div>
                        <FcOpenedFolder
                          size={30}
                          style={{ marginRight: "10px" }}
                        />{" "}
                        Source.zip
                      </div>
                      <div className="rowLibraryLeft" />
                      21mb
                      <div className="rowLibraryLeft" />
                      Хичээлийн код
                      <div className="rowLibraryLeft" />
                      <FcDownload size={18} style={{ cursor: "pointer" }} />
                    </div>
                    <div className="lessonDesBorder">
                      <div
                        className="lessonDes"
                        style={
                          this.state.light === false
                            ? { backgroundColor: "#292929" }
                            : {}
                        }
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec vulputate nisi id sapien tincidunt tempor.
                        Suspendisse potenti. Suspendisse ac quam massa. Mauris
                        vel fringilla nisl. Pellentesque at augue at ipsum
                        tempor sollicitudin. Donec non tellus sed ligula
                        venenatis suscipit ut quis eros. Quisque dictum iaculis
                        lobortis. Quisque et mauris ligula. Interdum et
                        malesuada fames ac ante ipsum primis in faucibus. Mauris
                        quis interdum enim. Fusce in sapien ex. Suspendisse sit
                        amet purus placerat, egestas lorem at, faucibus magna.
                        Aenean pulvinar mollis mi. Curabitur tempor ex eget
                        risus maximus ornare. Duis eget tincidunt nibh. Nulla mi
                        enim, aliquet non mi a, maximus malesuada tellus. Etiam
                        sit amet varius ipsum, ut interdum orci. Vestibulum
                        molestie elementum tincidunt. Integer ultrices quis eros
                        quis consectetur. Nullam a egestas enim. Duis ultricies
                        iaculis ligula, vitae posuere sapien elementum et. Morbi
                        ullamcorper felis ligula. Praesent convallis erat ut
                        pulvinar porttitor. Donec interdum id ligula eget
                        varius. Vestibulum ante ipsum primis in faucibus orci
                        luctus et ultrices posuere cubilia curae; Class aptent
                        taciti sociosqu ad litora torquent per conubia nostra,
                        per inceptos himenaeos. Ut porttitor tempus sapien non
                        dictum. Orci varius natoque penatibus et magnis dis
                        parturient montes, nascetur ridiculus mus. Sed in mi non
                        tortor sagittis aliquam. Nam sed arcu a nisi luctus
                        varius. Vivamus porta magna massa, id eleifend magna
                        venenatis vitae. Cras hendrerit turpis et orci eleifend,
                        in dignissim urna rutrum. Mauris tempus eros risus, ut
                        dignissim dui aliquet a. Morbi gravida gravida ipsum eu
                        consequat. Praesent a metus ut nibh vestibulum pretium
                        elementum eu felis. In ut lectus id velit tincidunt
                        eleifend quis nec nisi. Praesent sollicitudin suscipit
                        nunc, in pellentesque turpis vehicula a. Aenean sodales
                        ante at mauris porttitor semper. Aenean condimentum
                        mauris vitae massa rhoncus, at euismod neque tristique.
                        Donec nec enim turpis. Nulla facilisi. Suspendisse at
                        varius orci. Phasellus non semper ipsum, sit amet
                        ultricies augue. Donec consectetur tempus lobortis.
                        Integer mattis nunc vitae felis condimentum consectetur.
                        Etiam a elit sit amet justo ultrices hendrerit. Ut eget
                        convallis nisl, nec tempor arcu. Maecenas sit amet
                        malesuada nibh. Nunc quis mauris odio. Donec consectetur
                        tellus quis turpis mattis, et convallis ligula accumsan.
                        Vivamus lobortis neque ut molestie blandit. Nulla
                        efficitur lorem id dapibus ullamcorper. Sed commodo
                        bibendum justo nec iaculis. Etiam sit amet ligula ac
                        metus vulputate malesuada sit amet et tortor. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    {/* <div>
                    <Card />
                  </div> */}
                    <div className="lessonBackground">
                      <div className="lessonInner">
                        <FcBookmark size={30} />
                        <div
                          style={
                            this.state.light === true
                              ? { color: "#333333" }
                              : { color: "white" }
                          }
                        >
                          Хичээлүүд
                        </div>
                      </div>
                    </div>
                    <ol className="lessonUl">
                      {this.state.data.length > 0
                        ? this.state.data.map((data, i) => (
                            <li
                              onClick={() =>
                                this.setState({
                                  number: i,
                                })
                              }
                              style={{ cursor: "pointer" }}
                              key={i}
                            >
                              <div
                                className={
                                  this.state.number === i
                                    ? "activeNumber"
                                    : "number"
                                }
                                style={
                                  this.state.number !== i
                                    ? this.state.light === true
                                      ? { color: "black" }
                                      : { color: "white" }
                                    : { color: "white" }
                                }
                              >
                                {i + 1}
                              </div>
                              <div
                                className={
                                  this.state.number === i
                                    ? "acticeLessonContent"
                                    : "lessonContent"
                                }
                                style={
                                  this.state.light === true
                                    ? { color: "#333333" }
                                    : { color: "white" }
                                }
                              >
                                {data.name}
                                <div
                                  style={{
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    color: "#3DB1F2",
                                  }}
                                >
                                  {this.state.number === i ? (
                                    <AiFillEye size={20} />
                                  ) : (
                                    data.time
                                  )}
                                </div>
                              </div>
                            </li>
                          ))
                        : ""}
                    </ol>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </section>

        <Footer theme={this.state.light === false ? true : ""} />
      </div>
    );
  }
}

export default CourseView;
