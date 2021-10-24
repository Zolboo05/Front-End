import React, { Component } from "react";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import Footer from "../layouts/footer";
import { ScrollPanel } from "primereact/scrollpanel";
import TruncateMarkup from "react-truncate-markup";
import { ConfirmDialog } from "primereact/confirmdialog";
import { AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { HiBadgeCheck } from "react-icons/hi";
import { constants } from "../../constants";
import { IoCheckbox } from "react-icons/io5";
import ReactCountdownClock from "react-countdown-clock";
import { Checkbox, Row, Col, Skeleton } from "antd";
import { RiErrorWarningLine } from "react-icons/ri";

import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import Loading from "../layouts/loading";
import Result from "./result";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      answerLoading: false,
      resultPercent: 0,
      resultPoint: false,
      url: [
        "",
        "https://www.youtube.com/embed/-AbaV3nrw6E",
        "https://www.youtube.com/embed/FKoNh_naWms",
      ],

      description: "",
      timeVisable: false,
      name: "",
      exam_id: "",
      isLoading: true,
      question: [],
      answer: [],
      number: 0,
      isCertificate: false,
      title: [
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
        "Ихэнх сард 30 хоног байдаг. Мөн зарим сард 31 хоног байдаг. Тэгвэл хэдэн сард 28 хоног байдаг вэ ?",
        "IQ шалгах асуулт: Чамд 3 алим байсан гэж өгөгдөөгүй тул та өөртөө 2 алим авсан гэсэн үг",
        "Энэ сургалтаар бид юу үзэх вэ?",
      ],
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkBox = this.checkBox.bind(this);
    this.sendAnswer = this.sendAnswer.bind(this);
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
        console.log(response, "res");
        if (response.data.status === "success") {
          this.setState({
            description: response.data.data.exam.description,
            name: response.data.data.exam.name,
            question: response.data.data.exam.question,
            isLoading: false,
            exam_id: response.data.data.exam.id,
          });
          for (var i = 0; i < response.data.data.exam.question.length; i++) {
            const id = response.data.data.exam.question[i].id;

            this.setState({
              answer: {
                ...this.state.answer,
                [id]: "",
              },
            });
          }
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
    this.setState({
      answer: {
        ...this.state.answer,
        [this.state.question[this.state.number].id]: checkedValue,
      },
    });
    console.log("this.state.answer", this.state.answer);
  }

  sendAnswer() {
    this.setState({ timeVisable: true, answerLoading: true });
    toast.success(
      <div style={{ display: "flex", alignItems: "center" }}>
        <AiOutlineCheckCircle
          size={30}
          style={{ marginRight: "0.2rem", color: "white" }}
        />
        Илгээгдлээ
      </div>
    );
    const requestOptions1 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/exam/getExamResult`,
      data: { exam_id: this.state.exam_id, answer: this.state.answer },
      json: true,
    };
    axios(requestOptions1)
      .then((response) => {
        if (response.data.status === "success") {
          toast.success(
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineCheckCircle
                size={30}
                style={{ marginRight: "0.2rem", color: "white" }}
              />
              {response.data.message}
            </div>
          );
          this.setState({
            isCertificate: true,
            answerLoading: false,
            resultPercent: response.data.data.resultPercent,
            resultPoint: response.data.data.resultPoint,
          });
        } else {
          this.setState({ answerLoading: false });
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

    return this.state.answerLoading === false ? (
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
          BreadcumbBigTitle={this.state.name}
          BreadcumbLinkText="Reactjs"
        />
        {this.state.isCertificate === false ? (
          <section id="checkout" className="checkout-section">
            <div className="container">
              <div className="checkout-content">
                <div className="row" style={{ marginBottom: "40px" }}>
                  <div className="col-md-4">
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
                      {this.state.timeVisable === false ? (
                        <div>
                          <ConfirmDialog
                            visible={this.state.visible}
                            onClick={this.handleClick}
                            message="Шалгалт илгээхэд итгэлтэй байна уу ?"
                            icon="pi pi-exclamation-triangle"
                            accept={this.sendAnswer}
                            reject={reject}
                            acceptLabel="Тийм"
                            rejectLabel="Үгүй"
                          />

                          <div
                            className="btnSuccess"
                            onClick={this.handleClick}
                          >
                            Дуусгах
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </Skeleton>
                  </div>
                  <div className="col-md-8">
                    <div className="lessonDes1">
                      <Skeleton
                        loading={this.state.isLoading}
                        active
                        round={true}
                        rows={10}
                      >
                        <div className="lessonCountDown">
                          <ReactCountdownClock
                            seconds={10}
                            color="#3db1f2"
                            fontSize="1.8rem"
                            font="Roboto, sans-serif"
                            weight={16}
                            alpha={0.9}
                            size={160}
                            style={{ backgroudColor: "red" }}
                            paused={this.state.timeVisable}
                            pausedText="⌛"
                            onComplete={this.sendAnswer}
                          />
                        </div>
                        <div className="askNumber">{this.state.number + 1}</div>
                        <div className="askPoint">
                          {this.state.question.length > 0
                            ? this.state.question[this.state.number].point
                            : ""}{" "}
                          оноо
                        </div>
                        <div className="askTop">
                          <div className="askTitle">
                            {this.state.question.length > 0
                              ? this.state.question[this.state.number].name
                              : ""}
                          </div>

                          <div style={{ width: "100%" }}>
                            <Checkbox.Group
                              className="answer"
                              onChange={(checkedValue) => {
                                this.checkBox(checkedValue, this.state.number);
                              }}
                            >
                              {this.state.question.length > 0
                                ? this.state.question[
                                    this.state.number
                                  ].answer.map((item, i) => (
                                    <Checkbox key={i} value={item.id}>
                                      {item.name}
                                    </Checkbox>
                                  ))
                                : ""}
                            </Checkbox.Group>
                          </div>
                        </div>
                      </Skeleton>
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
                          if (
                            this.state.number <
                            this.state.question.length - 1
                          ) {
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
          </section>
        ) : (
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Result
                resultPercent={this.state.resultPercent}
                resultPoint={this.state.resultPoint}
                height="40rem"
                width="30rem"
              />
            </div>
          </div>
        )}
        )
        <Footer />
      </div>
    ) : (
      <Loading />
    );
  }
}

export default Test;
