import React, { useState } from 'react'
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Button, makeStyles, Theme, Typography } from '@material-ui/core'
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
    return (
      <List className={classes.list}>
        {['Home', 'Ceremonia', 'Recepcion', 'Hospedaje', 'Mesa de Regalos', 'DressCode', 'Check In'].map((text) => (
            <ListItem button key={text}>
            <ListItemText className='MainColor' primary={text} />
            </ListItem>
        ))}
      </List>
    )
  }
  return (
    <React.Fragment>
    <Button onClick={handleDrawerOpen}><MenuIcon/></Button>
    <MUIDrawer open={open} classes={{paper:classes.list}} onClose={handleDrawerClose}>
      {list()}
    </MUIDrawer>
  </React.Fragment>
  )
}

export default Drawer