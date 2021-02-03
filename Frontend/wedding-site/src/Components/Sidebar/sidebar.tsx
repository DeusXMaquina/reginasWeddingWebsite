import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import './sidebar.css'
import AddressContainer from '../AddressContainer/addressContainer'
import { connect } from 'react-redux'
import { ceremonia, banquete, after } from '../../Actions'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const direccion: {lat:number, lng:number} = {
  lat: 20.30262,
  lng: -103.25023
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    flexGrow: 1,
    backgroundColor: 'transparent',
    display: 'flex',
    height: '969px',
    color: theme.palette.primary.main
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    backgroudColor: 'transparent'
  },
}))

function VerticalTabs(props:any) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0)

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }

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
      </Tabs>
      <TabPanel value={value} index={0}>
        Home
      </TabPanel>
      <TabPanel value={value} index={1}>
        Nosotros
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AddressContainer address={direccion}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        Recepcion
      </TabPanel>
      <TabPanel value={value} index={4}>
        Hospedaje
      </TabPanel>
      <TabPanel value={value} index={5}>
        Mesa de Regalos
      </TabPanel>
      <TabPanel value={value} index={6}>
        RSVP
      </TabPanel>
    </div>
  )
}

const mapStateToProps = (state:any) => {
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
}

export default connect(mapStateToProps, mapDispatchToProps)(VerticalTabs)