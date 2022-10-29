import React from "react";
import style from "./Botao.module.scss";

export default class Botao extends React.Component<{
  type?: "button" | "submit" | undefined,
  children?: React.ReactNode,
  onClick?: () => void
}> {
  render() {
    const { type = "button", onClick } = this.props;
    return (
      <button onClick={onClick} type={type} className={style.botao}>
        {this.props.children}
      </button>
    );
  }
}
