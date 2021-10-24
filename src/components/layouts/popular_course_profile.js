import React from "react";
import { constants } from "../../constants";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import { connect } from "react-redux";

const options = {
  responsiveClass: false,
  nav: true,
  dots: true,
  autoplay: false,
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
      items: 1,
    },
    700: {
      items: 3,
    },
    800: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
};

const GrayBg = "popular-course-section popular-three";

class PopularCourseProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1",
      firstname: "",
      lastname: "",
      phone: "",
      register: "",
      isLoadingData: true,
      data: [],
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/user/showProfileData/`,
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        console.log(response.data.data, "ressssssss233e23");

        this.setState({
          data: response.data.data,
          isLoadingData: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return this.state.isLoadingData === false ? (
      <section
        id="popular-course"
        className={
          this.props.GrayBg === true
            ? "popular-course-section popular-three"
            : "popular-course-section"
        }
      >
        <div className="container">
          <div className="section-title  headline text-left ">
            <div style={{ height: "50px" }}></div>
          </div>
          <OwlCarousel {...options}>
            {this.state.data.length > 0
              ? this.state.data.map((item, i) => (
                  <div className="course-item-pic-text">
                    <div className="course-pic relative-position mb25">
                      <img src={item.image} alt="" />

                      <div className="course-details-btn">
                        <a href="#">
                          COURSE DETAIL <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                    <div
                      className="course-item-text"
                      style={{ color: "white" }}
                    >
                      <div className="course-meta">
                        <span className="course-category bold-font">
                          <a href="#">{item.category}</a>
                        </span>
                        {/* <span className="course-author bold-font">
                          John Luis Fernandes
                        </span> */}
                      </div>
                      <div className="course-title mt10 headline pb45 relative-position">
                        <h3>
                          <a href="#">{item.name}</a>{" "}
                        </h3>
                      </div>

                      {/* <div className="course-viewer ul-li">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fas fa-user" /> 1.220
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fas fa-comment-dots" /> 1.015
                      </a>
                    </li>
                    <li>
                      <a href="#">125k Unrolled</a>
                    </li>
                  </ul>
                </div> */}
                    </div>
                  </div>
                ))
              : ""}
          </OwlCarousel>
        </div>
      </section>
    ) : (
      ""
    );
  }
}
const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
  };
};

export default connect(mapStateToProps, null)(PopularCourseProfile);
