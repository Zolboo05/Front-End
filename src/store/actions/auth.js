import * as actionTypes from "./actionTypes";
import axios from "axios";
import { constants } from "../../constants";
import React from "react";
import ReactDOM from "react-dom";
import { RiErrorWarningLine } from "react-icons/ri";

export const login = () => {
  return {
    type: actionTypes.login,
  };
};
export const loginOut = () => {
  return {
    type: actionTypes.loginOut,
  };
};

export const profileSuccess = (data, token) => {
  console.group(data, "data");
  return {
    type: actionTypes.profileSuccess,
    first_name: data.firstname,
    last_name: data.lastname,
    username: data.username,
    token: token,
    email: data.email,
    phone: data.phone,
    card_count: data.card_count,
  };
};

export const profileDetail = (accessToken, toast) => {
  const requestOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    url: `${constants.apiUrl}/user/getProfile`,
    json: true,
  };
  return (dispatch) => {
    axios(requestOptions)
      .then((response) => {
        if (response.data.status === "success") {
          dispatch(profileSuccess(response.data.data, accessToken));
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
        toast.warning(
          <div style={{ display: "flex", alignItems: "center" }}>
            <RiErrorWarningLine size={30} style={{ marginRight: "0.2rem" }} />
            {"Холболтонд алдаа гарлаа"}
          </div>
        );
      });
  };
};
