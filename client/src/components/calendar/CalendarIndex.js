import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";  
import { Button, Modal } from 'react-bootstrap'

import React, { useState, useEffect } from 'react' 

import NewEventModal from "./AddEvent"


const Calendar = () => {  
    const [eventModalShow, setEventModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const [events, setEvents] = useState([]) 
    // const events  = [{title: 'Meeting', date: '2022-08-29'}] 

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
                <Button onClick={() => setEventModalShow(true)}
                            className="m-2" variant="info"
                        >
                            Add an event
                </Button>
                <FullCalendar  
                    defaultView="dayGridMonth"  
                    plugins={[dayGridPlugin]}  
                    events={events}  
                />
                <NewEventModal 
                events={events}
                setEvents = {setEvents}
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
