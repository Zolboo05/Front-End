import React, { Component } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import OwlCarousel from "react-owl-carousel";
import { FcHeadset, FcRating, FcMusic } from "react-icons/fc";
import { BsMusicNoteList } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import TruncateMarkup from "react-truncate-markup";
import { ScrollPanel } from "primereact/scrollpanel";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosPause,
  IoIosArrowUp,
  IoIosArrowDown,
} from "react-icons/io";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";

const service_slide_3options = {
  margin: 10,
  responsiveClass: true,
  nav: true,
  dots: false,
  audioPlay: true,
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
      items: 2,
    },
    700: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
};

const category_slide_options = {
  margin: 0,
  responsiveClass: true,
  nav: true,
  autoplay: false,
  navText: [
    "<i class='fas fa-chevron-left'></i>",
    "<i class='fas fa-chevron-right'></i>",
  ],
  autoplay: false,
  dots: false,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 2,
    },
    600: {
      items: 3,
    },
    700: {
      items: 4,
    },
    1000: {
      items: 5,
    },
  },
};

import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import AboutSidebar from "../layouts/about_sidebar";
import BestProduct from "../layouts/best_product";
import Footer from "../layouts/footer";

class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#26292E",
      data: [],
      mobileDetail: false,
      title: "",
      count: 0,
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/course/getCourses/`,
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        console.log(response.data, "data");
        if (response.data.status === "success") {
          console.log(response.data, "response.dataZz");
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
      <div>
        <Header />
        <Breadcrumb
          BreadcumbTitle=""
          BreadcumbBigTitle={
            <div>
              Чихэвчээ зүү <FcHeadset size={35} />
            </div>
          }
          BreadcumbLinkText=""
        />
        {window.screen.width > 600 ? (
          <section style={{ marginBottom: "50px" }}>
            <div className="container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "50px",
                  fontFamily: "'Raleway', sans-serif",
                  padding: "1rem",
                  margin: "1rem",
                  border: `1px dashed ${this.state.color}`,
                }}
              >
                Өнгөний сонголт:
                <div
                  className={
                    this.state.color === "#26292E" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#26292E" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#26292E",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#EE5492" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#EE5492" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#EE5492",

                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#369DE0" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#369DE0" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#369DE0",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#4CAF50" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#4CAF50" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#4CAF50",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#3EBDBF" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#3EBDBF" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#3EBDBF",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
              <div className="row mp3_player_space_evently">
                <div className="col-md-6">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div
                      className="mp3_player"
                      style={{
                        backgroundColor: this.state.color,
                      }}
                    >
                      <div className="mp3_player_video">
                        <img src="https://i1.sndcdn.com/artworks-000413847528-iauhov-t500x500.jpg" />
                      </div>
                      <div className="mp3_player_title">
                        <div style={{ height: "80px " }}>
                          <TruncateMarkup lines={2}>
                            <span>
                              {this.state.data.length > 0
                                ? this.state.data[this.state.count].course_name
                                : ""}
                            </span>
                          </TruncateMarkup>
                        </div>
                        <div className="mp3_player_text">
                          <FcRating size={20} />
                          Post Malone
                          <FcRating size={20} />
                        </div>
                      </div>
                      <div
                        className="mp3_player_title"
                        style={{
                          backgroundColor: this.state.color,
                          marginTop: "1.6rem",
                        }}
                      >
                        <AudioPlayer
                          autoPlay
                          style={{
                            backgroundColor: this.state.color,
                            borderStyle: "none",
                          }}
                          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                          onPlay={(e) => console.log("onPlay")}
                        />

                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            padding: "0.8rem 0",
                          }}
                        >
                          <div className="mp3_player_control">
                            <div>
                              {" "}
                              <IoIosArrowUp
                                style={{ color: "white", padding: "0.2rem" }}
                                size={30}
                              />
                            </div>
                            <div className="mp3_player_control_row">
                              <IoIosArrowBack
                                style={{ color: "white", padding: "0.2rem" }}
                                onClick={
                                  this.state.count > 0
                                    ? () =>
                                        this.setState({
                                          count: this.state.count - 1,
                                        })
                                    : () => {
                                        this.setState({
                                          count: this.state.data.length - 1,
                                        });
                                      }
                                }
                                size={30}
                              />
                              <div className="mp3_player_control_row_circle">
                                {" "}
                                <IoIosPause
                                  style={{ color: "white" }}
                                  size={30}
                                />
                              </div>
                              <IoIosArrowForward
                                style={{ color: "white", padding: "0.2rem" }}
                                onClick={
                                  this.state.data.length > this.state.count + 1
                                    ? () =>
                                        this.setState({
                                          count: this.state.count + 1,
                                        })
                                    : () => {
                                        this.setState({
                                          count: 0,
                                        });
                                      }
                                }
                                size={30}
                              />
                            </div>
                            <div>
                              {" "}
                              <IoIosArrowDown
                                style={{ color: "white", padding: "0.2rem" }}
                                size={30}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="mp3_player_list">
                    <div
                      style={{
                        backgroundColor: this.state.color,
                        height: "740px",
                        width: "400px",
                        borderRadius: "1rem",
                        boxShadow:
                          "0 8px 22px 0 rgba(0, 0, 0, 0.2), 0 8px 22px 0 rgba(0, 0, 0, 0.19)",
                        padding: "1rem",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <BsMusicNoteList size={30} />
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "5px",
                            fontSize: "1.6rem",
                            border: "1px dashed white",
                            width: "30px",
                            height: "30px",
                          }}
                        >
                          {this.state.data.length}
                        </div>
                      </div>
                      <ScrollPanel style={{ height: "720px" }}>
                        {this.state.data.length > 0 &&
                          this.state.data.map((song, i) => (
                            <li
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                cursor: "pointer",
                              }}
                              onClick={() =>
                                this.setState({
                                  count: i,
                                })
                              }
                            >
                              {song.course_name}
                              <div className="mp3_player_list_time">3:40</div>
                            </li>
                          ))}
                      </ScrollPanel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section style={{ marginBottom: "50px" }}>
            <div className="container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "50px",
                  fontFamily: "'Raleway', sans-serif",
                  padding: "1rem",
                  margin: "1rem",
                  border: `1px dashed ${this.state.color}`,
                }}
              >
                Өнгөний сонголт:
                <div
                  className={
                    this.state.color === "#26292E" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#26292E" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#26292E",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#EE5492" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#EE5492" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#EE5492",

                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#369DE0" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#369DE0" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#369DE0",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#4CAF50" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#4CAF50" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#4CAF50",
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  className={
                    this.state.color === "#3EBDBF" ? "selectColor" : "unSelect"
                  }
                  onClick={() => this.setState({ color: "#3EBDBF" })}
                >
                  <div
                    style={{
                      height: "20px",
                      width: "20px",
                      borderRadius: "100%",
                      backgroundColor: "#3EBDBF",
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
              <div className="row mp3_player_space_evently">
                {this.state.mobileDetail === true ? (
                  <div className="col-md-6">
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <div
                        className="mp3_player"
                        style={{
                          backgroundColor: this.state.color,
                        }}
                      >
                        <BiArrowBack
                          size={30}
                          style={{ color: "white" }}
                          onClick={() => this.setState({ mobileDetail: false })}
                        />
                        <div className="mp3_player_video">
                          <img src="https://i1.sndcdn.com/artworks-000413847528-iauhov-t500x500.jpg" />
                        </div>
                        <div className="mp3_player_title">
                          <div style={{ height: "80px " }}>
                            <TruncateMarkup lines={2}>
                              <span>
                                {this.state.data.length > 0
                                  ? this.state.data[this.state.count]
                                      .course_name
                                  : ""}
                              </span>
                            </TruncateMarkup>
                          </div>
                          <div className="mp3_player_text">
                            <FcRating size={20} />
                            Post Malone
                            <FcRating size={20} />
                          </div>
                        </div>
                        <div
                          className="mp3_player_title"
                          style={{
                            backgroundColor: this.state.color,
                            marginTop: "1.6rem",
                          }}
                        >
                          <AudioPlayer
                            autoPlay
                            style={{
                              backgroundColor: this.state.color,
                              borderStyle: "none",
                            }}
                            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                            onPlay={(e) => console.log("onPlay")}
                          />

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              padding: "0.8rem 0",
                            }}
                          >
                            <div className="mp3_player_control">
                              <div>
                                {" "}
                                <IoIosArrowUp
                                  style={{ color: "white", padding: "0.2rem" }}
                                  size={30}
                                />
                              </div>
                              <div className="mp3_player_control_row">
                                <IoIosArrowBack
                                  style={{ color: "white", padding: "0.2rem" }}
                                  onClick={
                                    this.state.count > 0
                                      ? () =>
                                          this.setState({
                                            count: this.state.count - 1,
                                          })
                                      : () => {
                                          this.setState({
                                            count: this.state.data.length - 1,
                                          });
                                        }
                                  }
                                  size={30}
                                />
                                <div className="mp3_player_control_row_circle">
                                  {" "}
                                  <IoIosPause
                                    style={{ color: "white" }}
                                    size={30}
                                  />
                                </div>
                                <IoIosArrowForward
                                  style={{ color: "white", padding: "0.2rem" }}
                                  onClick={
                                    this.state.data.length >
                                    this.state.count + 1
                                      ? () =>
                                          this.setState({
                                            count: this.state.count + 1,
                                          })
                                      : () => {
                                          this.setState({
                                            count: 0,
                                          });
                                        }
                                  }
                                  size={30}
                                />
                              </div>
                              <div>
                                {" "}
                                <IoIosArrowDown
                                  style={{ color: "white", padding: "0.2rem" }}
                                  size={30}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-6">
                    <div className="mp3_player_list">
                      <div
                        style={{
                          backgroundColor: this.state.color,
                          height: "740px",
                          width: "400px",
                          borderRadius: "1rem",
                          boxShadow:
                            "0 8px 22px 0 rgba(0, 0, 0, 0.2), 0 8px 22px 0 rgba(0, 0, 0, 0.19)",
                          padding: "1rem",
                          color: "white",
                        }}
                      >
                        <div>
                          <BsMusicNoteList size={30} />
                        </div>
                        <ScrollPanel style={{ height: "720px" }}>
                          {this.state.data.length > 0 &&
                            this.state.data.map((song, i) => (
                              <li
                                key={i}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "space-between",
                                }}
                                onClick={() =>
                                  this.setState({
                                    mobileDetail: true,

                                    count: i,
                                  })
                                }
                              >
                                {song.course_name}
                                <div className="mp3_player_list_time">3:40</div>
                              </li>
                            ))}
                        </ScrollPanel>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        <Footer />
      </div>
    );
  }
}

export default Podcast;
