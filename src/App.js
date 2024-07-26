import Todo from "./components/Todo";
import logo from './logo.svg';
import FilterButton from "./components/FilterButton"
import Form from "./components/Form";


function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  ));
  



  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>


        <div className="todoapp stack-large">
          <h1>TodoMatic</h1>
          <Form/>
          <div className="filters btn-group stack-exception">
           <FilterButton />
          </div>
          <h2 id="list-heading">3 tasks remaining</h2>
          <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading">
            {taskList}

          </ul>
        </div>

    
  );
}

export default App;
