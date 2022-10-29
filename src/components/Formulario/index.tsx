import React, { useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from "./Formulario.module.scss";
import { v4 as uuidv4 } from "uuid";

interface Props {
  setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>;
}

export default function Formulario({ setTarefas }: Props) {
  const [tarefa, setTarefa] = useState("");
  const [tempo, setTempo] = useState("00:00");
  function adicionarTarefa(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTarefas((tarefasAntigas) => [
      ...tarefasAntigas,
      { tarefa, tempo, selecionado: false, completado: false, id: uuidv4() },
    ]);
    setTarefa("");
    setTempo("00:00");
  }
  return (
    <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
      <div className={style.inputContainer}>
        <label></label>
        <input
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(event) => {
            setTarefa(event.target.value);
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
          value={tempo}
          onChange={(event) => {
            setTempo(event.target.value);
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