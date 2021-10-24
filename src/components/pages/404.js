import React, { Component } from "react";
import Header from "../layouts/header";
import Breadcrumb from "../layouts/breadcrumb";
import CourseSidebar from "../layouts/course_sidebar_single";
import Footer from "../layouts/footer";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { RiErrorWarningLine } from "react-icons/ri";
import { constants } from "../../constants";
import { now } from "lodash";
import { FcVideoCall } from "react-icons/fc";
import { MdPictureAsPdf, MdAudiotrack } from "react-icons/md";
import "./404.scss";

class NotFound extends Component {
  render() {
    return (
      <div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
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
        <Header />
        <div className="seaContainerBackground">
          <div class="seaContainer">
            <div class="seaContainerTitle">Хуудас олдсонгүй</div>
            <div class="submarine__container">
              <div class="light"></div>
              <div class="submarine__periscope"></div>
              <div class="submarine__periscope-glass"></div>
              <div class="submarine__sail">
                <div class="submarine__sail-shadow dark1"></div>
                <div class="submarine__sail-shadow light1"></div>
                <div class="submarine__sail-shadow dark2"></div>
              </div>
              <div class="submarine__body">
                <div class="submarine__window one"></div>
                <div class="submarine__window two"></div>
                <div class="submarine__shadow-dark"></div>
                <div class="submarine__shadow-light"></div>
                <div class="submarine__shadow-arcLight"></div>
              </div>
              <div class="submarine__propeller">
                <div class="propeller__perspective">
                  <div class="submarine__propeller-parts darkOne"></div>
                  <div class="submarine__propeller-parts lightOne"></div>
                </div>
              </div>
            </div>
            <div class="bubbles__container">
              <span class="bubbles bubble-1"></span>
              <span class="bubbles bubble-2"></span>
              <span class="bubbles bubble-3"></span>
              <span class="bubbles bubble-4"></span>
            </div>
            <div class="ground__container">
              <div class="ground ground1">
                <span class="up-1"></span>
                <span class="up-2"></span>
                <span class="up-3"></span>
                <span class="up-4"></span>
                <span class="up-5"></span>
                <span class="up-6"></span>
                <span class="up-7"></span>
                <span class="up-8"></span>
                <span class="up-9"></span>
                <span class="up-10"></span>
              </div>
              <div class="ground ground2">
                <span class="up-1"></span>
                <span class="up-2"></span>
                <span class="up-3"></span>
                <span class="up-4"></span>
                <span class="up-5"></span>
                <span class="up-6"></span>
                <span class="up-7"></span>
                <span class="up-8"></span>
                <span class="up-9"></span>
                <span class="up-10"></span>
                <span class="up-11"></span>
                <span class="up-12"></span>
                <span class="up-13"></span>
                <span class="up-14"></span>
                <span class="up-15"></span>
                <span class="up-16"></span>
                <span class="up-17"></span>
                <span class="up-18"></span>
                <span class="up-19"></span>
                <span class="up-20"></span>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
