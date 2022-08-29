import {  FormLabel, FormControl, Button, Container } from '@chakra-ui/react'

const JournalForm = (props) => {

    const { journal, handleChange, heading, handleSubmit } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel htmlFor="title" textAlign={"center"} fontSize="lg">
                    Title
                </FormLabel>
                <Input 
                    id="title"
                    name="title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    defaultValue={type === "edit" ? `${post.title}` : ""}
                    required>
                    

                </Input>
            </FormControl>
                <FormLabel htmlFor="date">Date</FormLabel>
                <FormControl
                    name="date"
                    id="date"
                    value={ journal.date }
                    onChange={ handleChange }
                />
                <FormLabel htmlFor="entry">Entry</FormLabel>
                <FormControl
                    name="entry"
                    id="entry"
                    value={ journal.entry }
                    onChange={ handleChange }
                />
                <Button type="submit">Submit</Button>
            </form>
        </Container>
    )
}

export default JournalForm

