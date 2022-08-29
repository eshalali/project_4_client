import { useState, useEffect } from 'react'
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Container, Card, Button } from 'react-bootstrap'


import { getOneJournal, updateJournal, removeJournal } from '../../api/journal'

const ShowJournal = (props) => {
    const [journal, setJournal] = useState(null)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to
    const navigate = useNavigate()
    const { user, msgAlert } = props
    console.log('user in props', user)
    console.log('this is id', id)

    useEffect(() => {
        getOneJournal(id)
        .then(res => setJournal(res.data.journalentry))
            .catch(err => {                   
                msgAlert({
                    heading: 'Error',
                    message: 'Could not get journal',
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [updated])
    console.log('the journal in showjournal', journal)
    // function for delete journal button
    const deleteJournal = () => {
        removeJournal(journal.owner, journal._id)
            // on success send a success message
            .then(() => {
                // msgAlert({
                //     heading: 'Success',
                //     message: 'Deleted journal',
                //     variant: 'success'
                // })
            })
            // then navigate to journal index
            .then(() => {navigate('/journal')})
            // on failure send a failure message
            .catch(err => {                   
                // msgAlert({
                //     heading: 'Error',
                //     message: 'Could not delete journal',
                //     variant: 'danger'
                // })
            })
    }

    if (!journal) {
        return (
            <>
            <h1>Could not get journal</h1> 
            <Link to={'/journal'}>Back to all entries</Link>
            </>
            )
    }

    return (
        <>
        {/* <h1>{journal.title}</h1>
        <h4>{journal.date}</h4>
        <p>{journal.entry}</p>
        <button onClick={deleteJournal}>
            Delete Entry
        </button>
        <button>
            <a href={`/journal/${journal._id}/edit`}>Edit Entry</a>
        </button> */}
            <Container className="fluid">
                <Card>
                    <Card.Header>{ journal.title }</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><p>Date: { journal.date }</p></div>
                            <div><p>Entry: { journal.entry }</p></div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {
                            journal.owner && user && journal.owner._id === user._id 
                            ?
                            <>
                                <Button
                                    className="m-2" 
                                    variant="warning"
                                >
                                    <Link to={`/journal/${journal._id}/edit`}>Edit Journal</Link>
                                </Button>
                                <Button onClick={() => deleteJournal()}
                                    className="m-2"
                                    variant="danger"
                                >
                                    Delete entry
                                </Button>
                            </>
                            :
                            null
                        }
                    </Card.Footer>
                </Card>
            </Container>
        </>
    )

}

export default ShowJournal