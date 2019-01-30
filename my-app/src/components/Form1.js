import React, {Component} from 'react';
import Input from './Input';
import ButtonForm from './Button';
import { ValidatorForm} from 'react-material-ui-form-validator';

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
            <ValidatorForm className="card-body" onSubmit={this.handleSubmit}>
             {/*  <div className="form-group">
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={this.handleInput}
                  placeholder="Title"
                  />
              </div> */}
              <Input 

                nameInput="title"
                onChangeInput = {this.handleInput}
                placeHolderInput = "Title"
              />
              <Input 
                nameInput="responsable"
                onChangeInput = {this.handleInput}
                placeHolderInput = "Responsable"
              />
              <Input 
                nameInput="descripcion"
                onChangeInput = {this.handleInput}
                placeHolderInput = "Descripcion"
              />
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
              <ButtonForm/>
            </ValidatorForm>
          </div>
        )
      }
    
    }
    
    export default Form1;