import React from "react";

import OwlCarousel from 'react-owl-carousel';


const service_options = {
  margin: 85,
  responsiveClass: true,
  nav: false,
  autoplay: false,
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
    1000: {
      items: 3,

    }
  },
};


const testi_options = {
  margin: 85,
  responsiveClass: true,
  nav: false,
  autoplay: false,
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
    1000: {
      items: 2,

    }
  },
};


class WhyChooseUs extends React.Component {
  render() {
    return (
      <section id="why-choose-us" className="why-choose-us-section">
        <div className="jarallax  backgroud-style">
          <div className="container">
            <div className="section-title mb20 headline text-center ">
              <span className="subtitle text-uppercase">GENIUS ADVANTAGES</span>
              <h2>
                Reason <span>Why Choose Genius.</span>
              </h2>
            </div>
            <OwlCarousel
              {...service_options}
              id="service-slide-item"
              className="service-slide owl-carousel"
            >
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">The Power Of Education.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Best Online Education.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-list" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Education For All Student.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon ">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">The Power Of Education.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Best Online Education.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-list" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Education For All Student.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">The Power Of Education.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-clipboard-with-pencil" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Best Online Education.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
              <div className="service-text-icon">
                <div className="service-icon float-left">
                  <i className="text-gradiant flaticon-list" />
                </div>
                <div className="service-text">
                  <h3 className="bold-font">Education For All Student.</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectuerer adipiscing elit set
                    diam nonnumynibh euismod tincidun laoreet.
                  </p>
                </div>
              </div>
            </OwlCarousel>

            <div className="testimonial-slide">
              <div className="section-title-2 mb65 headline text-left ">
                <h2>
                  Students <span>Testimonial.</span>
                </h2>
              </div>
              <OwlCarousel
                id="testimonial-slide-item"
                className="testimonial-slide-area owl-carousel"
                {...testi_options}
              >
                <div className="student-qoute ">
                  <p>
                    ???This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we???ll be back in the future
                    lorem ipsum diamet.???
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
                <div className="student-qoute ">
                  <p>
                    ???This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we???ll be back in the future
                    lorem ipsum diamet.???
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
                <div className="student-qoute ">
                  <p>
                    ???This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we???ll be back in the future
                    lorem ipsum diamet.???
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
                <div className="student-qoute">
                  <p>
                    ???This was our first time lorem ipsum and we{" "}
                    <b> were very pleased with the whole experience</b>. Your
                    price was lower than other companies. Our experience was
                    good from start to finish, so we???ll be back in the future
                    lorem ipsum diamet.???
                  </p>
                  <div className="student-name-designation">
                    <span className="st-name bold-font">Robertho Garcia </span>
                    <span className="st-designation">Graphic Designer</span>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default WhyChooseUs;
