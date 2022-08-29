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
    const [value, setValue] = useState([1, 3]);

  /*
   * The second argument that will be passed to
   * `handleChange` from `ToggleButtonGroup`
   * is the SyntheticEvent object, but we are
   * not using it in this example so we will omit it.
   */
  const handleChange = (val) => setValue(val);

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
                 <Link to={'/todo/create'}>Create a New Item</Link>
                </>
            )
    }

    const todoCards = todos.map(todo => (
        <Card style={{ width: '30%', margin: 5}} key={ todo.id }>
            <Card.Header>{ todo.date }</Card.Header>
            <Card.Body>
                {todo.item}
                <div>
                    <input type="checkbox" />
                </div>
            </Card.Body>
        </Card>
    ))

    return (
        <>
        <div style={ cardContainerStyle }>
            { todoCards }
        </div>
        <Link to={'/todo/create'}>Create a New Item</Link>
        </>
    )
}

export default TodoIndex