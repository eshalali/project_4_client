import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllJournals } from '../../api/journal'

// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
}

const JournalIndex = (props) => {
    const [journals, setJournals] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    console.log('Props in JournalIndex', props)

    useEffect(() => {
        console.log(props)
        getAllJournals()
            .then(res => setJournals(res.data.journal))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Journals',
                    message: 'Could not get journals',
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    // If journal haven't been loaded yet, show a loading message
    if (!journals) {
        return <LoadingScreen />
    } else if (journals.length === 0) {
        return <p>No journals yet</p>
    }

    const journalCards = journals.map(journal => (
        <Card style={{ width: '30%', margin: 5}} key={ journal._id }>
            <Card.Header>{ journal.title }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/journal/${journal._id}`}>View </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <>
        <div>
            <a href='/journal/create'>Add entry</a>
        </div>
        <div style={ cardContainerStyle }>
            { journalCards }
        </div>
        </>
    )
}

export default JournalIndex