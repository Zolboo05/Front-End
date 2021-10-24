import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../layouts/card";
import { constants } from "../../constants";
import { MdSlowMotionVideo } from "react-icons/md";
import ReactPlayer from "react-player";
import Modal from "react-awesome-modal";
import { ImCancelCircle } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./preloader";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";
class CourseSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoVisable: false,
    };
  }

  parseDate(str) {
    var mdy = str.split("/");
    return new Date(mdy[2], mdy[0] - 1, mdy[1]);
  }
  addPurchase(e) {
    if (this.props.accessToken != "") {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`,
          "Content-Type": "application/json",
        },
        url: `${constants.apiUrl}/payment/buySingleLesson`,
        json: true,
        data: {
          course_id: this.props.id,
        },
      };
      axios(requestOptions)
        .then((response) => {
          console.log(response, "resыбөжыбөыбөыбөыбө");
          if (response.data.status === "success") {
            this.setState({
              isLoading: true,
            });
            toast.success(
              <div style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineCheckCircle
                  size={30}
                  style={{ marginRight: "0.2rem", color: "white" }}
                />
                Худалдан авалт хийгдлээ
              </div>
            );
          } else {
            toast.warning(
              <div style={{ display: "flex", alignItems: "center" }}>
                <RiErrorWarningLine
                  size={30}
                  style={{ marginRight: "0.2rem" }}
                />
                {response.data.message}
              </div>
            );
          }
        })
        .catch(function (error) {
          console.log(error);
          // toast.warning(
          //   <div style={{ display: "flex", alignItems: "center" }}>
          //     <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
          //     {"Холболтонд алдаа гарлаа"}
          //   </div>
          // );
        });
    } else {
      toast.warning(
        <div style={{ display: "flex", alignItems: "center" }}>
          <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
          Нэвтэрнэ үү
        </div>
      );
    }
  }
  addCard(e) {
    if (this.props.accessToken != "") {
      const requestOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`,
          "Content-Type": "application/json",
        },
        url: `${constants.apiUrl}/payment/createPaymentCard`,
        json: true,
        data: {
          course_id: this.props.id,
        },
      };
      axios(requestOptions)
        .then((response) => {
          console.log(response, "resыбөжыбөыбөыбөыбө");
          if (response.data.status === "success") {
            this.setState({
              isLoading: true,
            });
            toast.success(
              <div style={{ display: "flex", alignItems: "center" }}>
                <AiOutlineCheckCircle
                  size={30}
                  style={{ marginRight: "0.2rem", color: "white" }}
                />
                Сагсанд нэмэгдлээ
              </div>
            );
          } else {
            toast.warning(
              <div style={{ display: "flex", alignItems: "center" }}>
                <RiErrorWarningLine
                  size={30}
                  style={{ marginRight: "0.2rem" }}
                />
                {response.data.message}
              </div>
            );
          }
        })
        .catch(function (error) {
          console.log(error);
          // toast.warning(
          //   <div style={{ display: "flex", alignItems: "center" }}>
          //     <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
          //     {"Холболтонд алдаа гарлаа"}
          //   </div>
          // );
        });
    } else {
      toast.warning(
        <div style={{ display: "flex", alignItems: "center" }}>
          <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
          Нэвтэрнэ үү
        </div>
      );
    }
  }
  datediff(first, second) {
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }
  render() {
    return (
      <div className="side-bar">
        <div className="course-side-bar-widget">
          <img
            style={{ width: "100%", height: "auto" }}
            src="http://1234.mn/upload/course/202101231Screen%20Shot%202021-01-23%20at%2015.jpg"
          ></img>
          <div className="genius-btn gradient-bg text-center text-uppercase float-left">
            <div
              onClick={() => {
                this.addCard(this.props.id);
              }}
            >
              Сагсанд хийх
            </div>
          </div>
          <div className="genius-btn gradient-bg text-center text-uppercase float-left">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                justifyContent: "center",
              }}
              onClick={() => this.setState({ videoVisable: true })}
            >
              Танилцуулга үзэх{" "}
              <MdSlowMotionVideo
                size={25}
                style={{ marginLeft: "0.5rem", color: "white" }}
              />
            </div>
          </div>
          <div className="genius-btn gradient-bg text-center text-uppercase float-left">
            <div
              onClick={() => {
                this.addPurchase(this.props.id);
              }}
            >
              Худалдаж авах
            </div>
          </div>
        </div>
        <div className="enrolled-student">
          <div className="comment-ratting float-left ul-li">
            <ul>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
              <li>
                <i className="fas fa-star"></i>
              </li>
            </ul>
          </div>
          <div className="student-number bold-font">250 Enrolled</div>
        </div>
        <div className="couse-feature ul-li-block">
          <ul>
            <li>
              Lectures <span>{this.props.lesson_count}</span>
            </li>
            <li>
              Language <span>{this.props.language}</span>
            </li>
            <li>
              Video <span>{this.props.count}</span>
            </li>

            <li>
              Duration{" "}
              <span>
                {" "}
                <span>{this.props.lesson_count}</span>
              </span>
            </li>
            <li>
              Includes <span>Breakfast</span>
            </li>
          </ul>
        </div>
        <div
          сlassName="lesson-buy"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "15px",
            color: "black",
            fontSize: "18px",
            marginBottom: "20px",
          }}
        >
          Төлбөр : 29,900 ₮
        </div>

        <Card />
        <div className="side-bar-widget">
          <h2 className="widget-title text-capitalize">
            <span>Related </span>News.
          </h2>
          <div className="latest-news-posts">
            <div className="latest-news-area">
              <div className="latest-news-thumbnile relative-position">
                <img src={require("../../assets/img/blog/lb-1.jpg")} alt="" />
                <div className="hover-search">
                  <i className="fas fa-search"></i>
                </div>
                <div className="blakish-overlay"></div>
              </div>
              <div className="date-meta">
                <i className="fas fa-calendar-alt"></i> 26 April 2018
              </div>
              <h3 className="latest-title bold-font">
                <a href="#">Affiliate Marketing A Beginner’s Guide.</a>
              </h3>
            </div>

            <div className="latest-news-posts">
              <div className="latest-news-area">
                <div className="latest-news-thumbnile relative-position">
                  <img src={require("../../assets/img/blog/lb-2.jpg")} alt="" />
                  <div className="hover-search">
                    <i className="fas fa-search"></i>
                  </div>
                  <div className="blakish-overlay"></div>
                </div>
                <div className="date-meta">
                  <i className="fas fa-calendar-alt"></i> 26 April 2018
                </div>
                <h3 className="latest-title bold-font">
                  <a href="#">No.1 The Best Online Course 2018.</a>
                </h3>
              </div>
            </div>

            <div className="view-all-btn bold-font">
              <a href="#">
                View All News <i className="fas fa-chevron-circle-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="side-bar-widget">
          <h2 className="widget-title text-capitalize">
            <span>Featured</span> Course.
          </h2>
          <div className="featured-course">
            <div className="best-course-pic-text relative-position">
              <div className="best-course-pic relative-position">
                <img src={require("../../assets/img/blog/fb-1.jpg")} alt="" />
                <div className="trend-badge-2 text-center text-uppercase">
                  <i className="fas fa-bolt"></i>
                  <span>Trending</span>
                </div>
              </div>
              <div className="best-course-text">
                <div className="course-title mb20 headline relative-position">
                  <h3>
                    <a href="#">
                      Fully Responsive Web Design &amp; Development.
                    </a>
                  </h3>
                </div>
                <div className="course-meta">
                  <span className="course-category">
                    <a href="#">Web Design</a>
                  </span>
                  <span className="course-author">
                    <a href="#">250 Students</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal
          visible={this.state.videoVisable}
          effect="fadeInUp"
          onClickAway={() => this.setState({ videoVisable: false })}
          className="modal_container"
        >
          <div
            className="modal_exit"
            onClick={() => this.setState({ videoVisable: false })}
          >
            <ImCancelCircle size={40} />
          </div>
          <ReactPlayer
            controls={true}
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            className="modal_video"
          />
        </Modal>
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

export default connect(mapStateToProps, mapDispatchToProps)(CourseSidebar);
