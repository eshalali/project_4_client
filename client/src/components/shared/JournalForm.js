import { Form,Button,Container } from 'react-bootstrap'

const JournalForm = (props) => {

    const { journal, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
                    placeholder="Journal title"
                    name="title"
                    id="title"
                    value={ journal.title }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="date">Date</Form.Label>
                <Form.Control
                    name="date"
                    id="date"
                    value={ journal.date }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="entry">Entry</Form.Label>
                <Form.Control
                    name="entry"
                    id="entry"
                    value={ journal.entry }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default JournalForm

