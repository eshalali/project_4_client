import { useState } from 'react'
import { createJournal } from '../../api/journal'
import { useNavigate } from 'react-router-dom'
import JournalForm from '../shared/JournalForm'
// import JournalIndex from './JournalIndex'

const CreateJournal = (props) => {
    console.log('these are the props in createJournal\n', props)
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [journal, setJournal] = useState({
        title: '',
        date: '',
        entry: ''
    })

    console.log('this is journal in createJournal', journal)

    const handleChange = (e) => {
        setJournal(prevJournal => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            console.log('this is the input type', e.target.type)

            const updatedJournal = {
                [updatedName]: updatedValue
            }
            return {
                ...prevJournal,
                ...updatedJournal
            }
        })
    }
    console.log('this is finished journal', journal)
    // We'll add a handleSubmit here that makes an api request, then handles the response
    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        createJournal(user, journal)
            // if we're successful, navigate to the show page 
            .then(res => { navigate(`/journal`)})
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Journal created!',
                    message: 'Success',
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: 'failure',
                    variant: 'danger'
                })
            )
    }

    return (
        <JournalForm 
            journal={ journal } 
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            heading="Add a new journal!"
        />
    )
}

export default CreateJournal