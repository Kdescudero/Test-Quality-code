import React, { Component } from "react";
import { Icon, IconButton, Typography } from '@material-ui/core'
import './styles.css'

class Timer extends Component {

   constructor(props) {
      super(props);
      this.state = JSON.parse(localStorage.getItem('timer'));

      if (!this.state) {
         this.state = this.saveChanges({
            running: false,
            value: 0
         });
      }
   }

   componentDidMount() {
      if (this.state.running) {
         setInterval(
            () => this.forceUpdate(),
            1000
         );
      }
   }

   saveChanges(state) {
      if ('timer') {
         localStorage.setItem('timer', JSON.stringify(state));
      }
      return state;
   }

   handleStartTime = () => {
      const now = Date.now();
      this.setState(({ running, value }) => {
         if (running) return null;
         setInterval(
            () => this.forceUpdate(),
            1000
         );
         return this.saveChanges({
            running: true,
            value: value - now
         });
      });
   };

   handleResetTime = () => {
      this.setState(({ running, value }) => {
         return this.saveChanges({
            running: false,
            value: 0
         });
      });
   };

   render() {
      const { running, value } = this.state;
      const { valuesForm } = this.props;
      const disable = (valuesForm.task.length === 0 ) || (valuesForm.selectClass.length === 0 ) || (valuesForm.subClass.length === 0 );

      this.props.handleValueLocal(JSON.parse(localStorage.getItem('timer')));

      const timestamp = running ? Date.now() + value : value;
      const h = Math.floor(timestamp / 3600000);
      const m = Math.floor(timestamp / 60000) % 60;
      const s = Math.floor(timestamp / 1000) % 60;

      return (
         <div className='container_chronometer'>
            <Typography>{(h) + ":"}</Typography>
            <Typography>{(m) + ":"}</Typography>
            <Typography>{(s)}</Typography>

            <div className='btn_actions'>
               {running
                  ?
                  <IconButton onClick={this.handleResetTime}>
                     <Icon>stop</Icon>
                   </IconButton>
                  :
                  <IconButton disabled={disable} onClick={this.handleStartTime}>
                     <Icon>play_circle_outline</Icon>
                  </IconButton>
               }
            </div>
         </div>
      );
   }
}

export default Timer;
