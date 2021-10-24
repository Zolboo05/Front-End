import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../../assets/js/jquery.meanmenu.min.js";
import Login from "./login";
import logo from "../../assets/img/logo/logo.png";
import { BsFillPersonFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";

// Redux connect
import { connect } from "react-redux";
import * as actions from "../../store/actions";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div id="main-menu" className="main-menu-container">
          <div className="main-menu">
            <div className="container">
              <div className="navbar-default">
                <div className="navbar-header float-left">
                  <Link className="navbar-brand text-uppercase" to="/">
                    <img
                      style={{ width: "300px", height: "auto" }}
                      src={require("../../assets/img/logo/logo.png")}
                      alt="logo"
                    />
                  </Link>
                </div>

                {/* <div className="select-lang">
                  <select>
                    <option value={9}>ENG</option>
                    <option value={10}>BAN</option>
                    <option value={11}>ARB</option>
                    <option value={12}>FRN</option>
                  </select>
                </div> */}
                <div className="cart-search float-right ul-li">
                  <ul>
                    <li>
                      <a href="/checkout">
                        <i className="fas fa-shopping-bag" />
                      </a>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="toggle-overlay search-btn"
                      >
                        <i className="fas fa-search" />
                      </button>
                      <div className="search-body">
                        <div className="search-form">
                          <form action="#">
                            <input
                              className="search-input"
                              type="search"
                              placeholder="Search Here"
                            />
                            <div className="outer-close toggle-overlay">
                              <button type="button" className="search-close">
                                <i className="fas fa-times" />
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </li>
                    {this.props.isLogin === false ? (
                      <li>
                        <button
                          type="button"
                          className="toggle-overlay1 search-btn"
                        >
                          <BsFillPersonFill size={20} />
                        </button>
                        <div className="search-body1">
                          <div
                            className="search-form"
                            style={{ color: "#777777" }}
                          >
                            <div className="headerProfile">
                              <CgProfile
                                size={26}
                                className="headerProfileIcon"
                              />

                              {this.props.username !== undefined
                                ? this.props.username.charAt(0).toUpperCase() +
                                  this.props.username.slice(1)
                                : ""}
                            </div>
                            <div className="headerProfile">
                              <RiShoppingBasketFill
                                size={26}
                                className="headerProfileIcon"
                              />
                              {this.props.card_count === null
                                ? 0
                                : this.props.card_count}
                            </div>
                            <div
                              className="headerProfile"
                              onClick={() => this.props.loginOut()}
                            >
                              <IoExitOutline
                                size={26}
                                className="headerProfileIcon"
                              />
                              Гарах
                            </div>
                          </div>
                        </div>
                      </li>
                    ) : (
                      ""
                    )}
                  </ul>
                </div>
                {this.props.isLogin === true ? (
                  <div className="log-in float-right">
                    <a data-toggle="modal" data-target="#myModal" href="#">
                      Нэвтрэх
                    </a>
                    <Login />
                  </div>
                ) : (
                  ""
                )}

                <nav className="navbar-menu float-right">
                  <div className="nav-menu ul-li">
                    <ul>
                      <li className="menu-item-has-children ul-li-block">
                        <Link to="/">Нүүр</Link>
                      </li>
                      <li className="menu-item-has-children ul-li-block">
                        <Link to="/course">Сургалтууд</Link>
                      </li>
                      <li>
                        <Link to="/about-us">Заавар</Link>
                      </li>

                      {/* <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shop">shop</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li className="menu-item-has-children ul-li-block">
                        <Link to="/#!">Pages</Link>
                        <ul className="sub-menu">
                          <li>
                            <Link to="/teacher">Teacher</Link>
                          </li>
                          <li>
                            <Link to="/teacher-details">Teacher Details</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-single">Blog Single</Link>
                          </li>
                          <li>
                            <Link to="/course">Course</Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                          <li>
                            <Link to="/faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/checkout">CheckOut</Link>
                          </li>
                        </ul>
                      </li> */}
                    </ul>
                  </div>
                </nav>
                <div className="mobile-menu">
                  <div className="logo">
                    <Link to="/">
                      <img src={logo} alt="Logo" />
                    </Link>
                  </div>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">Home 1</Link>
                          </li>
                          <li>
                            <Link to="/home-2">Home 2</Link>
                          </li>
                          <li>
                            <Link to="/home-3">Home 3</Link>
                          </li>
                          <li>
                            <Link to="/home-4">Home 4</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>
                      <li>
                        <Link to="/shop">shop</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/#!">Pages</Link>
                        <ul>
                          <li>
                            <Link to="/teacher">Teacher</Link>
                          </li>
                          <li>
                            <Link to="/teacher-details">Teacher Details</Link>
                          </li>
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-single">Blog Single</Link>
                          </li>
                          <li>
                            <Link to="/course">Course</Link>
                          </li>
                          <li>
                            <Link to="/course-details">Course Details</Link>
                          </li>
                          <li>
                            <Link to="/faq">FAQ</Link>
                          </li>
                          <li>
                            <Link to="/checkout">CheckOut</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loginOut: () => {
      dispatch(actions.loginOut());
    },
  };
};
const mapStateToProps = (state) => {
  return {
    phone: state.auth.phone,
    email: state.auth.email,
    firstname: state.auth.firstname,
    username: state.auth.username,
    lastname: state.auth.lastname,
    card_count: state.auth.card_count,
    accessToken: state.auth.accessToken,
    isLogin: state.auth.isLogin,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
