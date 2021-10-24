import React from "react";
import { constants } from "../../constants";
import OwlCarousel from "react-owl-carousel";
import axios from "axios";
import TruncateMarkup from "react-truncate-markup";
const options = {
  margin: 10,
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
      items: 2,
    },
    800: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const GrayBg = "popular-course-section popular-three";

class PopularNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "tab1",
      firstname: "",
      lastname: "",
      phone: "",
      register: "",
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/lesson/getlessons/`,
      data: { userId: this.props.id },
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        // console.log(response, "resss");
        // this.setState({
        //   firstname: response.data.data.firstname,
        //   lastname: response.data.data.lastname,
        //   phone: response.data.data.phone,
        //   register: response.data.data.register,
        //   email: response.data.data.email,
        // });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <section
        id="popular-course"
        className={
          this.props.GrayBg === true
            ? "popular-course-section popular-three"
            : "popular-course-section"
        }
      >
        <div className="container">
          <div className="section-title mb20 headline text-left ">
            {this.props.show !== false ? (
              <h2>
                <span className="text-gradiant">Шинэ</span> мэдээнүүд
              </h2>
            ) : (
              <div style={{ height: "50px" }}></div>
            )}
          </div>

          <OwlCarousel
            id="course-slide-item"
            className="course-slide owl-carousel"
            {...options}
          >
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">
                  <TruncateMarkup lines={2}>
                    <span>
                      Г.БАТБААТАР: ВАКЦИНЖУУЛАЛТ ЭНЭ ХУРДААР ЯВБАЛ ДӨРӨВДҮГЭЭР
                      САРД ӨВЧЛӨЛ НЭМЭГДЭНЭ
                    </span>
                  </TruncateMarkup>
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
            <div className="container_image">
              <img
                src={require("../../assets/img/course/c-2.jpg")}
                alt="Avatar"
                className="image"
              />
              <div className="overlay1">
                <div className="texts1">Hello World</div>

                <div className="texts">
                  lide in Overlay from the Bottomlide in Overlay from the
                  Bottomlide in Overlay from the Bottomlide in Overlay from the
                  Bottom
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
    );
  }
}

export default PopularNews;
