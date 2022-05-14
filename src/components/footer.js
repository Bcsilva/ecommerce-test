import React, { Component } from 'react';
import logo from '../assets/logo-alt.svg';
import logoVtex from '../assets/logo-vtex-alt.svg';

export default class Footer extends Component {
render() {
    return (
      <footer id="footer">
          <div className="container d-flex w-100 h-100">
              <div className="row w-100">
                  <div className="col">
                      <h5>Localização</h5>
                      <ul className="contact">
                          <li>Avenida Andrômeda 2000, Bloco 6 e 8</li>
                          <li>Alphaville SP</li>
                          <li>brasil@corebiz.com.br</li>
                          <li>+55 11 3090 1039</li>
                      </ul>
                  </div>
                  <div className="col">
                    <a href="http://www.google.com/" role="button" className="btn button btn-contact"><i></i>Entre em contato</a>
                    <a href="http://www.google.com/" role="button" className="btn button btn-call"><i></i>Fale com o nosso consultor online</a>
                  </div>
                  <div className="col">
                    <ul className="copyright">
                        <li><a href="http://www.google.com/"  rel="noopener noreferrer" target="_blank" role="button"><span>Created by </span><img src={logo} alt="Corebiz" /></a></li>
                        <li><a href="http://www.google.com/"  rel="noopener noreferrer" target="_blank" role="button"><span>Powered by </span><img src={logoVtex} alt="Vtex" /></a></li>
                    </ul>
                    
                  </div>                  
              </div>
          </div>
      </footer>       
    );
 }
}