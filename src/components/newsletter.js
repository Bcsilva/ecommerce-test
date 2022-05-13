import React, { Component } from 'react';
export default class Shelf extends Component {
render() {
    return (
      <section id="newsletter">
          <div className="container">
              <div className="newsletter-wrapper">
                  <h3>Participe de nossas news com promoções e novidades!</h3>
                  <form>
                      <div className="form-row">
                            <input type="text" className="form-control" name="name" id="name" placeholder="" autoComplete="off" />
                            <input type="email" className="form-control" name="email" id="email" placeholder="" autoComplete="off" />
                            <input type="submit" className="btn-submit is-primary" name="submit" id="submit" />
                      </div>
                  </form>
              </div>
          </div>
      </section>       
    );
 }
}