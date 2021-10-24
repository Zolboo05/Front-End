import React, { Component } from "react";

const BreadcumbTitle = "Genius";
const BreadcumbBigTitle = "Contact";
const BreadcumbLinkText = "Contact";

class Breadcrumb extends Component {
  render() {
    return (
      <div>
        <section
          id="breadcrumb"
          className="breadcrumb-section relative-position backgroud-style"
        >
          <div className="blakish-overlay"></div>
          <div className="container">
            <div className="page-breadcrumb-content text-center">
              <div className="page-breadcrumb-title">
                <h2
                  className="breadcrumb-head black bold"
                  style={{
                    padding: "0.2rem",
                    opacity: "0.9",
                    padding: "1rem",
                    margin: "2rem",
                    borderRadius: "10px",

                    background:
                      "linear-gradient(to right, #01a6fd 0%, #17d0cf 51%, #01a6fd 100%)",
                  }}
                >
                  {this.props.BreadcumbTitle}{" "}
                  <span>{this.props.BreadcumbBigTitle}</span>
                </h2>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Breadcrumb;
