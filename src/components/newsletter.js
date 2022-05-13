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
                        <div className="form-row">
                            <input type="text" className="form-control" placeholder="" autoComplete="off" {...register("name", { required: true})} />
                            <input type="email" className="form-control"placeholder="" autoComplete="off" {...register("email", { required: true, pattern: /^\S+@\S+$/i})} />
                            <input type="submit" className="btn-submit is-primary" name="submit" id="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </section>       
    );
}