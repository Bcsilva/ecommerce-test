import React, { Component } from 'react';
export default class Footer extends Component {
render() {
    return (
      <footer id="footer">
          <div className="container">
              <div className="row">
                  <div className="col">
                      <h5>Localização</h5>
                      <ul>
                          <li>Avenida Andrômeda 2000, Bloco 6 e 8</li>
                          <li>Alphaville SP</li>
                          <li>brasil@corebiz.com.br</li>
                          <li>+55 11 3090 1039</li>
                      </ul>
                  </div>
                  <div className="col">
                    <a href="http://www.google.com/" role="button"><i></i>Entre em contato</a>
                    <a href="http://www.google.com/" role="button"><i></i>Fale com o nosso consultor online</a>
                  </div>
                  <div className="col">
                    <ul>
                        <li><a href="http://www.google.com/"  rel="noopener noreferrer" target="_blank" role="button"><span>Created by </span><img src="" alt="Corebiz" /></a></li>
                        <li><a href="http://www.google.com/"  rel="noopener noreferrer" target="_blank" role="button"><span>Powered by </span><img src="" alt="Vtex" /></a></li>
                    </ul>
                    
                  </div>                  
              </div>
          </div>
      </footer>       
    );
 }
}