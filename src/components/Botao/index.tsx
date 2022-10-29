import React from "react";
import style from "./Botao.module.scss";

interface Props {
  type?: "button" | "submit" | undefined,
  children?: React.ReactNode,
  onClick?: () => void
}
export default function Botao({ onClick, type, children }: Props) {
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}