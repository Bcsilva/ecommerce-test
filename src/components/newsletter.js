import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Shelf() {
    const { register, handleSubmit, errorMsg } = useForm();
    const onSubmit = data => {
        
        axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', data)
        .then(response => console.log(data) )
        .catch(error => {
            console.error('There was an error!', error);
        });        
    };
        
    return (
        <section id="newsletter">
            <div className="container">
                <div className="newsletter-wrapper">
                    <h3>Participe de nossas news com promoções e novidades!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <div className="control is-expanded">
                                        <input type="text" className="input" placeholder="" autoComplete="off" {...register("name", { required: true})} />
                                    </div>
                                </div>
                                <div className="field">
                                    <div className="control is-expanded">
                                        <input type="email" className="input"placeholder="" autoComplete="off" {...register("email", { required: true, pattern: /^\S+@\S+$/i})} />
                                    </div>                                    
                                </div>
                                <div className="field">
                                    <div className="control is-expanded">
                                        <input type="submit" className="button is-primary is-fullwidth" name="submit" id="submit" />
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>       
    );
}