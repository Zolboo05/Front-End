import React, { Component } from "react";
import Logo from "../../assets/img/logo/logo-2.png";
import GaugeChart from "react-gauge-chart";
import { BsCheckBox } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { constants } from "../../constants";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";
import NumberFormat from "react-number-format";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
import axios from 'axios';
class Sell extends Component {
  constructor(props) {
    super(props);
  }

  pay(e, name) {
    this.setState({
      isLoading: false,
    });
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.props.accessToken}`,
        "Content-Type": "application/json",
      },
      url: `${constants.apiUrl}/payment/getAllPurchasePayment`,
      json: true,
      data: {
        course_id: e,
      },
    };
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          const requestOptions1 = {
            method: "POST",
            headers: {
              Authorization: `Bearer ${this.props.accessToken}`,
              "Content-Type": "application/json",
            },
            url: `${constants.apiUrl}/payment/getPaymentCard`,
            json: true,
          };
          axios(requestOptions1)
            .then((response) => {
              if (response.data.status === "success") {
                this.props.profileDetail(this.props.accessToken, toast);
                toast.success(
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <AiOutlineCheckCircle
                      size={30}
                      style={{ marginRight: "0.2rem", color: "white" }}
                    />
                    Амжилтай
                  </div>
                );
                this.setState({
                  data: response.data.data,
                  isLoading: true,
                });
              } else {
                toast.warning(
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <RiErrorWarningLine
                      size={30}
                      style={{ marginRight: "0.2rem" }}
                    />
                  </div>
                );
              }
            })
            .catch(function (error) {
              console.log(error);
              toast.warning(
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RiErrorWarningLine
                    size={30}
                    style={{ marginRight: "0.2rem" }}
                  />
                  {"Холболтонд алдаа гарлаа"}
                </div>
              );
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
      <div className="row">
        <div className="step-button">
          <div className="section-title-2  headline text-left">
            <h2>
              Order <span>Payment.</span>
            </h2>
          </div>
          <div className="payment-method">
            <div className="payment-method-header">
              <div className="row">
                <div className="col-md-6">
                  <div className="method-header-text">
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" defaultValue />
                        <span className="cr">
                          <i className="cr-icon fa fa-check" />
                        </span>
                        Credit or Debit Card
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="payment-img float-right">
                    <img
                      src={require("../../assets/img/banner/p-1.jpg")}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="check-out-form">
              <form action="#" method="post">
                <div className="payment-info">
                  <label className=" control-label">Name On Card :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter the name of your card"
                    defaultValue
                  />
                </div>
                <div className="payment-info">
                  <label className=" control-label">Card Number :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Enter Your Number"
                    defaultValue
                  />
                </div>
                <div className="payment-info input-2">
                  <label className=" control-label">Expired Date :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="MM"
                    defaultValue
                  />
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="YY"
                    defaultValue
                  />
                </div>
                <div className="payment-info input-2">
                  <label className=" control-label">CVV :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="CVV"
                    defaultValue
                  />
                </div>
                <div className="payment-info">
                  <label className=" control-label">Country :</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Select Your Country"
                    defaultValue
                  />
                </div>
              </form>
              <div className="method-header-text">
                <div className="checkbox save-credit">
                  <label>
                    <input type="checkbox" defaultValue />
                    <span className="cr text-uppercase bold-font">
                      <i className="cr-icon fa fa-check" />
                    </span>
                    SAVE YOUR CREDIT CARD FOR FUTURE PURCHASES
                    <span className="sub-text">
                      Your payment information is stored securely.{" "}
                      <b>Learn More</b>
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-method-header">
            <div className="row">
              <div className="col-md-6">
                <div className="method-header-text">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" defaultValue />
                      <span className="cr">
                        <i className="cr-icon fa fa-check" />
                      </span>
                      Paypal
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="payment-img float-right">
                  <img
                    src={require("../../assets/img/banner/p-2.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="genius-btn mt25 gradient-bg text-center text-uppercase  bold-font">
            <div
              onClick={() => {
                this.pay(1, this.props.accessToken);
              }}
            >
              Pay Now <i className="fas fa-caret-right" />
            </div>
          </div>
          <div className="terms-text pb45 mt25">
            <p>
              By confirming this purchase, I agree to the{" "}
              <b>Term of Use, Refund Policy</b> and <b>Privacy Policy</b>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    profileDetail: (token, toast) => {
      dispatch(actions.profileDetail(token, toast));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    accessToken: state.auth.accessToken,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sell);
