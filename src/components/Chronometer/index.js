import React from "react";
import Timer from "./Timer";

class Chronometer extends React.Component{
   
   state = {
     result : ''
   };

   getResponse=(res)=>{
     this.time = setTimeout(()=>{
         this.setState({
            result : res
         })
      },500)
   };

   render() {
      const { valuesForm } = this.props;
      clearTimeout(this.time);
      this.props.runningLocal(this.state.result);
      return  <Timer valuesForm = {valuesForm} handleValueLocal={(e)=>this.getResponse(e)}/>
   }
}

export default Chronometer;
