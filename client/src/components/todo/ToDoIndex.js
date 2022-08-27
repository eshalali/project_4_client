import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllTodos } from '../../api/todo'
// style for our card container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const TodoIndex = (props) => {
    const [todos, setToDos] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    console.log('Props in ToDoIndex', props)

    useEffect(() => {
        console.log(props)
        getAllTodos()
            .then(res => setToDos(res.data.todo))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting ToDos',
                    message: 'Could not get todos',
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    // If todos haven't been loaded yet, show a loading message
    if (!todos) {
        return <LoadingScreen />
    } else if (todos.length === 0) {
        return (<>
                 <p>No items yet.</p>
                 <a href='/todo/create'> Add an item</a>
                </>
            )
    }

    const todoCards = todos.map(todo => (
        <Card style={{ width: '30%', margin: 5}} key={ todo.id }>
            <Card.Header>{ todo.item }</Card.Header>
            <Card.Body>
                <Card.Text>
                    <Link to={`/todo/${todo.id}`}>View </Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <>
        <div style={ cardContainerStyle }>
            { todoCards }
        </div>
        <a href='/todo/create'>Create a New Item</a>
        </>
    )
}

export default TodoIndex