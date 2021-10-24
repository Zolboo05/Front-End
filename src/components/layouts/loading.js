import React, { Component } from "react";
import HashLoader from "react-spinners/HashLoader";

class Loading extends Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
        }}
      >
        <HashLoader color="#3BA7FB" loading={true} size={100} />
      </div>
    );
  }
}

export default Loading;
