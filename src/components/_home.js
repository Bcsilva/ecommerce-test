import React, { Component } from 'react';
import Header from './header';
import Slideshow from './slideshow';
import Shelf from './shelf';
import Newsletter from './newsletter';
import Footer  from './footer';

export default class Home extends Component {
    state = { 
        cart : [] 
    }

    getCartData = () => {
        return this.state.cart;
    }    

    setCartData = (cartData) => {
        this.setState({cart: [...this.state.cart, cartData]});
        //this.getCartData();
        //console.log(11);
    }



    render() {
            
        return (
            <div>
                <Header cart={this.getCartData().length} />
                <Slideshow />
                <Shelf callback={this.setCartData} cart={this.state.cart} />
                <Newsletter />
                <Footer />
            </div>
        );    
    }
}