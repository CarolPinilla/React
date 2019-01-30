import React, { Component } from 'react';

class Input extends Component{
    render(){
        return(
            <div className="input">
                <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name={this.props.nameInput}
                      placeholder={this.props.placeHolderInput}
                      onChange = {this.props.onChangeInput}
                     />
              </div>
            </div>
        )
    }
}
export default Input;