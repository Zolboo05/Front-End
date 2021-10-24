import React, { Component } from "react";

import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import CourseSidebar from "../layouts/course_sidebar_single";
import Footer from "../layouts/footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { RiErrorWarningLine } from "react-icons/ri";
import { constants } from "../../constants";
import { now } from "lodash";
import { FcVideoCall } from "react-icons/fc";
import { MdPictureAsPdf, MdAudiotrack } from "react-icons/md";

class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      sale_amount: "",
      lesson_count: "",
      lesson_topic: [],
      startDate: now(),
      endDate: now(),
      language: "",
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/lesson/getLessonDetailByCourseId`,
      data: { courseId: this.props.id },
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        console.log(response.data, "resss");
        if (response.data.status === "success") {
          this.setState({
            title: response.data.data.header.name,
            description: response.data.data.header.description,
            lesson_topic: response.data.data.details,
            lesson_count: response.data.data.header.count,
            count: response.data.data.header.count,
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
        <Breadcrumb BreadcumbTitle={this.state.title} />

        <section id="course-details" className="course-details-section">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="course-details-item">
                  <div className="course-single-text">
                    <div className="course-title mt10 headline relative-position">
                      <h3>
                        <a href="#">Тайлбар</a>{" "}
                      </h3>
                    </div>
                    <div className="course-details-content">
                      <p>{this.state.description}</p>
                    </div>
                  </div>
                </div>

                <div className="affiliate-market-guide mb65">
                  <div className="section-title-2 mb20 headline text-left">
                    <h2>Сургалтын бичлэгүүд</h2>
                  </div>
                  <div className="affiliate-market-accordion">
                    <div id="accordion" className="panel-group">
                      <div className="panel">
                        <div className="panel-title" id="headingOne">
                          <div className="ac-head">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span></span> "test"
                            </button>
                            <div className="course-by">
                              BY: <b>TONI KROSS</b>
                            </div>
                            <div className="leanth-course">
                              <span>
                                {" "}
                                <FcVideoCall size={22} />
                              </span>
                              <span>
                                <MdPictureAsPdf
                                  size={22}
                                  style={{ color: "#3CAEF4" }}
                                />
                              </span>
                              <span>
                                <MdAudiotrack
                                  size={22}
                                  style={{ color: "#43CCD3" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="panel-body">"description"</div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel-title" id="headingOne">
                          <div className="ac-head">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span></span> "test"
                            </button>
                            <div className="course-by">
                              BY: <b>TONI KROSS</b>
                            </div>
                            <div className="leanth-course">
                              <span>
                                {" "}
                                <FcVideoCall size={22} />
                              </span>
                              <span>
                                <MdPictureAsPdf
                                  size={22}
                                  style={{ color: "#3CAEF4" }}
                                />
                              </span>
                              <span>
                                <MdAudiotrack
                                  size={22}
                                  style={{ color: "#43CCD3" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="panel-body">"description"</div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel-title" id="headingOne">
                          <div className="ac-head">
                            <button
                              className="btn btn-link"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              <span></span> "test"
                            </button>
                            <div className="course-by">
                              BY: <b>TONI KROSS</b>
                            </div>
                            <div className="leanth-course">
                              <span>
                                {" "}
                                <FcVideoCall size={22} />
                              </span>
                              <span>
                                <MdPictureAsPdf
                                  size={22}
                                  style={{ color: "#3CAEF4" }}
                                />
                              </span>
                              <span>
                                <MdAudiotrack
                                  size={22}
                                  style={{ color: "#43CCD3" }}
                                />
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="panel-body">"description"</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="affiliate-market-accordion">
                    <div id="accordion" className="panel-group">
                      {this.state.lesson_topic.length !== 0
                        ? this.state.lesson_topic.map((item, i) => (
                            <div className="panel">
                              <div className="panel-title" id="headingOne">
                                <div className="ac-head">
                                  <button
                                    className="btn btn-link"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    <span>{i + 1}</span> {item.name}
                                  </button>
                                  <div className="course-by">
                                    BY: <b>TONI KROSS</b>
                                  </div>
                                  <div className="leanth-course">
                                    <span>
                                      {" "}
                                      <FcVideoCall size={22} />
                                    </span>
                                    <span>
                                      <MdPictureAsPdf
                                        size={22}
                                        style={{ color: "#3CAEF4" }}
                                      />
                                    </span>
                                    <span>
                                      <MdAudiotrack
                                        size={22}
                                        style={{ color: "#43CCD3" }}
                                      />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordion"
                              >
                                <div className="panel-body">
                                  {item.description}
                                </div>
                              </div>
                            </div>
                          ))
                        : ""}
                    </div>
                  </div>
                </div>
                {/* 
                <div className="course-review">
                  <div className="section-title-2 mb20 headline text-left">
                    <h2>
                      Course <span>Reviews:</span>
                    </h2>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="ratting-preview">
                        <div className="row">
                          <div className="col-md-4">
                            <div className="avrg-rating ul-li">
                              <b>Average Rating</b>
                              <span className="avrg-rate">5.0</span>
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
                              <b>1.225 Ratings</b>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="avrg-rating ul-li">
                              <span>Details</span>
                              <div className="rating-overview">
                                <span className="start-item">5 Starts</span>
                                <span className="start-bar"></span>
                                <span className="start-count">1.225</span>
                              </div>
                              <div className="rating-overview">
                                <span className="start-item">4 Starts</span>
                                <span className="start-bar"></span>
                                <span className="start-count">0</span>
                              </div>
                              <div className="rating-overview">
                                <span className="start-item">3 Starts</span>
                                <span className="start-bar"></span>
                                <span className="start-count">0</span>
                              </div>
                              <div className="rating-overview">
                                <span className="start-item">2 Starts</span>
                                <span className="start-bar"></span>
                                <span className="start-count">0</span>
                              </div>
                              <div className="rating-overview">
                                <span className="start-item">1 Starts</span>
                                <span className="start-bar"></span>
                                <span className="start-count">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
               */}
                {/* 
                <div className="couse-comment">
                  <div className="blog-comment-area ul-li about-teacher-2">
                    <ul className="comment-list">
                      <li>
                        <div className=" comment-avater">
                          <img
                            src={require("../../assets/img/blog/ath-2.jpg")}
                            alt=""
                          />
                        </div>

                        <div className="author-name-rate">
                          <div className="author-name float-left">
                            BY: <span>FRANK LAMPARD</span>
                          </div>
                          <div className="comment-ratting float-right ul-li">
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
                          <div className="time-comment float-right">
                            3 Days ago
                          </div>
                        </div>
                        <div className="author-designation-comment">
                          <h3>Great Course!! Recommended for Everyone</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation.
                          </p>
                        </div>
                      </li>

                      <li>
                        <div className=" comment-avater">
                          <img
                            src={require("../../assets/img/blog/ath.jpg")}
                            alt=""
                          />
                        </div>

                        <div className="author-name-rate">
                          <div className="author-name float-left">
                            BY: <span>FRANK LAMPARD</span>
                          </div>
                          <div className="comment-ratting float-right ul-li">
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
                          <div className="time-comment float-right">
                            3 Days ago
                          </div>
                        </div>
                        <div className="author-designation-comment">
                          <h3>Great Course!! Recommended for Everyone</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit, sed diam nonummy nibh euismod tincidunt ut
                            laoreet dolore magna aliquam erat volutpat. Ut wisi
                            enim ad minim veniam, quis nostrud exerci tation.
                          </p>
                        </div>
                      </li>
                    </ul>

                    <div className="reply-comment-box">
                      <div className="review-option">
                        <div className="section-title-2  headline text-left float-left">
                          <h2>
                            Add <span>Reviews.</span>
                          </h2>
                        </div>
                        <div className="review-stars-item float-right mt15">
                          <span>Your Rating: </span>
                          <form className="rating">
                            <label>
                              <input type="radio" name="stars" value="1" />
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                            </label>
                            <label>
                              <input type="radio" name="stars" value="2" />
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                            </label>
                            <label>
                              <input type="radio" name="stars" value="3" />
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                            </label>
                            <label>
                              <input type="radio" name="stars" value="4" />
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                            </label>
                            <label>
                              <input type="radio" name="stars" value="5" />
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                              <span className="icon">
                                <i className="fas fa-star"></i>
                              </span>
                            </label>
                          </form>
                        </div>
                      </div>
                      <div className="teacher-faq-form">
                        <form
                          method="POST"
                          action="/no-form"
                          data-lead="Residential"
                        >
                          <div className="row">
                            <div className="col-md-6">
                              <label for="name">Your Name</label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                required="required"
                              />
                            </div>
                            <div className="col-md-6">
                              <label for="phone">Email Address</label>
                              <input
                                type="tel"
                                name="phone"
                                id="phone"
                                required="required"
                              />
                            </div>
                          </div>
                          <label for="comments">Message</label>
                          <textarea
                            name="comments"
                            id="comments"
                            rows="2"
                            cols="20"
                            required="required"
                          ></textarea>
                          <div className="nws-button text-center  gradient-bg text-uppercase">
                            <button type="submit" value="Submit">
                              Send Message now
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
             */}
              </div>

              <div className="col-md-3">
                <CourseSidebar
                  lesson_count={this.state.lesson_count}
                  count={this.state.count}
                  startDate={this.state.startDate}
                  language={this.state.language}
                  pay={this.props.pay}
                  id={this.props.id}
                />
              </div>
            </div>
          </div>
        </section>
        <Footer theme={true} />
      </div>
    );
  }
}

export default CourseDetails;
