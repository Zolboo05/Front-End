import React from "react";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineCheckCircle } from "react-icons/ai";
import NumberFormat from "react-number-format";
// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";

const GrayBg = "best-course-section";

class BestCourse extends React.Component {
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
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/course/getCourses`,
      data: {
        isSpecial: "",
        level: "",
        categoryId: "",
        limit: 9,
        page: 1,
        is_sale: true,
      },
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
      });
  }
  addCard(e) {
    console.log;
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
        id="best-course"
        className={
          this.props.GrayBg === true
            ? "best-course-section"
            : "best-course-section best-course-v2"
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
          <div className="section-title headline text-center ">
            <h2>
              <span className="text-gradiant">Хямдарсан </span>сургалтууд
            </h2>
          </div>
          <div className="best-course-area mb45">
            <div className="row">
              {this.state.data.length > 0
                ? this.state.data.map((item, i) => (
                    <div
                      key={item.id}
                      className="col-md-3"
                      style={{ marginTop: "1rem" }}
                    >
                      <div className="best-course-pic-text relative-position ">
                        <div className="best-course-pic relative-position">
                          <img src={item.image} alt="" />

                          <div className="course-price text-center gradient-bg">
                            {item.pay == "NOT PAID" ? (
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
                            ) : (
                              <span>Худалдаж авсан</span>
                            )}
                          </div>
                          <div className="course-rate ul-li">
                            <ul>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                              <li>
                                <i className="fas fa-star" />
                              </li>
                            </ul>
                          </div>
                          <div className="course-details-btn">
                            <div style={{ display: "flex" }}>
                              <div style={{ marginBottom: "20px" }}>
                                {" "}
                                <div className="add-cart text-center gradient-bg">
                                  <i
                                    className="fas fa-heart"
                                    style={{ color: "white" }}
                                  />
                                </div>
                              </div>
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

                            <a href={`/course-details/${item.id}`}>
                              Дэлгэрэнгүй <i className="fas fa-arrow-right" />
                            </a>
                          </div>
                          <div className="blakish-overlay" />
                        </div>
                        <div
                          className="best-course-text"
                          style={{ height: "150px" }}
                        >
                          <div className="course-title mb20 headline relative-position">
                            <h3>
                              <a href={`/course-details/${item.id}`}>
                                {item.course_name}
                              </a>
                            </h3>
                          </div>
                          <div className="course-meta">
                            <span className="course-category">
                              <a href="#">{item.cat_name}</a>
                            </span>
                            <span className="course-author">
                              <a href="#">250</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BestCourse);
