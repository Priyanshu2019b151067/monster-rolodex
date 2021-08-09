import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import './cardlist.css'
import Cards from '../cards/cards.components'
function Cardlist({citizens}) {
    return (
        <Container>
            <Row className="text-center col-centered">
            {citizens.map((user)=>(
                <Col key={user.id} >
                    <Cards uid={user.id} username = {user.username} email = {user.email}/>
                </Col>
            ))}
            </Row>
        </Container>
    )
}

export default Cardlist
