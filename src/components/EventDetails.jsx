
import React from "react";
import listEvent from "../data/events.json"
import { useParams } from "react-router-dom";
export default function EventDetails (){
    const {nom} = useParams();
    const event = listEvent.find((e) => {
        return e.name == nom ;
    } );
    console.log(event);
    return <> {event?
        <p>{event.name}</p>:<p>event not found</p>}
        </>
return(
<>

</>

)}