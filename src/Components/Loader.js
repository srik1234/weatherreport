import React from 'react'
import { Button, Spinner } from 'react-bootstrap';

function Loader() {
    return (
        <div style={{
            display: 'flex',
            'justify-content': 'center',
            'align-items': 'center'
        }}>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
        Loading...
        </Button>
        </div >
    )
}

export default Loader