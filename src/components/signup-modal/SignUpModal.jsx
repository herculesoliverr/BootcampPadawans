import React, { useState } from "react";
import iconeNomeDoEvento from "../../assets/imagens/CriarEvento/name2-icon 2.png"; 
import iconeCnpj from "../../assets/imagens/CriarEvento/cnpj2-icon 4.png";
import iconeEmail from "../../assets/imagens/CriarEvento/email-icon 2.png";
import iconeFone from "../../assets/imagens/CriarEvento/fone-icon 3.png";
import iconeEndereco from "../../assets/imagens/CriarEvento/end-icon 1.png";
import iconeFoto from "../../assets/imagens/CriarEvento/foto2-icon 2.png";
import iconeClose from "../../assets/imagens/CriarEvento/x.png";
import iconeSenha from "../../assets/imagens/CriarEvento/cadeado-seguro.png";

import "./SignUpModal.css";

export default function SignUpModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    const values = {
        name: "",
        cnpj: "",
        email: "",
        phone: "",
        address: "",
        password: ""
    }
    
    const [ong, setOng] = useState(values);

    function onChange(ev) {
        const {name, value} = ev.target;

        setOng({...ong, [name]: value})
    }

    function onSubmit(ev){
        ev.preventDefault()

        const url = 'https://localhost:5001/Ong';
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(ong)
        });

        toggleModal()

        localStorage.setItem('user', ong.name);

        window.location.reload();
    }

    return (
        <>
            <button id="btnSign" onClick={toggleModal}>Cadastro ONGs</button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-cadastro">
                        <h2>Cadastro ONGs</h2>
                        <form className="form-cadastro" onSubmit={onSubmit}>
                            <div className="formGroup">
                                <label>
                                <img src={iconeNomeDoEvento} alt="Nome da ONG" />
                                </label>
                                <input type="text" placeholder="Nome da ONG" name="name" 
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
                                <img src={iconeEmail} alt="Email" />
                                </label>
                                <input type="text" placeholder="Email" name="email" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeFone} alt="Telefone" />
                                </label>
                                <input type="text" placeholder="Telefone" name="phone" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeEndereco} alt="Endereço" />
                                </label>
                                <input type="text" placeholder="Endereço" name="address" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeFoto} alt="Foto" />
                                </label>
                                <label className="foto-label">Insira uma foto da instituição</label>
                                <label htmlFor="foto" className="foto-upload">Escolher Arquivo</label>
                                <input type="file" accept=".jpg, .jpeg, .png" 
                                placeholder="Foto da Instituição" className="foto" id="foto" name="photo"/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeSenha} alt="Senha" />
                                </label>
                                <input type="password" placeholder="Senha" name="password" 
                                required onChange={onChange}/>
                            </div>
                            <div className="formGroup">
                                <label>
                                <img src={iconeSenha} alt="Confirme a Senha" />
                                </label>
                                <input type="password" placeholder="Confirme a Senha" 
                                name="passwordConfirm" required/>
                            </div>

                            <button className="btn-cadastro" type="submit" >Criar Conta</button>
                        </form>
                        <button className="close-modal-singUp" onClick={toggleModal}>
                            <img src={iconeClose} alt="X" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
