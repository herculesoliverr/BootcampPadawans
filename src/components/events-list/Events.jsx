import React, { useState, useEffect} from "react"

import './Events.css'
import eventsList from "../../data/eventsList"

export default () =>{
    const [toogle, setToogle] = useState(true);

    const [altura, setAltura] = useState('100px');

    const [arrow, setArrow] = useState(
    <i className="fas fa-sort-down" onClick={e => setToogle(state => !state)}></i>
    );

    useEffect(() => {
        setAltura((state) => toogle ? '100px': '165px');
    }, [toogle]);

    useEffect(() => {
        setArrow((state) => toogle ? 
        <i className="fas fa-sort-down" onClick={e => setToogle(state => !state)}></i> :
        <i className="fas fa-sort-up" onClick={e => setToogle(state => !state)}></i>);
    }, [toogle]);

    function showEventsList(element, index){
            const { element, index } = props;
            return(
                <div key={e.id} className="card" style={{height: eventsList[index].title == e.title ? altura : '100px'}}>
                    <div className="content">
                        <h3>{e.title}</h3>
                        <span>Dia: {e.start}</span>
                        <span>Hora: {e.hour}</span>
                        <span>Tipo de Doação: {e.donation}</span>
                        <span>Contato: {e.phone}</span>
                    </div>
                    {arrow}
                </div>
            )
        
    }

 

    return(
        <aside>
            <h1>Próximos Eventos</h1>
            {eventsList.map(showEventsList(e,index))}
        </aside>
    )
}