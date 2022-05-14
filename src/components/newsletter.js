import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Shelf() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        
        axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', data)
        .then(response => console.log(data) )
        .catch(error => {
            console.error(errors);
        });        
    };
        
    return (
        <section id="newsletter">
            <div className="container d-flex h-100">
                <div className="newsletter-wrapper">
                    <h3>Participe de nossas news com promoções e novidades!</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-inline w-100">
                            <div className="input-group w-100">
                                <div className="form-control is-expanded">
                                    <input type="text" className="input" placeholder="Digite seu nome" autoComplete="off" {...register("name", { required: true})} />
                                    {errors.name && <span className="text-danger">Preencha com seu nome completo</span>}
                                </div>
                                <div className="form-control is-expanded">
                                    <input type="email" className="input"placeholder="Digite seu email" autoComplete="off" {...register("email", { required: true, pattern: /^\S+@\S+$/i})} />
                                    {errors.email && <span className="text-danger">Preencha com um e-mail válido</span>}
                                </div>                                    
                                <div className="form-control is-expanded">
                                    <input type="submit" className="button is-primary is-fullwidth" name="submit" id="submit" value="Eu quero!" />
                                </div>   
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>       
    );
}