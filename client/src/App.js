// import React, { Component, Fragment } from 'react'
import React, { useState, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import ChangePassword from './components/auth/ChangePassword'
import JournalIndex from './components/journal/JournalIndex'
import NewJournal from './components/journal/NewJournal'
import ShowJournal from './components/journal/ShowJournal'
import Calendar from './components/calendar/CalendarIndex'
import TodoIndex from './components/todo/ToDoIndex'
import CreateToDo from './components/todo/NewToDo'
import EditJournal from './components/journal/EditJournal'

const App = () => {

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}
	

		return (
			<Fragment>
				<Header user={user} />
				<Routes>
					<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
					<Route
						path='/sign-up'
						element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/sign-in'
						element={<SignIn msgAlert={msgAlert} setUser={setUser} />}
					/>
					<Route
						path='/sign-out'
						element={
						<RequireAuth user={user}>
							<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
						</RequireAuth>
						}
					/>
					<Route
						path='/change-password'
						element={
						<RequireAuth user={user}>
							<ChangePassword msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/>
					<Route
						path='/journal'
						element={
							<RequireAuth user={user}>
								<JournalIndex msgAlert={msgAlert} user={user} />
							</RequireAuth>
						}
					/>
					<Route
						path="/journal/:id"
						element={
								<ShowJournal msgAlert={ msgAlert } user={ user }/>
							}
					/>
					<Route
						path="/journal/:id/edit"
						element={
							<RequireAuth user={user}>
								<EditJournal user={ user } msgAlert={ msgAlert } />
							</RequireAuth>
							}
					/>
					<Route
						path="/journal/create"
						element={
							<RequireAuth user={user}>
								<NewJournal msgAlert={msgAlert} user={user}/>
							</RequireAuth>
						}
					/>
					<Route
						path="/calendar"
						element={
							<RequireAuth user={user}>
								<Calendar/>
							</RequireAuth>
						}
					/>
					<Route
						path="/todo"
						element={
							<TodoIndex user={user} msgAlert={msgAlert}/>
						}
					/>
					<Route
						path="/todo/create"
						element={
							<RequireAuth user={user}>
								<CreateToDo user={user} msgAlert={msgAlert}/>
							</RequireAuth>
						}
					/>
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}

export default App
