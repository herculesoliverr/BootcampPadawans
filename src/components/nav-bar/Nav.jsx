import React from 'react'
import SignUpModal from '../signup-modal/SignUpModal'
import LoginModal from '../login-modal/LoginModal'

import './Nav.css'

export default () => {

    function resetUser(){
        localStorage.removeItem('user')

        window.location.reload();
    }
    
    const userName = localStorage.getItem('user');
    
    return (
        <nav>
            <h1><i className="fas fa-globe-americas"></i> ONGarniza</h1>
            
            {userName === null ? 
                <div className='notLog'> 
                    <ul>
                        <li><SignUpModal/></li>
                        <li><LoginModal/></li>
                    </ul>
                </div> : 

                <div className='logged'>
                    <h1>Olá, {userName}</h1>
                    <span onClick={resetUser}>Sair</span>
                </div>
            }      
        </nav>
    )
}