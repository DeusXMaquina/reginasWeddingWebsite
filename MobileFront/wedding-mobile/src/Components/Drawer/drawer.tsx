import React, { useState } from 'react'
import { Drawer as MUIDrawer, List, ListItem, ListItemText, Button, makeStyles, Theme } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme:Theme) =>({
  list: {
    color: theme.palette.primary.main,
    width: 180,
  },
  fullList: {
    width: 'auto',
  },
}));

const Drawer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const list = () => {
    return (
      <List className={classes.list}>
        {['Home', 'Nosotros', 'Ceremonia', 'Recepcion', 'Hospedaje', 'Mesa de Regalos', 'RSVP', 'DressCode'].map((text) => (
            <ListItem button key={text}>
            <ListItemText primary={text} />
            </ListItem>
        ))}
      </List>
    )
  }
  return (
    <div><React.Fragment>
    <Button onClick={handleDrawerOpen}><MenuIcon/></Button>
    <MUIDrawer open={open} onClose={handleDrawerClose}>
      {list()}
    </MUIDrawer>
  </React.Fragment></div>
  )
}

export default Drawer