import React, { memo } from "react";
import {Card } from "react-bootstrap";
import '../css/cardItem.css';



// sau này update react memo


function CardItem({item}) {
        return (
            <>
 
                <Card>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title className="titleName">{item.name}</Card.Title>
                    <Card.Text className="text-ellipsis" dangerouslySetInnerHTML={{ __html: item.description }}></Card.Text>
                        <Card.Text className="price"> { item.unitPrice} đ</Card.Text>
                </Card.Body>
                </Card>
            
            
         
            </>
            
        )
    
}

export default memo(CardItem)