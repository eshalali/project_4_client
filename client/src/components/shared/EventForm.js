import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'

const EventForm = (props) => {
    const { handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
                    placeholder="Title"
                    name="title"
                    id="title"
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="date">Start Date</Form.Label>
                <Form.Control
                    placeholder="Start date"
                    name="date"
                    id="date"
                    onChange={ handleChange }
                />
                {/* <Form.Label htmlFor="end">End Date</Form.Label>
                <Form.Control
                    placeholder="End date"
                    name="end"
                    id="end"
                    onChange={ handleChange }
                /> */}
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default EventForm