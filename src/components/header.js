import React, { Component, useState } from 'react';
import logo from '../assets/logo.svg';

export default class Header extends Component {
render() {
    return (
        <header id="header">
            <div className="container">
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <img className="" src={logo} alt="Corebiz"/>
                    </div>
                    <div className="navbar-menu">
                        <form>
                            <input type="search" className="form-control" autoComplete='off' placeholder="O que você está procurando?"/>
                        </form>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-light profile-menu" href="http://www.google.com/">
                                    <i></i><span>Minha conta</span>
                                </a>
                                <a className="button is-light minicart" href="http://www.google.com/">
                                    <i></i><span className="counter">{this.props.cart}</span>
                                </a>                            
                            </div>
                        </div>
                    </div>
                </nav>                 
            </div>
             
        </header>
    );
 }
}