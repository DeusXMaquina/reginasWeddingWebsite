import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import './sidebar.css'
import SingleLineGridList from '../Countdown/SingleGridList'
import InfoContainer from '../InfoContainer/infoContainer'
import { useSelector, useDispatch } from 'react-redux'
import { ceremonia, banquete, after, hospedaje } from '../../Redux/Actions'
import Card from '../Card/card'
import RSVP from '../RSVP/RSVP'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      className={'Content'}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: 'transparent',
    display: 'flex',
    height: '100%',
    color: theme.palette.primary.main
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroudColor: 'transparent',
  },
  tabPanel: {
    height:'100%',
    minHeight:'969px'
  }
}))

function VerticalTabs(props:any) {
  const eventInformation = useSelector((state:{event:string, info:string, coordinates:{ lat:number, lng:number}, image:any}) => {
    return {
      event: state.event,
      info: state.info,
      coordinates: state.coordinates,
      image: state.image
    }
  })

  const dispatch = useDispatch()

  const classes = useStyles();
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
    switch (newValue) {
      case 2:
        dispatch(ceremonia())
        break
      case 3:
        dispatch(banquete())
        break
      case 4:
        dispatch(hospedaje())
        break
      case 8:
        dispatch(after())
        break
      default:
        dispatch(ceremonia())
    }
  }

  console.log(eventInformation)

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
        indicatorColor= 'secondary'
      >
        <Tab label="Home" {...a11yProps(0)} />
        <Tab label="Nosotros" {...a11yProps(1)} />
        <Tab label="Ceremonia" {...a11yProps(2)} />
        <Tab label="Recepcion" {...a11yProps(3)} />
        <Tab label="Hospedaje" {...a11yProps(4)} />
        <Tab label="Mesa de Regalos" {...a11yProps(5)} />
        <Tab label="RSVP" {...a11yProps(6)} />
        <Tab label="DressCode" {...a11yProps(7)} />
      </Tabs>
      <div className={classes.tabPanel}>
      <TabPanel value={value} index={0}>
        <p>Home</p> 
        <SingleLineGridList/>
      </TabPanel>
      </div>
      <TabPanel value={value} index={1}>
        <Card/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Ceremonia
        <InfoContainer {...eventInformation}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Recepcion
        <InfoContainer {...eventInformation}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        Hospedaje
        <InfoContainer {...eventInformation}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        Mesa de Regalos
      </TabPanel>
      <TabPanel value={value} index={6}>
        <RSVP/>
      </TabPanel>
      <TabPanel value={value} index={7}>
        DressCode
      </TabPanel>
    </div>
  )
}

/*const mapStateToProps = (state:any) => {
  return {
    event: state.event,
    coordinates: state.coordinates,
    image: state.image}
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    ceremonia: () => dispatch(ceremonia()),
    banquete: () => dispatch(banquete()),
    after: () => dispatch(after())
  }
}*/

// export default connect(mapStateToProps, mapDispatchToProps)(VerticalTabs)
export default VerticalTabs