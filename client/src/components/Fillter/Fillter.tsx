import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'
import { Accordion, Col, Form } from 'react-bootstrap'

interface IProps { }

/**
* @author
* @function @
**/

export const Fillter: FC<IProps> = (props) => {
    return (
        <Col sm={3}>
            <Accordion defaultActiveKey="0" className='filter-accordian'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Curstomer Review</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="5.0" />
                            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="4.0" />
                            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="3.0" />
                            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="2.0" />
                            <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} />
                        </Form.Group>
                        <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="1.0" />
                            <FontAwesomeIcon icon={faStar} />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Col>
    )
}
