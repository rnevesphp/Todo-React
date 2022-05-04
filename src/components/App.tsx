import React from 'react';
import Navbar from './navbar';
import TodoList from './TodoList';
import TodoContext from '../contexts/TodoContext';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTodo from './AddTodo';
import { Routes } from 'react-router-dom';

const App = () => {
   return (
      <TodoContext>
         <Router>
            <Navbar></Navbar>
            <br />
            <div className="uk-container">
               <Routes>
                  <Route path="/create">
                     <AddTodo></AddTodo>
                  </Route>
                  <Route path="/">
                     <h4>Minha lista de tarefas</h4>
                     <TodoList></TodoList>
                  </Route>
               </Routes>
            </div>
         </Router>
      </TodoContext>
   );
}
export default App;