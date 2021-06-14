import React, { useState } from 'react'
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Button, makeStyles, Theme} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import './drawer.css'

const useStyles = makeStyles((theme:Theme) =>({
  list: {
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.light,
    width: 180
  },
  fullList: {
    width: 'auto',
  },
  drawer : {
    position: 'fixed',
    zIndex: 30
  }
}));

const Drawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  

  const list = () => {
    
   const handleButtonClick = (text: string) => {

    switch (text) {
      case 'Home':
        return ;
      case 'Ceremonia':
        document.getElementById('Ceremonia')?.scrollIntoView({behavior:'smooth'})
        return handleDrawerClose();
      case 'Recepcion':
        return document.getElementById('Banquete')?.scrollIntoView({behavior:'smooth'});
      case 'Hospedaje':
        return document.getElementById('hotel')?.scrollIntoView({behavior:'smooth'});
      case 'Mesa de Regalos':
        return document.getElementById('MesaRegalos')?.scrollIntoView({behavior:'smooth'});
      case 'Dress Code':
        return document.getElementById('DressCode')?.scrollIntoView({behavior:'smooth'});
      case 'Check In':
        return document.getElementById('CheckIn')?.scrollIntoView({behavior:'smooth'});

    }
    
  }
    return (
      <List className={classes.list}>
        {['Home', 'Ceremonia', 'Recepcion', 'Hospedaje', 'Mesa de Regalos', 'Dress Code', 'Check In'].map((text) => (
            <ListItem button key={text}  onClick={()=> handleButtonClick(text)}>
            <ListItemText className='MainColor' primary={text} />
            </ListItem>
        ))}
      </List>
    )
  }
  return (
    <React.Fragment key='drawer'>
    <div className={classes.drawer}>
      <Button onClick={handleDrawerOpen}><MenuIcon/></Button>
    <MUIDrawer open={open} classes={{paper:classes.list}} onClose={handleDrawerClose}>
      {list()}
    </MUIDrawer>
    </div>
    
  </React.Fragment>
  )
}

export default Drawer