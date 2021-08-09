import React from "react";
import {Card} from 'react-bootstrap'
function Cards({username,email,uid}) {
    return (
        <Card className="mt-1 mb-2 bg-light" style={{ width: '18rem'}}>
            <Card.Body>
                <Card.Img variant="top" src={`https://robohash.org/${uid}?set=set2`} />
                <Card.Text className="text-center">{username}</Card.Text>
                <Card.Text className="text-center">{email}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Cards;
