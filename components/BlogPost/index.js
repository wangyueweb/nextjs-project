import React from "react";
import { Input, Button } from "antd";

const { TextArea } = Input;
export default class extends React.Component {
  render() {
    return (
      <>
        <TextArea value={this.props.data} {...this.props.name}/>
      </>
    );
  }
}
