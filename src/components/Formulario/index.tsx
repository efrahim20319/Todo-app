import React from "react";
import Botao from "../Botao";
import style from "./Formulario.module.scss"

export default function Formulario() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label></label>
          <input
            name="tarefa"
            id="tarefa"
            placeholder="O que voce quer estudar"
            required
            type="text"
          />
        </div>
        <div className={style.inputContainer}>
          <label></label>
          <input
            step="1"
            name="tempo"
            id="tempo"
            type="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao>
          Adicionar
        </Botao>
      </form>
    );
  
}
