
import { makeStyles, Theme} from '@material-ui/core/styles';
import logo from '../../pictures/logotipoOficial.png';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      height: '100px',
      width: '100%',
      color: theme.palette.primary.main,
    },
    logo: {
      width: '63px',
      height: '82px',
      display: 'flex',
      

    },
  }))

export default function LogoBar(){
    const classes = useStyles();

    return (
<Box  className={classes.root} justifyContent='flex-end' position='fixed'>
  <Box justifySelf='flex-end' m={3} p={2}>
    <img className={classes.logo} src={logo} alt="logo"/>
  </Box>
</Box>
    )
}


