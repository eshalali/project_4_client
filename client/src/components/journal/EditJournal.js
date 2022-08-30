// import React, { useState } from 'react'
// // import {
// //     Modal,
// //     ModalOverlay,
// //     ModalContent,
// //     ModalHeader,
// //     ModalFooter,
// //     ModalBody,
// //     ModalCloseButton,
// //   } from '@chakra-ui/react'

// import {Modal} from 'react-bootstrap'
// import JournalForm from '../shared/JournalForm'

// const EditJournalModal = (props) => {
//     const { user, show, handleClose, updateJournal, msgAlert, triggerRefresh } = props

//     const [journal, setJournal] = useState(props.journal)

//     console.log('journal in edit', journal)

//     const handleChange = (e) => {
//         setJournal(prevJournal => {
//             let updatedValue = e.target.value
//             const updatedName = e.target.name

//             console.log('this is the input type', e.target.type)

//             const updatedJournal = {
//                 [updatedName]: updatedValue
//             }
//             return {
//                 ...prevJournal,
//                 ...updatedJournal
//             }
//         })
//     }

//     const handleSubmit = (e) => {
//         // e equals the event
//         e.preventDefault()

//         updateJournal(user, journal)
//             // if we're successful in the modal, we want the modal to close
//             .then(() => handleClose())
//             // send a success message to the user
//             .then(() => {
//                 msgAlert({
//                     heading: 'Success',
//                     message: 'Journal updated',
//                     variant: 'success'
//                 })
//             })
//             .then(() => triggerRefresh())
//             // if there is an error, tell the user about it
//             .catch(() => 
//                 msgAlert({
//                     heading: 'Failure',
//                     message: 'Could not update journal',
//                     variant: 'danger'
//                 })
//             )
//     }

//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton />
//             <Modal.Body>
//                 <JournalForm 
//                     journal={journal}
//                     handleChange={handleChange}
//                     handleSubmit={handleSubmit}
//                     heading="Update Journal"
//                 />
//             </Modal.Body>
//         </Modal>
//     )
// }

// export default EditJournal

import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import JournalForm from '../shared/JournalForm'

const EditJournalModal = (props) => {
    const { user, show, handleClose, updateJournal, msgAlert, triggerRefresh } = props

    const [journal, setJournal] = useState(props.journal)

    console.log('journal in edit modal', journal)

    const handleChange = (e) => {
        setJournal(prevJournal => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            const updatedJournal = {
                [updatedName]: updatedValue
            }
            return {
                ...prevJournal,
                ...updatedJournal
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        updateJournal(user, journal)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: 'Journal updated',
                    variant: 'info'
                })
            })
            // if everything is successful, we need to trigger our refresh for the show page
            // this is that setUpdated function in showPet component
            // updated is in ShowPet's useEffect's dependency array
            // changes to the updated boolean cause ShowPet's useEffect to run again.
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => 
                msgAlert({
                    heading: 'Failure!',
                    message: 'Could not update journal',
                    variant: 'secondary'
                })
            )
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <JournalForm 
                    journal={journal}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Journal"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditJournalModal