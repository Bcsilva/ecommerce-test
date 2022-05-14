import React, { Component } from 'react';
import Slider from "react-slick";


function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
}

const images = importAll(require.context('../assets/slides/', false, /\.(png|jpe?g|svg)$/));

const feed = [
    {pre:'Olá o que você tá buscando?', title:'Criar ou migrar seu e-commerce?', link:'https://www.google.com.br?v=1.1', bg:'slide-desktop-slide1.png',bg_mobile:'slide-mobile-slide1.png'},
    {pre:'Olá o que você tá buscando?(1)', title:'Criar ou migrar seu e-commerce?(1)', link:'https://www.google.com.br?v=1.2', bg:'slide-desktop-slide1.png',bg_mobile:'slide-mobile-slide1.png'},
    {pre:'Olá o que você tá buscando?(2)', title:'Criar ou migrar seu e-commerce?(2)', link:'https://www.google.com.br?v=1.3', bg:'slide-desktop-slide1.png',bg_mobile:'slide-mobile-slide1.png'},
    {pre:'Olá o que você tá buscando?(3)', title:'Criar ou migrar seu e-commerce?(3)', link:'https://www.google.com.br?v=1.4', bg:'slide-desktop-slide1.png',bg_mobile:'slide-mobile-slide1.png'},
    {pre:'Olá o que você tá buscando?(4)', title:'Criar ou migrar seu e-commerce?(4)', link:'https://www.google.com.br?v=1.5', bg:'slide-desktop-slide1.png',bg_mobile:'slide-mobile-slide1.png'},
    {pre:'Olá o que você tá buscando?(5)', title:'Criar ou migrar seu e-commerce?(5)', link:'https://www.google.com.br?v=1.6', bg:'slide-desktop-slide1.png',bg_mobile:'slide-mobile-slide1.png'},
];




export default class Slideshow extends Component {


render() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };    
    return (
        <section id="slideshow">
            <div className="slideshow-wrapper">
                <div className="slideshow-slider slider">
                <Slider {...settings}>
                    {
                        feed.map(feed => 
                            <div key={'slide' + feed.index + '-' + feed.name}>
                            <div className="slideshow-slide-inner">
                                <div className="slideshow-slider-inner-bg">
                                    <picture>
                                        <source media="(max-width: 512px)" srcSet={images[feed.bg_mobile]} />
                                        <source media="(max-width: 768px)" srcSet={images[feed.bg]} />
                                        <img src={images[feed.bg]} alt={feed.title} />
                                    </picture>
                                </div>
                                <div className="slideshow-slide-inner-content">
                                    <div className="container">
                                        <a href={feed.link} className="slideshow-slide-inner-content-link" title={feed.title}>
                                            <h4>{feed.pre}</h4>
                                            <h5>{feed.title}?</h5>
                                        </a>                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    )}
                </Slider>
                    
                </div>
            </div>
        </section>
    );
 }
}