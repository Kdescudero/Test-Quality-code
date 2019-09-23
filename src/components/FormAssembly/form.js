import React from 'react'
import { TextField, Select, MenuItem, FormControl, InputLabel, Card, Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import Chronometer from '../Chronometer'
import './styles.css'

class Form extends React.Component{

   state = {
      runningLocal : ''
   };

   getRunning=(result)=>{
      this.timer = setTimeout(()=>{
         this.setState({
            runningLocal : result
         })
      },200)
   };

   componentDidMount() {
      clearTimeout(this.timer);
   }

   render() {
      const { valuesForm, onChange } = this.props;
      const { runningLocal } = this.state;
      const { selectClass, subClass, task } = valuesForm;
      const { running } = runningLocal;
      const infoLocalStorage = JSON.parse(localStorage.getItem('DataInfo'));

      let descSubClass = '';
      let descClass = '';
      let descTask = '';

      if(infoLocalStorage){
         descSubClass = infoLocalStorage.subClass;
         descClass = infoLocalStorage.selectClass;
         descTask = infoLocalStorage.task;
      }

      const products = [
         {id: 1, name: 'Collares'},
         {id: 2, name: 'Anillos'},
         {id: 3, name: 'Aretes'},
      ];

      const productsSubClass = [
         {id: 1, name: 'Cadena trenzada'},
         {id: 2, name: 'marfil'},
         {id: 3, name: 'Circón'},
         {id: 4, name: 'zafiro'},
         {id: 5, name: 'Oro'},
         {id: 6, name: 'Mariposa'},
         {id: 7, name: 'Cruz'},
         {id: 8, name: 'Bolitas'},
      ];

      return (
         <Card className='root'>
            <form action="" className='form'>

               <TextField
                  label='Descripcion de la tarea'
                  multiline
                  rowsMax="5"
                  name='task'
                  onChange={onChange}
                  disabled={!!running}
               />

               <FormControl className='Form_Control' disabled={(task.length === 0) || (!!running)}>
                  <InputLabel>Clases</InputLabel>
                  <Select
                     name='selectClass'
                     value={selectClass}
                     onChange={onChange}
                  >
                     {products.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem> )}
                  </Select>
               </FormControl>

               <FormControl className='Form_Control' disabled={(selectClass.length === 0) || (task.length === 0) || (!!running)}>
                  <InputLabel htmlFor="select-multiple">SubClase</InputLabel>
                  <Select
                     onChange={onChange}
                     name='subClass'
                     value={subClass}
                  >
                     {productsSubClass.map(item => <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem> )}
                  </Select>
               </FormControl>

            </form>
            <Chronometer valuesForm={valuesForm} runningLocal={(e)=>this.getRunning(e)} />
            <Table>
               <TableHead>
                  <TableRow>
                     <TableCell>Clase</TableCell>
                     <TableCell align="right">Subclase</TableCell>
                     <TableCell align="right">Descripción de la tarea</TableCell>
                     <TableCell align="right">Fecha y hora inicio</TableCell>
                     <TableCell align="right">Fecha y hora Fin</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <TableRow>
                     <TableCell component="th" scope="row">{descClass}</TableCell>
                     <TableCell align="right">{descSubClass}</TableCell>
                     <TableCell align="right">{descTask}</TableCell>
                     <TableCell align="right"></TableCell>
                     <TableCell align="right"></TableCell>
                  </TableRow>
               </TableBody>
            </Table>
         </Card>
      )
   }
}

export default Form;
