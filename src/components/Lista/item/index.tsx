import style from "../Lista.module.scss";
import { ITarefa } from "../../../types/tarefa";

export default function Item({ tarefa, tempo, completado, selecionado, id }: ITarefa) {
  console.log("item atual: ", { tarefa, tempo, completado, selecionado, id });
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
