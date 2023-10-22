import React, { FC } from 'react'
import { Container, Row } from 'react-bootstrap'
import { Fillter } from '../Fillter/Fillter'

interface IProps { }

/**
* @author
* @function @Main
**/

export const Main: FC<IProps> = (props) => {
    return (
        <Container>
            <Row>
                <Fillter />
            </Row>
        </Container>
    )
}
