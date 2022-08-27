import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ToDoForm from '../shared/ToDoForm'
import { createTodo } from '../../api/todo'

const CreateToDo = (props) => {
    console.log('these are the props in createToDo\n', props)
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [todo, setTodo] = useState({
        item: '',
        date: ''
    })

    console.log('this is todo in createToDo', todo)

    const handleChange = (e) => {
        setTodo(prevTodo => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            const updatedTodo = {
                [updatedName]: updatedValue
            }
            return {
                ...prevTodo,
                ...updatedTodo
            }
        })
    }

    // We'll add a handleSubmit here that makes an api request, then handles the response
    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        createTodo(user, todo)
            // if we're successful, navigate to the show page 
            .then(res => { navigate(`/todo/${res.data.todo.id}`)})
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Todo created!',
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
        <ToDoForm 
            todo={ todo } 
            handleChange={ handleChange }
            handleSubmit={ handleSubmit }
            heading="Add a new todo item!"
        />
    )
}

export default CreateToDo