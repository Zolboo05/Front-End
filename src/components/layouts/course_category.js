import React from "react";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";

class CourseCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
    };
  }
  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/course/getCategories`,
      json: true,
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
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
      <section id="course-category" className="course-category-section">
        <div className="container">
          <div className="section-title mb45 headline text-center ">
            <h2>Ангилалууд</h2>
          </div>
          <div className="category-item">
            <div className="row">
              {this.state.data.length > 0
                ? this.state.data.map((item, i) => (
                    <div key={i} className="col-md-3">
                      <div
                        className="category-icon-title text-center "
                        style={{
                          height: "185px",
                          borderRadius: "10px",
                          margin: "5px",
                          border: "1px solid #40BFE2",
                        }}
                      >
                        <div className="category-icon">
                          <i className="text-gradiant flaticon-technology" />
                        </div>
                        <div className="category-title">
                          <h4>{item.name}</h4>
                        </div>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CourseCategory;
