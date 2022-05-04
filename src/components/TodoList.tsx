import React, { useContext } from "react";
import TodoListItem from './TodoListItem';
import { TodoContext } from "../contexts/TodoContext";
import { TodoContextType } from "../contexts/TodoContextType";

const TodoList = () => {
   // criamos uma nova lista importando diretamente o tipo de dado
   const { todos } = useContext<TodoContextType>(TodoContext);

   return (
      <table className="uk-table">
         <caption>
            Lista de Tarefas
         </caption>
         <thead>
            <tr>
               <th>#</th>
               <th>Tarefa</th>
               <th>#</th>
            </tr>
         </thead>
         <tbody>
            {
               todos?.map(
                  todo => (<TodoListItem key={todo.id} todo={todo}></TodoListItem>)
               )
            }
         </tbody>
      </table>
   );
}

export default TodoList; 