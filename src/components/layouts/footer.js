import React from "react";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";

class Footer extends React.Component {
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
      url: `${constants.apiUrl}/course/getCategories`,
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
      <footer>
        <section
          id="footer-area"
          style={
            this.props.theme === true
              ? { backgroundColor: "#292929", color: "white" }
              : {}
          }
        >
          <div className="container" style={{ paddingTop: "5rem" }}>
            <div className="footer-content pb10">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-widget ">
                    <div className="footer-logo mb35">
                      <img
                        src={require("../../assets/img/logo/logo.png")}
                        alt=""
                      />
                    </div>
                    <div className="footer-about-text">
                      <p
                        style={
                          this.props.theme === true ? { color: "white" } : {}
                        }
                      >
                        Монголын хамгийн анхны эрүүл мэндийн бүтээгдэхүүний
                        цахим их дэлгүүр
                      </p>
                      <p
                        style={
                          this.props.theme === true ? { color: "white" } : {}
                        }
                      ></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="footer-widget ">
                    <div
                      className="footer-menu ul-li-block"
                      style={
                        this.props.theme === true ? { color: "white" } : {}
                      }
                    >
                      <h2
                        className="widget-title"
                        style={
                          this.props.theme === true ? { color: "white" } : {}
                        }
                      >
                        Ангилалууд
                      </h2>
                      <ul>
                        {this.state.data.length > 0
                          ? this.state.data.map((item, i) => (
                              <li key={i}>
                                <a
                                  href="#"
                                  style={
                                    this.props.theme === true
                                      ? { color: "white" }
                                      : {}
                                  }
                                >
                                  <i className="fas fa-caret-right" />
                                  {item.name}
                                </a>
                              </li>
                            ))
                          : ""}
                      </ul>
                    </div>
                  </div>
                  <div
                    className="footer-menu ul-li-block "
                    style={this.props.theme === true ? { color: "white" } : {}}
                  >
                    <h2
                      className="widget-title"
                      style={
                        this.props.theme === true ? { color: "white" } : {}
                      }
                    >
                      Хуудас
                    </h2>
                    <ul>
                      <li>
                        <a
                          href="#"
                          style={
                            this.props.theme === true ? { color: "white" } : {}
                          }
                        >
                          <i className="fas fa-caret-right" />
                          Бидний тухай
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="footer-widget ">
                    <h2
                      className="widget-title"
                      style={
                        this.props.theme === true ? { color: "white" } : {}
                      }
                    >
                      Зураг
                    </h2>
                    <div className="photo-list ul-li">
                      <ul>
                        <li>
                          <img
                            src={require("../../assets/img/gallery/g-1.jpg")}
                            alt=""
                          />
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                            <a
                              href="assets/img/gallery/g-1.jpg"
                              data-lightbox="roadtrip"
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/gallery/g-2.jpg")}
                            alt=""
                          />
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                            <a
                              href="assets/img/gallery/g-2.jpg"
                              data-lightbox="roadtrip"
                            >
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/gallery/g-3.jpg")}
                            alt=""
                          />
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                            <a
                              href="assets/img/gallery/g-3.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/gallery/g-4.jpg")}
                            alt=""
                          />
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                            <a
                              href="assets/img/gallery/g-4.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/gallery/g-5.jpg")}
                            alt=""
                          />
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                            <a
                              href="assets/img/gallery/g-5.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </li>
                        <li>
                          <img
                            src={require("../../assets/img/gallery/g-6.jpg")}
                            alt=""
                          />
                          <div className="blakish-overlay" />
                          <div className="pop-up-icon">
                            <a
                              href="assets/img/gallery/g-6.jpg"
                              data-lightbox="roadtrip"
                            >
                              {" "}
                              <i className="fas fa-search" />
                            </a>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {}
            <div className="footer-social-subscribe mb65">
              <div className="row">
                <div className="col-md-3">
                  <div className="footer-social ul-li ">
                    <h2
                      className="widget-title"
                      style={
                        this.props.theme === true ? { color: "white" } : {}
                      }
                    >
                      Сошиал холбоос
                    </h2>
                    <ul>
                      <li>
                        <a href="#">
                          <i
                            className="fab fa-facebook-f"
                            style={
                              this.props.theme === true
                                ? { color: "white" }
                                : {}
                            }
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fab fa-twitter"
                            style={
                              this.props.theme === true
                                ? { color: "white" }
                                : {}
                            }
                          />
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i
                            className="fab fa-google-plus-g"
                            style={
                              this.props.theme === true
                                ? { color: "white" }
                                : {}
                            }
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="subscribe-form ">
                    <h2
                      className="widget-title"
                      style={
                        this.props.theme === true ? { color: "white" } : {}
                      }
                    >
                      Сошиал холбоос
                    </h2>
                    <div className="subs-form relative-position">
                      <form action="#" method="post">
                        <input
                          className="course"
                          name="course"
                          type="email"
                          placeholder="Email Address."
                        />
                        <div className="nws-button text-center  gradient-bg text-uppercase">
                          <button
                            type="submit"
                            value="Submit"
                            style={
                              this.props.theme === true
                                ? { color: "white" }
                                : {}
                            }
                          >
                            Subscribe now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="copy-right-menu">
              <div className="row">
                <div className="col-md-6">
                  <div className="copy-right-text">
                    <p>
                      © 2020 - Монос Групп. Зохиогчийн эрх хуулиар
                      хамгаалагдсан.{" "}
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="copy-right-menu-item float-right ul-li">
                    {/* <ul>
                      <li>
                        <a href="#">License</a>
                      </li>
                      <li>
                        <a href="#">Privacy & Policy</a>
                      </li>
                      <li>
                        <a href="#">Term Of Service</a>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}

export default Footer;
