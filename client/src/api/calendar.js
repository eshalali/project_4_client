import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllCalendar = () => {
    return axios(`${apiUrl}/calendar`)
}

// READ => SHOW
export const getOneCalendar = async (id) => {
    return axios(`${apiUrl}/calendar/${id}`)
}

// CREATE
export const createCalendar = (user, newCalendar) => {
    // console.log('createcalendar in api was hit')
    // newCalendar taken from createCalendar form
    console.log('this is user', user)
    console.log('this is newCalendar', newCalendar)
	return axios({
		url: apiUrl + '/calendar',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { calendar: newCalendar }
	})
}

// UPDATE
export const updateCalendar = (user, updatedCalendar) => {
    // console.log('updateCalendar in api was hit')
    console.log('this is updatedCalendar', updatedCalendar)
	return axios({
		url: `${apiUrl}/calendar/${updatedCalendar._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { calendar: updatedCalendar }
	})
}

// DELETE
export const removeCalendar = (user, calendarId) => {
    return axios({
        url: `${apiUrl}/calendar/${calendarId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}