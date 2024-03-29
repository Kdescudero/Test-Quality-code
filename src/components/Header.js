import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, makeStyles  } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const styles = makeStyles(theme => ({
   root: {
      flexGrow: 1,
   },
   menuButton: {
      marginRight: theme.spacing(2),
   },
   title: {
      flexGrow: 1,
   },
}));

const Header =()=>{
   const classes = styles();
   return(
      <div className={classes.root}>
         <AppBar position="static">
            <Toolbar>
               <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
               </IconButton>
               <Typography variant="h6" className={classes.title}>
                  Ensambladora De Accesorio
               </Typography>
            </Toolbar>
         </AppBar>
      </div>
   )
};

export default Header;
