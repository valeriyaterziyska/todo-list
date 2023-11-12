import Footer from './components/Footer';
import Header from './components/Header';
import Loading from './components/Loading';
import TodoList from './components/TodoList';

function App() {
  return (
    <>
      <Header />

      

      <main className="main">
        <section className="todo-list-container">
          <h1>Todo List</h1>

          <div className="add-btn-container">
            <button className="btn">+ Add new Todo</button>
          </div>

          <div className="table-wrapper">

            {/* <Loading /> */}

            {/* <!-- Todo list table --> */}
            <TodoList />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
