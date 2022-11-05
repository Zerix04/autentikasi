import { Button, Form } from 'react-bootstrap'

import './Register.css'

function SignUp() {
    return (
        <>
            <div id='SignUp'></div>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUser">
                    <Form.Control className='ctrl' type="password" placeholder="Confirm Password" />
                </Form.Group>
                <Form.Group className="ck mb-3" controlId="formBasicUser">
                    <Form.Check className="text-secondary" type="checkbox" label="I agree with term & condition" />
                </Form.Group>
                <Button className='btn rounded-4 px-5 mb-4' variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form>
        </>
    )
}



export default SignUp