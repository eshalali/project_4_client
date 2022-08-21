import apiUrl from '../apiConfig'
import axios from 'axios'

// READ => INDEX
export const getAllJournals = () => {
    return axios(`${apiUrl}/journal`)
}

// READ => SHOW
export const getOneJournal = async (id) => {
    return axios(`${apiUrl}/journal/${id}`)
}

// CREATE
export const createJournal = (user, newJournal) => {
    // console.log('createjournal in api was hit')
    // newJournal taken from createJournal form
    console.log('this is user', user)
    console.log('this is newJournal', newJournal)
	return axios({
		url: apiUrl + '/journal',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { journal: newJournal }
	})
}

// UPDATE
export const updateJournal = (user, updatedJournal) => {
    // console.log('updateJournal in api was hit')
    console.log('this is updatedJournal', updatedJournal)
	return axios({
		url: `${apiUrl}/journal/${updatedJournal._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: { journal: updatedJournal }
	})
}

// DELETE
export const removeJournal = (user, journalId) => {
    return axios({
        url: `${apiUrl}/journal/${journalId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`,
        }
    })
}