import React, { Component } from "react";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import Footer from "../layouts/footer";
import { ScrollPanel } from "primereact/scrollpanel";
import TruncateMarkup from "react-truncate-markup";
import HTMLFlipBook from "react-pageflip";
import BookFront from "../../assets/img/book/book-havtas.jpg";
import BookPage from "../../assets/img/book/book-body.jpg";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { HiBadgeCheck } from "react-icons/hi";
import { constants } from "../../constants";
import { IoCheckbox } from "react-icons/io5";
import { Skeleton } from "antd";
import { RiErrorWarningLine } from "react-icons/ri";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkBox = this.checkBox.bind(this);
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/exam/getExamsByCourseId`,
      data: { courseId: this.props.match.params.id },
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({
            description: response.data.data.exam.description,
            name: response.data.data.exam.name,
            question: response.data.data.exam.question,
            isLoading: false,
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
            Холболтонд алдаа гарлаа
          </div>
        );
      });
  }

  checkBox(checkedValue, number) {
    console.log("number", number);
    this.setState({ answer: { ...this.state.answer, [number]: checkedValue } });
    console.log("this.state.answer", this.state.answer);
  }

  sendAnswer() {
    console.log("Duuslaa");
  }

  handleClick() {
    if (this.state.visible === false) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  }
  render() {
    const accept = () => {
      toast.success(
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineCheckCircle
            size={30}
            style={{ marginRight: "0.2rem", color: "white" }}
          />
          Илгээгдлээ
        </div>
      );
    };

    const reject = () => {
      toast.error(
        <div style={{ display: "flex", alignItems: "center" }}>
          <AiOutlineCloseCircle
            size={30}
            style={{ marginRight: "0.2rem", color: "white" }}
          />
          Цуцлагдлаа
        </div>
      );
    };

    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={1500}
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
          BreadcumbBigTitle="Skype for Business"
          BreadcumbLinkText="Reactjs"
        />

        {/* <section id="checkout" className="checkout-section"> */}
        <div className="container">
          <div className="checkout-content">
            <div className="row" style={{ marginBottom: "40px" }}>
              {/* <div className="col-md-4">
                  <Skeleton
                    loading={this.state.isLoading}
                    active
                    round={true}
                    rows={10}
                  >
                    <div className="lessonBackground">
                      <div className="lessonInner1">
                        <HiBadgeCheck size={30} color="#00c07f" />
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <div style={{ color: "#333333" }}>Шалгалт</div>
                          <div
                            style={{
                              color: "gray",
                              marginLeft: "5px",
                              fontSize: "1.2rem",
                              fontWeight: "300",
                            }}
                          >
                            ({this.state.question.length} асуулт)
                          </div>
                        </div>
                      </div>
                    </div>
                    {this.state.question.length > 12 ? (
                      <ScrollPanel className="screenList">
                        <ol className="lessonUl">
                          {this.state.question.length > 0
                            ? this.state.question.map((item, i) => (
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
                                  >
                                    {i + 1}
                                  </div>
                                  <div
                                    className={
                                      this.state.number === i
                                        ? "acticeLessonContent"
                                        : "lessonContent"
                                    }
                                  >
                                    <TruncateMarkup lines={1} key={i}>
                                      <span>{item.name}</span>
                                    </TruncateMarkup>
                                    <div
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "400",
                                        color: "#3CABF8",
                                      }}
                                    >
                                      {this.state.number === i ? (
                                        <IoCheckbox size={20} />
                                      ) : (
                                        <IoCheckbox size={20} color="white" />
                                      )}
                                      {this.state.number === i ? (
                                        <AiFillEye size={20} />
                                      ) : (
                                        <>{item.point} оноо</>
                                      )}
                                    </div>
                                  </div>
                                </li>
                              ))
                            : ""}
                        </ol>
                      </ScrollPanel>
                    ) : (
                      <ol className="lessonUl">
                        {this.state.question.length > 0
                          ? this.state.question.map((item, i) => (
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
                                >
                                  {i + 1}
                                </div>
                                <div
                                  className={
                                    this.state.number === i
                                      ? "acticeLessonContent"
                                      : "lessonContent"
                                  }
                                >
                                  <TruncateMarkup lines={1} key={i}>
                                    <span>{item.name}</span>
                                  </TruncateMarkup>
                                  <div
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "400",
                                      color: "#3CABF8",
                                    }}
                                  >
                                    {this.state.number === i ? (
                                      <IoCheckbox size={20} />
                                    ) : (
                                      <IoCheckbox size={20} color="white" />
                                    )}
                                    {this.state.number === i ? (
                                      <AiFillEye size={20} />
                                    ) : (
                                      <>{item.point} оноо</>
                                    )}
                                  </div>
                                </div>
                              </li>
                            ))
                          : ""}
                      </ol>
                    )}

                    <div>
                      <ConfirmDialog
                        visible={this.state.visible}
                        onClick={this.handleClick}
                        message="Шалгалт илгээхэд итгэлтэй байна уу ?"
                        icon="pi pi-exclamation-triangle"
                        accept={accept}
                        reject={reject}
                        acceptLabel="Тийм"
                        rejectLabel="Үгүй"
                      />

                      <div className="btnSuccess" onClick={this.handleClick}>
                        Дуусгах
                      </div>
                    </div>
                  </Skeleton>
                </div> */}
              <div className="col-md-12">
              <div className="lessonBackgroundImage">
                  <HTMLFlipBook
                    width={window.screen.width > 500 ? 400 : 300}
                    height={window.screen.width > 500 ? 550 : 400}
                    showCover={true}
                    updateFromImages={BookFront}
                  >
                    <img src={BookFront} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                    <img src={BookPage} className="demoPage" />
                  </HTMLFlipBook>
                </div>
                <div
                  style={{
                    display: "flex",
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
                      } else {
                        toast.warning(
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <RiErrorWarningLine
                              size={30}
                              style={{ marginRight: "0.2rem" }}
                            />
                            Цаашаа асуулт дууссан байна
                          </div>
                        );
                      }
                    }}
                  >
                    Өмнөх
                  </div>
                  <div
                    className="btnCourseView btnCourseViewRight"
                    onClick={() => {
                      if (this.state.number < this.state.question.length - 1) {
                        this.setState({
                          number: this.state.number + 1,
                        });
                      } else {
                        toast.warning(
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <RiErrorWarningLine
                              size={30}
                              style={{ marginRight: "0.2rem" }}
                            />
                            Цаашаа асуулт дууссан байна
                          </div>
                        );
                      }
                    }}
                  >
                    Дараах
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}

        <Footer />
      </div>
    );
  }
}

export default Book;
