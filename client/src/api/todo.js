import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllTodos = () => {
    return axios(`${apiUrl}/todo`)
}

// READ => SHOW
export const getOneTodo = async (id) => {
    return axios(`${apiUrl}/todo/${id}`)
}

// CREATE
export const createTodo = (user, newTodo) => {
    // console.log('createtodo in api was hit')
    // newTodo taken from createTodo form
    console.log('this is user', user)
    console.log('this is newTodo', newTodo)
	return axios({
		url: apiUrl + '/todo',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { todo: newTodo }
	})
}

// UPDATE
export const updateTodo = (user, updatedTodo) => {
    // console.log('updateTodo in api was hit')
    console.log('this is updatedTodo', updatedTodo)
	return axios({
		url: `${apiUrl}/todo/${updatedTodo._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { todo: updatedTodo }
	})
}

// DELETE
export const removeTodo = (user, todoId) => {
    return axios({
        url: `${apiUrl}/todo/${todoId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}