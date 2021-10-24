import React, { Component } from "react";
import SerTop from "../../assets/img/certificate/ser1.png";
import SerBottom from "../../assets/img/certificate/ser2.png";
import SerLogo from "../../assets/img/certificate/ser3.png";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import { FcApproval } from "react-icons/fc";

class Certificate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="container">
          <div className="certification">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                height: this.props.multi === true ? "25rem" : "50rem",
                width: this.props.multi === true ? "40rem" : "35rem",
                margin: "3rem 0px",
                borderRadius: "10px",
                padding: "5px",
                position: "relative",
              }}
            >
              <img src={SerTop} style={{ position: "absolute", top: "0" }} />
              <img
                src={SerLogo}
                style={{
                  position: "absolute",
                  top: this.props.multi === true ? "1rem" : "3rem",
                  width: this.props.multi === true ? "5rem" : "9rem",
                }}
              />
              <img
                src={SerBottom}
                style={{ position: "absolute", bottom: "0" }}
              />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "10px",
                  padding: "10px",
                  border: "2px solid #D9C091",
                  zIndex: "100",
                }}
              >
                <div
                  style={{
                    marginTop: this.props.multi === true ? "5rem" : "11rem",
                    fontFamily: "'Raleway', sans-serif",
                    color: "#0F3760",
                    fontSize: this.props.multi === true ? "1.4rem" : "2.4rem",
                    textAlign: "center",
                  }}
                >
                  СЕРТИФИКАТ
                </div>
                <div
                  style={{
                    marginTop: this.props.multi === true ? "0.5rem" : "2.4rem",
                    fontFamily: "'Playfair Display', serif",
                    textAlign: "center",
                    color: "#0F3760",
                    fontSize: this.props.multi === true ? "1rem" : "1.8rem",
                    width: "80%",
                    borderBottom: "1px solid #0F3760",
                  }}
                >
                  Баянмөнх Тэмүүжин
                </div>
                <div
                  style={{
                    marginTop: this.props.multi === true ? "1rem" : "1.5rem",
                    fontFamily: "'Raleway', sans-serif",
                    textAlign: "center",
                    color: "#0F3760",
                    fontSize: this.props.multi === true ? "0.8rem" : "1.2rem",
                    width: "80%",
                  }}
                >
                  "Онлайн сургалт" - аар явуулсан python ахисан түвшний мэдлэг
                  олгох хичээлийг амжилттай дүүргэсний батламжлан сертификат
                  олгов
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: this.props.multi === true ? "1rem" : "3.4rem",
                    fontFamily: "'Raleway', sans-serif",
                    textAlign: "center",
                    color: "#0F3760",
                    fontSize: this.props.multi === true ? "1rem" : "1.2rem",
                    width: "80%",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        color: "#0F3760",
                        fontSize: this.props.multi === true ? "1rem" : "1.2rem",
                        borderBottom: "1px solid #0F3760",
                      }}
                    >
                      2021/01/01
                    </div>
                    <div
                      style={{
                        fontFamily: "'Raleway', sans-serif",
                        color: "#0F3760",
                        fontSize: this.props.multi === true ? "1rem" : "1.2rem",
                        textAlign: "center",
                      }}
                    >
                      Огноо
                    </div>
                  </div>
                  <FcApproval
                    size={this.props.multi === true ? 40 : 60}
                    style={{}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Certificate;
