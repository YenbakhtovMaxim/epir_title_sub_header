import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

class Hello extends Component {
  render() {
    return (
      <div className="activity_sub_dir_header">
        <h1>Документы</h1>
      </div>
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById("root"));
