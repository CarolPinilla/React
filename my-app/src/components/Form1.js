import React, {Component} from 'react';

class Form1 extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            responsable: '',
            descripcion: '',
            priority:'low'
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e){
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        //console.log(this.state);
    }                  

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }

    render() {
        return (
          <div className="card">
            <form className="card-body" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Title"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="responsable"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Responsable"
                  />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="descripcion"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Descripcion"
                  />
              </div>
              <div className="form-group">
                <select
                    name="priority"
                    className="form-control"
                    onChange={this.handleInput}
                  >
                  <option>low</option>
                  <option>medium</option>
                  <option>high</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </form>
          </div>
        )
      }
    
    }
    
    export default Form1;