import React, { Component } from "react";
import Auxiliary from '../Auxiliary/Auxiliary';
import Header from '../../components/Header/header';
import Footer from '../../components/Footer/footer';
import classes from './Layout.css';

class Layout extends Component {

    state = {};

    render() {

        return (
            <Auxiliary>
                <Header/>
                <main className={classes.Layout}>{this.props.children}</main>
                <Footer/>
            </Auxiliary>
        )
    }
}

export default Layout;