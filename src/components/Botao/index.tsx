import React from "react";
import style from "./Botao.module.scss";

export default class Botao extends React.Component<{
  type?: "button" | "submit" | undefined;
  children?: React.ReactNode;
}> {
  render() {
    const { type = "button" } = this.props;
    return (
      <button type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}
