// import Spinner from 'react-bootstrap/Spinner'
import { Spinner } from '@chakra-ui/react'

const LoadingScreen = () => (
    <div style={{textAlign: 'center'}}>
        <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='#5e72eb'
            size='xl'
        />
    </div>
)

export default LoadingScreen