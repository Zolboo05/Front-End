import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FcReading, FcGraduationCap } from "react-icons/fc";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import CourseSidebar from "../layouts/course_sidebar";
import NumberFormat from "react-number-format";
import RecentlyView from "../layouts/recently_view";
import Footer from "../layouts/footer";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { Skeleton } from "antd";
import TruncateMarkup from "react-truncate-markup";
import { AiOutlineCheckCircle } from "react-icons/ai";
// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      categoryId: "",
      level: "",
      page: 1,
    };
    this.setCategory = this.setCategory.bind(this);
    this.setLevel = this.setLevel.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }
  addCard(e) {
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
          this.props.profileDetail(this.props.accessToken, toast);
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
  componentDidMount() {
    $(".tab-content-1").hide();
    $(".tab-content-1:first").show();

    /* if in tab mode */
    $("ul.product-tab").on("click", "li", function () {
      $(".tab-content-1").hide();
      var activeTab = $(this).attr("rel");
      $("#" + activeTab).fadeIn();

      $("ul.product-tab li").removeClass("active");
      $(this).addClass("active");

      $(".tab_drawer_heading").removeClass("d_active");
      $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");
    });
    /* if in drawer mode */
    $(".tab_drawer_heading").on("click", function () {
      $(".tab-content-1").hide();
      var d_activeTab = $(this).attr("rel");
      $("#" + d_activeTab).fadeIn();

      $(".tab_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");

      $("ul.product-tab li").removeClass("active");
      $("ul.product-tab li[rel^='" + d_activeTab + "']").addClass("active");
    });

    /* Extra class "tab_last" 
           to add border to right side
           of last tab */
    $("ul.product-tab li").last().addClass("tab_last");

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      // url: `${constants.apiUrl}/course/getCategories`,
      url: `${constants.apiUrl}/course/getCourses`,
      json: true,
      data: {
        isSpecial: "",
        level: this.state.level,
        categoryId: this.state.categoryId,
        limit: 9,
        page: this.state.page,
      },
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

  setCategory(e) {
    this.setState({ categoryId: e });

    this.fetchData(this.state.level, e);
  }
  setLevel(e) {
    this.setState({ level: e });
    this.fetchData(e, this.state.categoryId);
  }

  fetchData(level, category) {
    this.setState({
      isLoading: false,
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/course/getCourses`,
      json: true,
      data: {
        isSpecial: "",
        level: level,
        categoryId: category,
        limit: 9,
        page: this.state.page,
      },
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
    let content = [];
    let content1 = [];
    if (this.state.data.length > 0) {
      this.state.data.forEach((product, i) => {
        content.push(
          <div>
            <div
              className="col-width"
              key={product.id}
              style={{ width: "100%", height: "350px", marginTop: "1rem" }}
            >
              <div className="best-course-pic-text relative-position">
                <div className="best-course-pic relative-position">
                  {product.image !== null ? (
                    <img src={product.image} alt="" />
                  ) : (
                    <img
                      src={require("../../assets/img/course/No_course.jpg")}
                      alt=""
                    />
                  )}
                  {product.pay !== "NOT PAID" ? (
                    <div className="trend-badge-2 text-center text-uppercase">
                      <FcGraduationCap size={20} />
                      <span>Худалдаж авсан</span>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="course-price text-center gradient-bg">
                    <span>
                      {" "}
                      {product.sale_amount === 0 ? (
                        <NumberFormat
                          value={product.amount}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"₮"}
                        />
                      ) : (
                        <NumberFormat
                          value={product.sale_amount}
                          displayType={"text"}
                          thousandSeparator={true}
                          suffix={"₮"}
                        />
                      )}
                    </span>
                  </div>
                  <div className="course-rate ul-li">
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
                      {product.pay == "NOT PAID" ? (
                        <div
                          onClick={() => {
                            this.addCard(product.id);
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

                    <Link to={`/course-details/${product.id}`}>
                      Хичээл үзэх <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                  <div className="blakish-overlay"></div>
                </div>
                <div className="best-course-text">
                  <div className="course-title mb20 headline relative-position">
                    <h3 style={{ height: "60px " }}>
                      <TruncateMarkup lines={2}>
                        <a href="#">{product.course_name}</a>
                      </TruncateMarkup>
                    </h3>
                  </div>
                  <div className="course-meta">
                    <span className="course-category">
                      <a href="#">{product.cat_name}</a>
                    </span>
                    <span className="course-author">
                      <a href="#">
                        {product.count === null ? "0" : product.count}
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        content1.push(
          <tr>
            <td>
              <div className="course-list-img-text">
                <div className="course-list-img">
                  {product.image !== null ? (
                    <img src={product.image} alt="" />
                  ) : (
                    <img
                      src={require("../../assets/img/course/No_course.jpg")}
                      alt=""
                    />
                  )}
                </div>
                <div className="course-list-text">
                  <h3>
                    <a href="#">{product.name}</a>
                  </h3>
                  <div className="course-meta">
                    <a href="#">
                      <div
                        style={{
                          display: "flex",
                          color: "#44D0CF",
                          fontWeight: "500",
                          fontSize: "1.8rem",
                        }}
                      >
                        {product.sale_amount === 0 ? (
                          <NumberFormat
                            value={product.amount}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"₮"}
                          />
                        ) : (
                          <div style={{ display: "flex" }}>
                            <NumberFormat
                              value={product.amount}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"₮"}
                              style={{
                                color: "#BBBBBB",
                                textDecorationLine: "line-through",
                                WebkitTextDecorationLine: "line-through",
                              }}
                            />
                            <NumberFormat
                              value={product.sale_amount}
                              displayType={"text"}
                              thousandSeparator={true}
                              suffix={"₮"}
                            />
                          </div>
                        )}{" "}
                        {/* <NumberFormat
                            value={product.sale_amount}
                            displayType={"text"}
                            thousandSeparator={true}
                            suffix={"₮"}
                          /> */}
                      </div>
                    </a>

                    <div className="course-rate ul-li">
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
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="course-type-list">
                <span>{product.cat_name}</span>
              </div>
            </td>
            <td>6-06-2018</td>
            <td>3 Months</td>
          </tr>
        );
      });
    } else {
      if (this.state.isLoading === true) {
        content.push(
          <div
            style={{
              display: "flex",
              fontSize: "18px",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              color: "#3CA8FB",
            }}
          >
            Сургалт олдсонгүй
          </div>
        );
        content1.push(
          <div
            style={{
              fontSize: "18px",
              color: "#3CA8FB",
              marginTop: "20px",
            }}
          >
            Сургалт олдсонгүй
          </div>
        );
      } else {
        content.push(
          <div>
            <div className="col-width" style={{ width: "100%" }}>
              <div className="best-course-pic-text relative-position">
                <div className="best-course-pic relative-position">
                  <Skeleton.Image style={{ width: 280, height: 200 }} />

                  <div className="trend-badge-2 text-center text-uppercase">
                    <FcGraduationCap size={20} />
                    <span>
                      {" "}
                      <Skeleton.Input style={{ width: 90 }} active={true} />
                    </span>
                  </div>

                  <div className="course-price text-center gradient-bg">
                    <span>
                      {" "}
                      <Skeleton.Input style={{ width: 40 }} active={true} />
                    </span>
                  </div>
                  <div className="course-rate ul-li">
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
                  {/* <div className="course-details-btn">
                <a href="#">
                  Хичээл үзэх <i className="fas fa-arrow-right"></i>
                </a>
              </div> */}
                  <div className="blakish-overlay"></div>
                </div>
                <div className="best-course-text">
                  <div className="course-title mb20 headline relative-position">
                    <h3>
                      <a href="#">
                        {" "}
                        <Skeleton.Input style={{ width: 200 }} active={true} />
                      </a>
                    </h3>
                  </div>
                  <div className="course-meta">
                    <span className="course-category">
                      <a href="#">
                        {" "}
                        <Skeleton.Input style={{ width: 50 }} active={true} />
                      </a>
                    </span>
                    <span className="course-author">
                      <a href="#">
                        <Skeleton.Input style={{ width: 50 }} active={true} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        content1.push(
          <tr>
            <td>
              <div className="course-list-img-text">
                <div className="course-list-img">
                  <Skeleton.Image
                    style={{ width: 80, height: 90 }}
                    active={true}
                  />
                </div>
                <div className="course-list-text">
                  <h3>
                    <a href="#">
                      {" "}
                      <Skeleton.Input style={{ width: 50 }} active={true} />
                    </a>
                  </h3>
                  <div className="course-meta">
                    <span className="course-category bold-font">
                      <a href="#">
                        {" "}
                        <Skeleton.Input style={{ width: 50 }} active={true} />
                      </a>
                    </span>
                    {/* <div className="course-rate ul-li">
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
              </div> */}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div className="course-type-list">
                {/* <span>Graphic Design & 3D</span> */}
              </div>
            </td>
            <td>6-06-2018</td>
            <td>3 Months</td>
          </tr>
        );
      }
    }
    return (
      <div>
        <div>
          <Header />
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
        </div>
        <Breadcrumb BreadcumbTitle="Сургалтууд" />

        <section id="course-page" className="course-page-section">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                <div className="short-filter-tab">
                  <div
                    className="shorting-filter  float-left"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      color: "#333333",
                      fontSize: "25px",
                    }}
                  >
                    <FcReading size={40} />
                    Онлайн ВИДЕО сургалтууд
                  </div>
                  <div className="tab-button blog-button ul-li text-center float-right">
                    <ul className="product-tab">
                      <li className="active" rel="tab1">
                        <i className="fas fa-th"></i>
                      </li>
                      <li rel="tab2">
                        {" "}
                        <i className="fas fa-list"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="shorting-filter float-right">
                    <span>
                      <b>Sort</b> By
                    </span>
                    <select
                      onChange={(e) => {
                        console.log(e.target.value);
                      }}
                    >
                      <option value="9">Popularity</option>
                      <option value="10">Most Read</option>
                      <option value="11">Most View</option>
                      <option value="12">Most Shared</option>
                    </select>
                  </div>
                </div>

                <div className="genius-post-item">
                  <div className="tab-container">
                    <div id="tab1" className="tab-content-1 pt35">
                      <div className="best-course-area best-course-v2">
                        {content}
                      </div>
                    </div>
                    <div id="tab2" className="tab-content-1">
                      <div className="course-list-view">
                        <table>
                          <tr className="list-head">
                            <th>Нэр</th>
                            <th>Төрөл</th>
                            <th>Үнэлгээ</th>
                            <th>Хугцаа</th>
                          </tr>
                          {content1}
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* {this.state.isLoading === true ? (
                  <div className="couse-pagination text-center ul-li">
                    <ul>
                      <li className="pg-text">
                        <a href="#">PREV</a>
                      </li>
                      <li>
                        <a href="#">01</a>
                      </li>
                      <li>
                        <a href="#">02</a>
                      </li>
                      <li className="active">
                        <a href="#">03</a>
                      </li>
                      <li>
                        <a href="#">04</a>
                      </li>
                      <li>
                        <a href="#">...</a>
                      </li>
                      <li>
                        <a href="#">15</a>
                      </li>
                      <li className="pg-text">
                        <a href="#">NEXT</a>
                      </li>
                    </ul>
                  </div>
               
               ) : (
                  ""
                )} */}
              </div>

              <div className="col-md-3">
                <CourseSidebar
                  setCategory={this.setCategory}
                  setLevel={this.setLevel}
                />
              </div>
            </div>
          </div>
        </section>
        {/* <RecentlyView /> */}
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    profileSuccess: (data) => {
      dispatch(actions.profileSuccess(data));
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(Course);
