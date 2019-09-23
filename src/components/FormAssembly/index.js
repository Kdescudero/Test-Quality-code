import React, {Component} from 'react';
import Form from './form'

class FormAssembly extends Component {

   state = {
      form : {
         selectClass : '',
         subClass    : '',
         task        : ''
      }
   };

   handleOnchange=(e)=>{
     this.setState({
        form : {
           ...this.state.form,
           [e.target.name] : e.target.value
        }
     },()=>localStorage.setItem('DataInfo', JSON.stringify(this.state.form)));
   };

   render() {
      return (
         <Form
            valuesForm  = {this.state.form}
            onChange    = {this.handleOnchange}
         />
      );
   }
}

export default FormAssembly
