import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";  
import { Button } from 'react-bootstrap'

import React, { useState, useEffect } from 'react' 

import NewEventModal from "./AddEvent"

const Calendar = () => {  
    const [eventModalShow, setEventModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const events = []  

    useEffect(() => {
    }, [updated])
    
    console.log('the events', events)
        return (  
            <div className="container">  
                <div className="row title" style={{ marginTop: "20px" }} >  
                    <div class="col-sm-12 btn btn-info">  
                        Calendar  
               </div>  
                </div>  
                <FullCalendar  
                    defaultView="dayGridMonth"  
                    plugins={[dayGridPlugin]}  
                    events={events}  
                />
                <Button onClick={() => setEventModalShow(true)}
                            className="m-2" variant="info"
                        >
                            Add an event
                </Button>
                <NewEventModal 
                events={events}
                show={eventModalShow}
                // user={user}
                // msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEventModalShow(false)} 
                />
            </div>  
        )  
    }  

  
export default Calendar  
