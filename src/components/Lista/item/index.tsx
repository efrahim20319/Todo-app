import style from "../Lista.module.scss";
import { ITarefa } from "../../../types/tarefa";

interface Props extends ITarefa {
  selecionaTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  completado,
  selecionado,
  id,
  selecionaTarefa,
}: Props) {
  console.log("item atual: ", { tarefa, tempo, completado, selecionado, id });
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`}
      onClick={() =>
        selecionaTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
