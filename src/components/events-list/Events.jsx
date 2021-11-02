import React, { useState, useEffect} from "react"

import './Events.css'
import eventsList from "../../data/eventsList"

export default () =>{

    const [toogle, setToogle] = useState(true);

    const [altura, setAltura] = useState('100px');

    const [clicked, setCliked] = useState('');

    const [arrow, setArrow] = useState(
        <i className="fas fa-sort-down" onClick={e => setToogle(state => !state)}></i>
    );

    useEffect(() => {
        setAltura(() => toogle ? '100px': '165px');
    }, [toogle]);

    useEffect(() => {
        setArrow((state) => toogle ? 
        <i className="fas fa-sort-down" onClick={e => setToogle(state => !state)}></i> :
        <i className="fas fa-sort-up" onClick={e => setToogle(state => !state)}></i>);
    }, [toogle]);

    function showEventsList(){
            return eventsList.map(e =>
                <div key={e.id} className="card" 
                style={{height: clicked == e.id ? altura : '100px'}}>
                    
                    <div className="content">
                        <h3>{e.title}</h3>
                        <span>Dia: {e.start}</span>
                        <span>Hora: {e.hour}</span>
                        <span>Tipo de Doação: {e.donation}</span>
                        <span>Contato: {e.phone}</span>
                    </div>

                    {clicked == e.id ? 
                        <div onClick={ev => setCliked(() => e.id )}>
                            {arrow}
                        </div> : 
                        <div onClick={ev => setCliked(() => e.id )}>
                            <i className="fas fa-sort-down" onClick={e => setToogle(state => !state)}></i>
                        </div>
                    } 
                </div>
            )
        
    }

    return(
        <aside>
            <h1>Próximos Eventos</h1>
            {showEventsList()}
        </aside>
    )
}