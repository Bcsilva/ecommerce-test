import React, { Component } from 'react';
import logo from '../assets/logo.svg';

export default class Header extends Component {
render() {
    return (
        <header id="header">
            <div className="container">
                <nav className="navbar navbar-expand-md">
                    <a className="navbar-brand" href="http://google.com/"><img className="" src={logo} alt="Corebiz" width="170"/></a>   
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="d-flex w-100">
                            <form className="form-inline form-search-wrapper">
                                <div className="input-group form-search w-100">
                                    <input type="search" className="form-control" autoComplete='off' placeholder="O que você está procurando?"/>
                                    <button className="btn btn-search" type="submit">Search</button>                                
                                </div>

                            </form>
                            <div className="navbar-nav ml-auto account-actions-wrapper">
                                <div className="buttons">
                                    <a className="button is-light profile-menu" href="http://www.google.com/">
                                        <i></i><span>Minha conta</span>
                                    </a>
                                    <a className="button is-light minicart" href="http://www.google.com/">
                                        <i></i><span className="counter bg-danger text-white rounded-circle">{this.props.cart}</span>
                                    </a>                            
                                </div>
                            </div>                             
                        </div>
                       
                    </div>
                </nav>
                 
            </div>
             
        </header>
    );
 }
}