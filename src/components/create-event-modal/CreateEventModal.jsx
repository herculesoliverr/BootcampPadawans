import React, { useState } from "react";

import "./CreateEventModal.css";

import iconeNomeDoEvento from "../../assets/imagens/CriarEvento/name2-icon 2.png"; 
import iconeData from "../../assets/imagens/CriarEvento/data-icon 2.png";
import iconeDoar from "../../assets/imagens/CriarEvento/doar-icon 2.png";
import iconeFone from "../../assets/imagens/CriarEvento/fone-icon 3.png";
import iconeHora from "../../assets/imagens/CriarEvento/Design sem nome 2.png";
import iconeLocal from "../../assets/imagens/CriarEvento/place-icon 2.png";
import iconeEmail from "../../assets/imagens/CriarEvento/email-icon 2.png";
import iconeDescricao from "../../assets/imagens/CriarEvento/name-icon 2.png";
import iconeCnpj from "../../assets/imagens/CriarEvento/cnpj2-icon 4.png";
import iconeClose from "../../assets/imagens/CriarEvento/x.png";

export default function CreateEventModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const values = {
        title: "",
        cnpj: "",
        local: "",
        hour: "",
        start: "",
        email: "",
        phone: "",
        donations: "",
        description: ""
    }
    
    const [event, setEvent] = useState(values);

    function onChange(ev) {
        const {name, value} = ev.target;

        setEvent({...event, [name]: value})
    }

    function onSubmit(ev){
        ev.preventDefault()

        const url = 'https://localhost:5001/Evento';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(event)
        });

        toggleModal()
        window.location.reload();
    }

    const userName = localStorage.getItem('user');

    return (
        <>
            <button onClick={toggleModal} id="btnCriar">Criar Evento</button>

            {userName != null ? 
            modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-evento">
                        <h2>Criar Evento</h2>
                        <form className="form-criar-evento"  onSubmit={onSubmit} >
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Nome do Evento" />
                                </label>
                                <input type="text" placeholder="Nome do Evento" name="title" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeCnpj} alt="CNPJ" />
                                </label>
                                <input type="text" placeholder="CNPJ" name="cnpj" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeLocal} alt="Local" className = "local"/>
                                </label>
                                <input type="text" placeholder="Local" name="local" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeHora} alt="horário"/>
                                </label>
                                <input type="text" placeholder="Horário" name="hour" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeData} alt="data"/>
                                </label>
                                <input type="date" placeholder="Data" name="start" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeEmail} alt="Email" />
                                </label>
                                <input type="text" placeholder="Email" name="email" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeFone} alt="Telefone"/>
                                </label>
                                <input type="text" placeholder="Telefone" name="phone" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeDoar} alt="Doações"/>
                                </label>
                                <input type="text" placeholder="Doações" name="donations" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeDescricao} alt="Descrição"/>
                                </label>
                                <input type="text" placeholder="Descrição" name="description" 
                                required onChange={onChange}/>
                            </div>
                    
                        <button className="btn-evento" type="submit">
                            Fazer Agendamento</button>
                        </form>

                        <button className="close-modal-createEvent" onClick={toggleModal}>
                            <img src={iconeClose} alt="X" />
                        </button>
                    </div>
                </div>
            ) : 
            modal && (
            <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-erro">
                        <h2>Erro!</h2>
                        <p>Você precisa estar conectado para criar um evento.</p> 
                        <p>Por favor, crie uma conta ou 
                        faça login!</p>

                        <button className="close-modal-createEvent" onClick={toggleModal}>
                            <img src={iconeClose} alt="X" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}