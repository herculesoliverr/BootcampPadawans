import React, { useState } from "react";
import iconeCnpj from "../../assets/imagens/CriarEvento/cnpj2-icon 4.png";
import iconeClose from "../../assets/imagens/CriarEvento/x.png";
import iconeSenha from "../../assets/imagens/CriarEvento/cadeado-seguro.png";

import "./LoginModal.css";

export default function LoginModal() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <>
            <button id="btnLogin" onClick={toggleModal}>Acesso ONGs</button>

            {modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content-login">
                        <h2>Login</h2>
                        
                        <form className="form-login">
                            <div className="formGroup">
                                <label>
                                <img src={iconeCnpj} alt="CNPJ" />
                                </label>
                                <input type="text" placeholder="CNPJ" name="cnpj" required/>
                            </div>
                            
                            <div className="formGroup">
                                <label>
                                <img src={iconeSenha} alt="Senha" />
                                </label>
                                <input type="text" placeholder="Senha" name="password" required/>
                            </div>

                            <button className="btn-login" type="submit">Entrar</button>

                            <div className="login-options">
                                <button type="button">Esqueci Minha Senha</button>
                                <button type="button">Cadastre-Se</button>
                            </div>
                        </form>
                        <button className="close-modal-login" onClick={toggleModal}>
                            <img src={iconeClose} alt="X" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}