import React from 'react'
import Header from './Header.js'
import Container from '@material-ui/core/Container'


const Layout = props => (
    // With React.Fragment we don't need div wrapper
    <React.Fragment>
        <Header/>
        <Container>
            {props.children}
        </Container>
    </React.Fragment>
);

export default Layout