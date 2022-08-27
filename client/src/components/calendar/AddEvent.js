import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import EventForm from '../shared/EventForm'
// import { createToy } from '../../api/toys'

const NewEventModal = (props) => {
    const { events, user,  show, handleClose, triggerRefresh} = props

    const [event, setEvent] = useState({})

    const handleChange = (e) => {
        setEvent(prevEvent => {
            let value = e.target.value
            const name = e.target.name

            const updatedEvent = {
                [name]: value
            }
            return {
                ...prevEvent,
                ...updatedEvent
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        events.push(event)
        triggerRefresh()
        console.log('events in add events', events)
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <EventForm 
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="New Event"
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewEventModal