
import { Container } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import  PropTypes  from 'prop-types';

const useStyles = makeStyles((theme: Theme) => ({
    root : {
        height:'100%',
        width: '100%',
        backgroundColor: "transparent",
        textAlign: 'center'
    }
}));

export default function ContainerInvisible ( props: {children: any}){
    const classes = useStyles();
    const {children}= props;

    return (
        <Container className = {classes.root}>
        {children}
        </Container>
    )
}

ContainerInvisible.prototypes= {
    children: PropTypes.node,
}