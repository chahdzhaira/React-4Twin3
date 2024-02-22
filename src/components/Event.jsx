import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Event (props){
  
    const [e , setEvent ]=useState(props.e)
    const bookEvent = ()=> {props.fonctionAlerte()
        setEvent(
            (previousE) => ({...previousE ,"nbParticipants":previousE.nbParticipants+1 , "nbTickets":previousE.nbTickets-1})
            )
        }
    const changeLike =()=>{
        setEvent ((previousE) => ({ ...previousE , like : !previousE.like}))
    }
    return <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.nbTickets ===0 ? "images/sold_out.png" : `images/${e.img}`}/>
      <Card.Body>
        <Card.Title><Link to={`/events/details/${e.name}`}>{e.name}</Link></Card.Title>
        <Card.Text>
            {e.description}
        </Card.Text>
        <p>price : {e.price}</p>
        <p>nbTickets: {e.nbTickets}</p>
        <p>nbParticipants: {e.nbParticipants}</p>
        <p></p>
        <Button variant="danger" onClick={changeLike} >{e.like ? "Dislike" : "Like" }</Button>
        <Button variant="primary" onClick={bookEvent} disabled={e.nbTickets=== 0 ? true : false }>Book an event </Button>
      </Card.Body>
    </Card>
    </>
}