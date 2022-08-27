import { Form,Button,Container } from 'react-bootstrap'

const ToDoForm = (props) => {

    const { todo, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="item">Item</Form.Label>
                <Form.Control
                    placeholder="ToDo item"
                    name="item"
                    id="item"
                    value={ todo.item }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control
                    name="date"
                    id="date"
                    value={ todo.date }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ToDoForm
