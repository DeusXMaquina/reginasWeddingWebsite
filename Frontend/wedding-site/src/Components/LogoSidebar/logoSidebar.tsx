
import { makeStyles, Theme} from '@material-ui/core/styles';
import logo from '../../pictures/SyR.png';
import { Box } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: 'transparent',
      display: 'flex',
      height: '100px',
      width: '10%',
      color: theme.palette.primary.main,
      marginLeft: '90%',
      marginTop: '2%',
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
<Box  className={classes.root} justifySelf='flex-end' position='fixed' alignSelf='flex-end'>
    <img className={classes.logo} src={logo} alt="logo"/>
  </Box>
    )
}


