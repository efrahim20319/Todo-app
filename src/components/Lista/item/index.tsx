import style from "../Lista.module.scss";

interface Task {
  tarefa: string;
  tempo: string;
}

export default function Item({ tarefa, tempo }: Task) {
  return (
    <li className={style.item}>
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
    </li>
  );
}
