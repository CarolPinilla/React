import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { todos } from './todos.json';
import Form1 from './components/Form1';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(todo){
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  handleRemove(index){
    if (window.confirm('¿Esta seguro de eliminar la tarea?')){
      this.setState({
        //filter recorre uno a uno los elementos que cumplan x condicion y devuelve un arreglo
        todos: this.state.todos.filter((e, i) =>{
          return i !== index
        })
      })
    }
  }


  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.descripcion}</p>
              <p><mark>{todo.responsable}</mark></p>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.handleRemove.bind(this, i)}>
                Borrar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <p className="text-white">Task
          <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </p>
        </nav>

        <div className="container">

          <div className="row mt-4">
            <div className="col-md-3">
              <Button variant="raised" color="primary">
                Hello World
              </Button>
              <Form1 onAddTodo={this.handleAddTodo}/>
            </div> 
            <div className="col-md-9">
              <div className="row">
                {todos}
              </div>            
            </div>           
          </div>          

          </div>

      </div>
    );
  }
}

export default App;
