import { useEffect, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import TodoList from './components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3030/jsonstore/todos`)
      .then(res => res.json())
      .then(data => {
        const result = Object.keys(data).map(id => ({ id, ...data[id] }));
        setTodos(result);
        setIsLoading(false);
      })
  }, []);

  const onTodoAdd = () => {
    const lastId = Number(todos[todos.length - 1]._id);
    const text = prompt("New Task:");
    const newTask = { _id: lastId + 1, text, isCompleted: false };

    setTodos(state => [newTask, ...state]);
  }

  const toggleTodoStatus = (_id) => {
    setTodos(state => state.map(todo => todo._id === _id ? ({ ...todo, isCompleted: !todo.isCompleted }) : todo));
  };

  return (

    <>
      <Header />

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn" onClick={onTodoAdd}>+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {isLoading
              ? <Loading />
              : <TodoList todos={todos} toggleTodoStatus={toggleTodoStatus} />
            }

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
