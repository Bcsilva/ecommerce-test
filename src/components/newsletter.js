import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Shelf() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    

    const [feedback, setFeedback] = useState(0);


    const onSubmit = data => {
        
        axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', data)
        .then(response => {
            setFeedback(1);
            reset()
        }).catch(error => {
            setFeedback(1);
        });        
    };
        
    return (
        <section id="newsletter">
            <div className="container d-flex h-100">
                <div className="newsletter-wrapper m-auto">
                    <div className={'newsletter-step' + ((feedback!==0)?' d-none':'')}>
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
                    <div className={'newsletter-feedback text-center' + ((feedback===0)?' d-none':'')}>
                        <p><strong>{(feedback===1)?'Seu e-mail foi cadastrado com sucesso!':'Erro na requisição'}</strong>
                        <br/>{(feedback===1)?'A partir de agora você receberá as novidade e ofertas exclusivas.':'Seus dados não foram enviados, favor tentar novamente clicando no botão a seguir.'}</p>
                        <button onClick={() => setFeedback(0)} className="btn btn-primary cta-back">{(feedback===1)?'Cadastrar novo':'Voltar'}</button>
                    </div>
                </div>
            </div>
        </section>       
    );
}