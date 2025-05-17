import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

const LoginPage = () => {
    const [form, setForm] = useState({
        email:'blue.@inha.ac.kr',
        pass: '12341234'
    });
    const {email, pass} = form;
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]:e.targer.value
        });
    }
    return (
        <div>
            <Row className='my-5 justify-content-center'>
                <Col lg={4} md={6} xs={8}>
                    <Card>
                        <Card.Header>
                            <h5>로그인</h5>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Control placeholder='email' className='mb-2' value={email} name='email' onChange={onChange}/>
                                <Form.Control placeholder='password' className='mb-2' value={pass} type='password' name='pass' onChange={onChange}/>
                                <Button className='w-100'>로그인</Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default LoginPage
