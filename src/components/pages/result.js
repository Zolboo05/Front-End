import React, { Component } from "react";
import Logo from "../../assets/img/logo/logo-2.png";
import GaugeChart from "react-gauge-chart";
import { BsCheckBox } from "react-icons/bs";
import { FcOk, FcSynchronize } from "react-icons/fc";

class Result extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background:
            "linear-gradient(to right, #01a6fd 0%, #17d0cf 51%, #01a6fd 100%)",
          height: this.props.height,
          width: this.props.width,
          margin: "3rem 0px",
          borderRadius: "10px",
          padding: "5px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            backgroundColor: "white",
            margin: "10px",
            padding: "10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={Logo}
              style={{ width: "12rem", height: "2.5rem", marginBottom: "2rem" }}
            />
            <div
              style={{
                color: "#333333",
                fontSize: "2rem",
                margin: "1.5rem",
                display: "flex",
                alignItems: "center",
                fontFamily: " 'Alegreya', serif",
              }}
            >
              Шалгалтын дүн
            </div>
            <GaugeChart
              id="gauge-chart5"
              nrOfLevels={420}
              arcsLength={[0.3, 0.5, 0.2]}
              colors={["#44CFD0", "#40C0E0", "#3BA8FB"]}
              percent={this.props.resultPercent / 100}
              arcPadding={0.02}
              needleColor="#44CFCF"
              textColor="black"
              animDelay={200}
            />
            {this.props.resultPoint === true ? (
              <div
                style={{
                  color: "#333333",
                  fontSize: "2rem",
                  margin: "4rem",
                  display: "flex",
                  alignItems: "center",
                  color: "#4CAF50",
                  fontWeight: "500",
                  fontFamily: "'Alegreya', serif",
                }}
              >
                <FcOk
                  size={35}
                  style={{ color: "#4CAF50", marginRight: "5px" }}
                />{" "}
                Тэнцсэн
              </div>
            ) : (
              <div
                style={{
                  color: "#333333",
                  fontSize: "2rem",
                  margin: "4rem",
                  display: "flex",
                  alignItems: "center",
                  color: "#F68032",
                  fontWeight: "500",
                  fontFamily: "'Alegreya', serif",
                }}
              >
                <FcSynchronize
                  size={35}
                  style={{ color: "#4CAF50", marginRight: "5px" }}
                />{" "}
                Тэнцсэнгүй
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Result;
