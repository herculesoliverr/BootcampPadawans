import React from "react"
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid'
import CreateEventModal from "../create-event-modal/CreateEventModal.jsx"

import './Calendar.css'

export default () =>
    <section>
        <div className="content">
            <div id="calendar">
                <FullCalendar
                plugins={[ dayGridPlugin ]}
                initialView="dayGridMonth"
                height="70vh"
                locale='pt-br'
                events={'https://fullcalendar.io/demo-events.json?overload-day'}
                buttonText={
                    {today: 'Hoje'}
                }
                />
            </div>

            <div className="options">
                <ul>
                    <li><CreateEventModal/></li>
                    <li><button id="btnONG">ONGs Cadastradas</button></li>
                </ul>
            </div>

        </div>
    </section>
