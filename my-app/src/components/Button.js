import React, {Component} from 'react';
import Button from '@material-ui/core/Button';


class ButtonForm extends Component{
    render(){
        return(          
           /*button type="submit" className="btn btn-primary">
                Guardar
        </button>*/
        <Button variant="raised" type="submit" color="primary">
                Guardar
        </Button>
        )
    }
}
export default ButtonForm;