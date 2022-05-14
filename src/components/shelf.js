import React, { Component } from 'react';
import Slider from "react-slick";
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

let errorMsg = '';



export default class Shelf extends Component {

constructor(props) {
    super(props);
    this.state = {
        products: [],
        cart: this.props.cart,
        errorMsg: ''
    };

}

componentDidMount(){
    console.log('this.state.products');    
    if (this.state.products.length <= 0){
        axios.get(`https://corebiz-test.herokuapp.com/api/v1/products`)
        .then(res => {
            this.setState({products: res.data});
            
        }).catch(function (error) {
            this.setState({errorMsg: 'Nenhum resultado a exibir'});
        }); 
           
    }

}

addToCart = (productId,productName,listPrice,price) => {
    console.log(productName);
    this.props.callback({
        'productId': productId,
        'productName': productName,
        'listPrice': listPrice,
        'price': price
    });
}

render() {
    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true
    };   
    
    

    return (
      <section id="shelf">
          <div className="container">
              <h3>Mais Vendidos</h3>
              <div className="shelf-wrapper">
              <Slider {...settings}>
                { this.state.products.map(product => 
                    <div key={'item-' + product.index + '-' + product.productName}>
                        <div className="shelf-product-wrapper" key={product.productName}>
                            <div className="shelf-product-img">
                                {product.listPrice && <span className="off">Desconto</span>}
                                <picture>
                                    <img src={product.imageUrl} alt={product.productName} />
                                </picture>
                            </div>
                            <div className="shelf-product-info">
                                <h4>{product.productName}</h4>
                                <div className={'product-stars product-stars-' + product.stars}></div>
                                <div className="product-pricing">
                                    <div className="product-listprice"><small>{(parseInt(product.listPrice)>0)?(parseInt(product.listPrice)/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):''}</small></div>
                                    <div className="product-price"><span className="product-price">{(parseInt(product.price)>0)?(parseFloat(product.price)/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}):''}</span></div>
                                </div>
                                <div className="product-installments">
                                    <small>{product.installments.map(item => {return item.quantity + ' x de ' + (parseFloat(item.value)/100).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})})}</small>
                                </div>
                                <div className="product-footer">
                                    <button type="button" className="button is-primary is-uppercase cta-buy" onClick={
                                        () => this.addToCart(product.productId,product.productName,product.listPrice,product.price)}>Comprar</button>
                                </div>
                            </div>                            
                        </div>

                    </div>
                )}
                </Slider>
                <div className="errorMsg">{errorMsg}</div>
              </div>
          </div>
      </section>       
    );
 }
}