import React, { Component } from "react";
import HashLoader from "react-spinners/HashLoader";
import { constants } from "../../constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        name: "",
        password: "",
        register: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      },
      isLoading: true,
      loginTitle: "Нэвтрэх",
      reg: false,
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.submitForm1 = this.submitForm1.bind(this);
  }
  submitForm1(e) {
    e.preventDefault();
    this.setState({
      isLoading: false,
    });
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/user/createUser/`,
      json: true,
      data: {
        firstname: this.state.login.firstName,
        lastname: this.state.login.lastName,
        register: this.state.login.register,
        phone: this.state.login.phone,
        email: this.state.login.email,
        username: this.state.login.name,
        password: this.state.login.password,
      },
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({
            isLoading: true,
            reg: false,
          });
          toast.success(
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineCheckCircle
                size={30}
                style={{ marginRight: "0.2rem", color: "white" }}
              />
              {response.data.message}
            </div>
          );
        } else {
          this.setState({
            isLoading: true,
          });
          toast.error(
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineCloseCircle
                size={30}
                style={{ marginRight: "0.2rem", color: "white" }}
              />
              {response.data.message}
            </div>
          );
        }
      })
      .catch((error) => {
        toast.show({
          severity: "error",
          summary: "Холболтонд алдаа гарлаа",
          life: 5000,
        });
      });
  }

  submitForm(e) {
    e.preventDefault();
    this.setState({
      isLoading: false,
    });
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/user/login`,
      json: true,
      data: {
        username: this.state.login.name,
        password: this.state.login.password,
      },
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          this.setState({
            isLoading: true,
          });
          this.props.profileDetail(response.data.data.token, toast);
        } else {
          this.setState({
            isLoading: true,
          });
          toast.error(
            <div style={{ display: "flex", alignItems: "center" }}>
              <AiOutlineCloseCircle
                size={30}
                style={{ marginRight: "0.2rem", color: "white" }}
              />
              {response.data.message}
            </div>
          );
        }
      })
      .catch((error) => {
        toast.error({
          severity: "error",
          summary: "Холболтонд алдаа гарлаа",
          life: 5000,
        });
      });
  }
  changeHandler(e) {
    e.preventDefault();
    const field = e.target.getAttribute("name");
    let state = this.state;
    state.login[field] = e.target.value;
    this.setState({
      ...state.login,
      [field]: e.target.value,
    });
  }
  render() {
    return this.props.isLogin === true ? (
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog">
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

          <div className="modal-content">
            <div className="modal-header backgroud-style">
              <div className="gradient-bg"></div>
              <div className="popup-logo">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    width: "80px",
                    height: "80px",
                    borderRadius: "10px",
                    border: "1px solid #3ebdc2",
                    margin: "10px",
                  }}
                >
                  <img
                    style={{ width: "50px", padding: "5px" }}
                    src={require("../../assets/img/logo/small-logo.png")}
                    alt=""
                  />
                </div>
              </div>
              <div className="popup-text text-center">
                <h2>
                  {this.state.register === true ? "Бүртгүүлэх" : "Нэвтрэх"}
                </h2>
              </div>
            </div>

            <div className="modal-body">
              {this.state.isLoading === true ? (
                this.state.reg === false ? (
                  <form className="contact_form" onSubmit={this.submitForm}>
                    <div className="contact-info">
                      <input
                        className="email"
                        name="name"
                        type="text"
                        placeholder="Нэр*"
                        value={this.state.login.name}
                        required={true}
                        onChange={this.changeHandler}
                        autoComplete="off"
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        className="email"
                        name="password"
                        type="password"
                        value={this.state.login.password}
                        placeholder="Нууц үг*"
                        required={true}
                        onChange={this.changeHandler}
                        autoComplete="off"
                      />
                    </div>
                    <div className="nws-button text-center white text-capitalize">
                      <button type="submit" value="Submit">
                        Нэвтрэх
                      </button>
                    </div>
                    <div
                      className="register"
                      onClick={() => this.setState({ reg: true })}
                    >
                      Бүртгүүлэх
                      <HiOutlineArrowNarrowRight className="arrowRight" />
                    </div>
                  </form>
                ) : (
                  <form className="contact_form" onSubmit={this.submitForm1}>
                    <div className="contact-info">
                      <input
                        className="email"
                        name="lastName"
                        type="text"
                        placeholder="Овог*"
                        required={true}
                        value={this.state.login.lastName}
                        onChange={this.changeHandler}
                      />
                      <input
                        className="email"
                        name="firstName"
                        type="text"
                        placeholder="Нэр*"
                        required={true}
                        value={this.state.login.firstName}
                        onChange={this.changeHandler}
                      />
                    </div>

                    <div className="contact-info">
                      <input
                        className="email"
                        name="register"
                        type="text"
                        placeholder="Регистер*"
                        required={true}
                        value={this.state.login.register}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        className="email"
                        name="phone"
                        type="number"
                        placeholder="Дугаар*"
                        value={this.state.login.phone}
                        required={true}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        className="email"
                        name="email"
                        type="text"
                        placeholder="И-мэйл*"
                        value={this.state.login.email}
                        required={true}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        className="email"
                        name="name"
                        type="text"
                        placeholder="Хэрэглэгчийн нэр*"
                        value={this.state.login.name}
                        required={true}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="contact-info">
                      <input
                        className="email"
                        name="password"
                        type="password"
                        placeholder="Нууц үг*"
                        value={this.state.login.password}
                        required={true}
                        onChange={this.changeHandler}
                      />
                    </div>
                    <div className="nws-button text-center white text-capitalize">
                      <button type="submit" value="Submit">
                        Бүртгүүлэх
                      </button>
                    </div>
                    <div
                      className="registerBefore"
                      onClick={() =>
                        this.setState({
                          reg: false,
                        })
                      }
                    >
                      <HiOutlineArrowNarrowLeft className="arrowLeft" />
                      Нэвтрэх
                    </div>
                  </form>
                )
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    padding: "5rem",
                  }}
                >
                  <HashLoader color="#3BA7FB" loading={true} size={100} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-hidden="false"
      ></div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    profileDetail: (token, toast) => {
      dispatch(actions.profileDetail(token, toast));
    },
    profileSuccess: (data) => {
      dispatch(actions.profileSuccess(data));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
