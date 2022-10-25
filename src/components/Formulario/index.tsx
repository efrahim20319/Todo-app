import React from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";
export default class Formulario extends React.Component<{
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}> {
  public state = {
    tarefa: "",
    tempo: "00:00",
  };

  adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    this.props.setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { ...this.state,
        selecionado: false, 
        completado: false, 
        id: uuidv4() 
      },
    ]);
    this.setState({ tarefa: "", tempo: "00:00" });
  }
  render(): React.ReactNode {
    return (
      <form
        className={style.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={style.inputContainer}>
          <label></label>
          <input
            name="tarefa"
            id="tarefa"
            value={this.state.tarefa}
            onChange={(event) => {
              this.setState({ ...this.state, tarefa: event.target.value });
            }}
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
            value={this.state.tempo}
            onChange={(event) => {
              this.setState({ ...this.state, tempo: event.target.value });
            }}
            type="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao type="submit">Adicionar</Botao>
      </form>
    );
  }
}
