import React, { Component } from "react";
import SerTop from "../../assets/img/certificate/ser1.png";
import SerBottom from "../../assets/img/certificate/ser2.png";
import CheckOut from "../../assets/img/shop/checkout.jpg";
import Header from "./header";
import Breadcrumb from "./breadcrumb";
import { FcApproval } from "react-icons/fc";

class Buy extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div
          className="certification"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            backgroundImage: `url(${CheckOut})`,
            backgroundRepeat: "no-repeat, repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: this.props.width,
            borderRadius: "10px",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "30rem",
              margin: "3rem 0px",
              borderRadius: "10px",
              padding: "5px",
              position: "relative",
            }}
          >
            {/* <img src={SerTop} style={{ position: "absolute", top: "0" }} />
            <img
              src={SerLogo}
              style={{ position: "absolute", top: "3rem", width: "9rem" }}
            />
            <img
              src={SerBottom}
              style={{ position: "absolute", bottom: "0" }}
            /> */}
            <div
              style={{
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                margin: "10px",
                padding: "10px",
                zIndex: "5",
              }}
            >
              <div
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "white",
                  fontSize: "2.4rem",
                  textAlign: "left",
                  width: "80%",
                  fontWeight: "500",
                }}
              >
                {this.props.title}
              </div>
              <div
                style={{
                  marginTop: "2.4rem",
                  fontFamily: "'Playfair Display', serif",
                  textAlign: "center",
                  color: "white",
                  fontSize: "1.8rem",
                  width: "80%",
                  padding: "0.5rem",
                  background:
                    "linear-gradient(to right, rgb(1, 166, 253) 0%, rgb(23, 208, 207) 100%",
                  borderBottomLeftRadius: "30px",
                  borderTopRightRadius: "30px",
                }}
              >
                Баянмөнх Тэмүүжин
              </div>
              <div
                style={{
                  marginTop: "1.5rem",
                  fontFamily: "'Raleway', sans-serif",
                  textAlign: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  width: "80%",
                }}
              >
                "Онлайн сургалт" - аар явуулсан python ахисан түвшний мэдлэг
                олгох хичээлийг{" "}
                <div style={{ color: "#8BC34A" }}>Aмжилттай</div> худалдаж авлаа
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "3.4rem",
                  fontFamily: "'Raleway', sans-serif",
                  textAlign: "center",
                  color: "white",
                  fontSize: "1.2rem",
                  width: "80%",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      color: "white",
                      fontSize: "1.5rem",
                      borderBottom: "1px solid white",
                    }}
                  >
                    2021/01/01
                  </div>
                  <div
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      color: "white",
                      fontSize: "1.2rem",
                      textAlign: "center",
                    }}
                  >
                    Огноо
                  </div>
                </div>
                <FcApproval size={60} style={{}} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Buy;
