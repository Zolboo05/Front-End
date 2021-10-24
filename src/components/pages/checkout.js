import React, { Component } from "react";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import Footer from "../layouts/footer";
import { Steps } from "antd";
import { GiShoppingCart, GiMoneyStack } from "react-icons/gi";
import { AiOutlineFileDone, AiOutlineCheckCircle } from "react-icons/ai";
import HashLoader from "react-spinners/HashLoader";
import Buy from "../layouts/buy";
import { Link } from "react-router-dom";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import Preloader from "../../components/layouts/preloader";
import Sell from "../../components/layouts/sell";
const { Step } = Steps;

const steps = [
  {
    title: (
      <>
        Сагс <GiShoppingCart />
      </>
    ),
    content: "First-content",
  },
  {
    title: (
      <>
        Худалдаж авах <GiMoneyStack />
      </>
    ),
    content: "Second-content",
  },
  {
    title: (
      <>
        Амжилттай <AiOutlineFileDone />
      </>
    ),
    content: "Last-content",
  },
  {
    title: (
      <>
        Амжилттай <AiOutlineFileDone />
      </>
    ),
    content: "Last-content",
  },
];

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      current: 0,
      isLoading: false,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/payment/getPaymentCard`,
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
  deletedCard(e, name) {
    this.setState({
      isLoading: false,
    });
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/payment/deletePaymentCard`,
      json: true,
      data: {
        course_id: e,
      },
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          const requestOptions1 = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${this.props.accessToken}`,
              "Content-Type": "application/json",
            },
            url: `${constants.apiUrl}/payment/getPaymentCard`,
            json: true,
          };
          axios(requestOptions1)
            .then((response) => {
              if (response.data.status === "success") {
                this.props.profileDetail(this.props.accessToken, toast);
                toast.success(
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AiOutlineCheckCircle
                      size={30}
                      style={{ marginRight: "0.2rem", color: "white" }}
                    />
                    {name} хичээл устлаа
                  </div>
                );
                this.setState({
                  data: response.data.data,
                  isLoading: true,
                });
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
              toast.warning(
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RiErrorWarningLine
                    size={30}
                    style={{ marginRight: "0.2rem" }}
                  />
                  {"Холболтонд алдаа гарлаа"}
                </div>
              );
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
    const next = () => {
      this.setState({ current: this.state.current + 1 });
    };

    const prev = () => {
      this.setState({ current: this.state.current - 1 });
    };
    var payment = 0;
    return (
      <div>
        <Header />
        <Breadcrumb
          BreadcumbTitle="Genius"
          BreadcumbBigTitle="Checkout"
          BreadcumbLinkText="Checkout"
        />

        <section id="checkout" className="checkout-section">
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
            <Steps
              current={this.state.current}
              style={{ marginBottom: "3rem" }}
            >
              <Step title="Сагс" />
              <Step title="Худалдаж авах" />
              <Step title="Амжилттай" />
            </Steps>
            <div className="checkout-content">
              {steps[this.state.current].content === "First-content" && (
                <div className="row">
                  <div className="col-md-9">
                    <div className="order-item  course-page-section">
                      <div className="section-title-2  headline text-left">
                        <h2>
                          Order <span>Item.</span>
                        </h2>
                      </div>
                      <div className="course-list-view table-responsive">
                        {this.state.isLoading === true ? (
                          <table className="table">
                            <thead>
                              <tr className="list-head">
                                <th>COURSE NAME</th>
                                <th>COURSE TYPE</th>
                                <th>STARTS</th>
                                <th>LENGTH</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.data.length > 0
                                ? this.state.data.map((item, i) => (
                                    <tr key={i}>
                                      <td>
                                        <div className="course-list-img-text">
                                          <div className="course-list-img">
                                            <img src={item.image} alt="" />
                                          </div>
                                          <div className="course-list-text">
                                            <h3>
                                              <a href="#">{item.name}</a>
                                            </h3>
                                            <div className="course-meta">
                                              <span className="course-category bold-font">
                                                <div>
                                                  {" "}
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
                                                </div>
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </td>
                                      <td>
                                        <div className="course-type-list">
                                          <span>Graphic Design &amp; 3D</span>
                                        </div>
                                      </td>
                                      <td>6-06-2018</td>
                                      <td className="dlt-price relative-position">
                                        3 Months
                                        <div className="check-dlt">
                                          <div
                                            onClick={() => {
                                              this.deletedCard(
                                                item.id,
                                                item.name
                                              );
                                            }}
                                          >
                                            <i className="fas fa-times" />
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  ))
                                : ""}
                            </tbody>
                          </table>
                        ) : (
                          "                          <Preloader />"
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="side-bar-widget first-widget">
                      <h2 className="widget-title text-capitalize">
                        Order <span>Detail.</span>
                      </h2>
                      <div className="sub-total-item">
                        <span className="sub-total-title">SUBTOTAL</span>
                        <div className="purchase-list mt15 ul-li-block">
                          <ul>
                            {this.state.data.length > 0
                              ? this.state.data.map(
                                  (item, i) => (
                                    item.sale_amount === 0
                                      ? (payment = payment + item.amount)
                                      : (payment = payment + item.sale_amount),
                                    (
                                      <li
                                        key={i}
                                        style={{
                                          display: "flex",
                                          alignContent: "center",
                                        }}
                                      >
                                        <div style={{ width: "50%" }}>
                                          {item.name}
                                        </div>{" "}
                                        <div style={{ width: "50%" }}>
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
                                        </div>
                                      </li>
                                    )
                                  )
                                )
                              : ""}
                          </ul>
                          <div className="in-total">
                            Нийт{" "}
                            <span>
                              <NumberFormat
                                value={payment}
                                displayType={"text"}
                                thousandSeparator={true}
                                suffix={"₮"}
                              />
                            </span>
                          </div>
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
                            <img
                              src={require("../../assets/img/blog/fb-1.jpg")}
                              alt=""
                            />
                            <div className="trend-badge-2 text-center text-uppercase">
                              <i className="fas fa-bolt" />
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
                  </div>
                </div>
              )}
              {steps[this.state.current].content === "Second-content" && (
                <Sell />
              )}
              {steps[this.state.current].content === "Last-content" && (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Buy title="Ахисан төвшний HTML CSS" width="900px" />
                </div>
              )}
              <div className="steps-action">
                {this.state.current !== steps.length - 2 &&
                  this.state.current - 1 > 0 && (
                    <div className="step_button" onClick={() => prev()}>
                      {steps[this.state.current - 1].title}
                    </div>
                  )}
                {this.state.current < steps.length - 2 && (
                  <div
                    type="primary"
                    className="step_button"
                    onClick={() => next()}
                  >
                    {steps[this.state.current + 1].title}
                  </div>
                )}
                {this.state.current === steps.length - 2 && (
                  <Link to="/profile">
                    <div
                      type="primary"
                      className="step_button"
                      onClick={() => message.success("Processing complete!")}
                    >
                      Буцах
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    profileDetail: (token, toast) => {
      dispatch(actions.profileDetail(token, toast));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
