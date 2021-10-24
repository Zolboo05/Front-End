import React from "react";
import { constants } from "../../constants";
import OwlCarousel from "react-owl-carousel";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Preloader from "./preloader";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import NumberFormat from "react-number-format";
// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const options = {
  margin: 10,
  responsiveClass: false,
  nav: true,
  dots: true,
  autoplay: false,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  smartSpeed: 1000,
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
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 3,
    },
  },
};

const GrayBg = "popular-course-section popular-three";

class PopularCourse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1",
      data: [],
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/course/getCourses`,
      data: {
        isSpecial: true,
        level: "",
        categoryId: "",
        limit: 9,
        page: 1,
      },
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        console.log("reg", response);
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
      });
  }

  addCard(e) {
    console.log(e, "e");
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/payment/createPaymentCard`,
      json: true,
      data: {
        course_id: e,
      },
    };
    axios(requestOptions)
      .then((response) => {
        console.log(response, "res");
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
              <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
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
  }

  render() {
    return (
      <section
        id="popular-course"
        className={
          this.props.GrayBg === true
            ? "popular-course-section popular-three"
            : "popular-course-section"
        }
      >
        <ToastContainer
          position="bottom-right"
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
        <div className="container">
          <div className="section-title mb10 headline text-left ">
            {this.props.show !== false ? (
              <h2>
                <span className="text-gradiant">Шинэ</span> сургалтууд.
              </h2>
            ) : (
              <div style={{ height: "50px" }}></div>
            )}
          </div>

          {this.state.data.length > 0 ? (
            <OwlCarousel
              id="course-slide-item"
              className="course-slide owl-carousel"
              {...options}
            >
              {this.state.data.map((item, i) => (
                <div key={item.id} className="course-item-pic-text ">
                  <div className="course-pic relative-position mb25">
                    <img src={item.image} alt="" />
                    <div className="course-price text-center gradient-bg">
                      {item.pay == "NOT PAID" ? (
                        <>
                          <span>
                            {item.sale_amount === 0 ? (
                              <NumberFormat
                                value={item.amount}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={"₮"}
                              />
                            ) : (
                              <NumberFormat
                                value={item.sale_amount}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={"₮"}
                              />
                            )}
                          </span>
                        </>
                      ) : (
                        <>
                          <span>Худалдаж авсан</span>
                        </>
                      )}
                    </div>
                    <div className="course-details-btn">
                      <div style={{ display: "flex" }}>
                        <div style={{ marginBottom: "20px" }}>
                          {" "}
                          <div
                            className="add-cart text-center gradient-bg"
                            style={{
                              color: "white",
                            }}
                          >
                            <i
                              className="fas fa-heart"
                              style={{
                                color: "white",
                              }}
                            />
                          </div>
                        </div>{" "}
                        {item.pay == "NOT PAID" ? (
                          <div
                            onClick={() => {
                              this.addCard(item.id);
                            }}
                            style={{
                              marginBottom: "20px",
                              marginLeft: "20px",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            <div className="add-cart text-center gradient-bg">
                              <i
                                className="fas fa-cart-plus"
                                style={{ color: "white" }}
                              />
                            </div>
                          </div>
                        ) : (
                          <div
                            style={{
                              marginBottom: "20px",
                              marginLeft: "20px",
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            <div
                              className="add-cart "
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "lightgray",
                              }}
                            >
                              <i
                                className="fas fa-cart-plus"
                                style={{
                                  color: "white",
                                }}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="course-item-text">
                    <div className="course-meta">
                      <span className="course-category bold-font">
                        <a href="#">{item.cat_name}</a>
                      </span>
                      <span className="course-author bold-font">
                        <a href="#">John Luis Fernandes</a>
                      </span>
                    </div>
                    <div className="course-title mt10 headline pb45 relative-position">
                      <h3>
                        <a href={`/course-details/${item.id}`}>
                          <div
                            style={{
                              height: "60px",
                              width: "100%",
                            }}
                          >
                            {item.course_name}
                          </div>
                        </a>{" "}
                        {/* <span className="trend-badge text-uppercase bold-font">
                              <i className="fas fa-bolt" /> TRENDING
                            </span> */}
                      </h3>
                    </div>
                    <div className="course-viewer ul-li">
                      <ul>
                        <li>
                          <a href="#">
                            <i className="fas fa-user" /> 1.220
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fas fa-comment-dots" /> 1.015
                          </a>
                        </li>
                        <li>
                          <a href="#">125k Unrolled</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </OwlCarousel>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
              }}
            ></div>
          )}
        </div>
      </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(PopularCourse);
