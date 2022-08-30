// import {  FormLabel, FormControl, Button, Container } from '@chakra-ui/react'
import { Form, Container, Button} from 'react-bootstrap'

const JournalForm = (props) => {

    const { journal, handleChange, heading, handleSubmit } = props
    console.log('the journal', journal)
    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
            {/* <FormControl>
                <FormLabel htmlFor="title" textAlign={"center"} fontSize="lg">
                    Title
                </FormLabel>
                {/* <Input  */}
                    {/* id="title" */}
                    {/* name="title" */}
                    {/* type="text" */}
                    {/* onChange={(e) => setTitle(e.target.value)} */}
                    {/* defaultValue={type === "edit" ? `${journal.title}` : ""} */}
                    {/* required> */}
                    

                {/* </Input> */}
            {/* </FormControl> */} 
            <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
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

