import React, { useState } from 'react'
// import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalBody,
//     ModalCloseButton,
//     Button,
//   } from '@chakra-ui/react'
  import { Modal } from 'react-bootstrap'

//   import { useDisclosure } from '@chakra-ui/react'
import EventForm from '../shared/EventForm'
// import { createToy } from '../../api/toys'

const NewEventModal = (props) => {
    const { events, setEvents, user,  show, handleClose, triggerRefresh} = props

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
        setEvents(events)
        handleClose()
        console.log('events in add events', events)
        triggerRefresh()
    }
    // const BasicUsage = () => {
    //     const { isOpen, onOpen, onClose } = useDisclosure()
    //     return (
    //       <>
    //         <Button onClick={onOpen}>Add event</Button>
      
    //         <Modal isOpen={isOpen} onClose={onClose}>
    //           <ModalOverlay />
    //           <ModalContent>
    //             <ModalHeader>Modal Title</ModalHeader>
    //             <ModalCloseButton />
    //             <ModalBody>
    //                 <EventForm 
    //                     handleChange={handleChange}
    //                     handleSubmit={handleSubmit}
    //                     heading="New Event"
    //                 />
    //             </ModalBody>
    //           </ModalContent>
    //         </Modal>
    //       </>
    //     )
    //   }

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