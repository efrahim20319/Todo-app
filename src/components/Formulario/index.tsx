import React from "react";
import Botao from "../Botao";

export default class Formulario extends React.Component {
  render() {
    return (
      <form>
        <div>
          <label></label>
          <input
            name="tarefa"
            id="tarefa"
            placeholder="O que voce quer estudar"
            required
            type="text"
          />
        </div>
        <div>
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
        <Botao />
      </form>
    );
  }
}
