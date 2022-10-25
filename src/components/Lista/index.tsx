import { ITarefa } from "../../types/tarefa";
import Item from "./item";
import style from "./Lista.module.scss"


export default function Lista({ tarefas }: { tarefas: ITarefa[] }) {
  
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <Item 
            key={index}
              {...item}
            />
          );
        })}
      </ul>
    </aside>
  );
}
