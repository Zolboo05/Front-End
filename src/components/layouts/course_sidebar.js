import React, { Component } from "react";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";

class CourseSidebar extends Component {
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
      <div className="side-bar">
        <div className="side-bar-widget  first-widget">
          <h2 className="widget-title text-capitalize">Шүүлтүүр</h2>
          <div className="listing-filter-form pb30">
            <form action="#" method="get">
              <div className="filter-select mb20">
                <label>Ангилал</label>
                <select
                  onChange={(e) => {
                    this.props.setCategory(e.target.value);
                  }}
                >
                  <option value="" selected="">
                    Бүх ангилал{" "}
                  </option>
                  {this.state.data.length > 0
                    ? this.state.data.map((item, i) => (
                        <option key={i} value={item.id}>
                          {item.name}
                        </option>
                      ))
                    : ""}
                </select>
              </div>

              <div className="filter-select mb20">
                <label>Шат</label>
                <select
                  onChange={(e) => {
                    this.props.setLevel(e.target.value);
                  }}
                >
                  <option value="">Бүгд</option>
                  <option value="Анхан">Анхан шат</option>
                  <option value="Ахисан">Ахисан түвшин</option>
                  <option value="Дунд">Дунд түвшин</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CourseSidebar;
