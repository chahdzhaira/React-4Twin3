
import React from "react";
import listEvent from "../data/events.json"
import { useParams } from "react-router-dom";
export default function EventDetails (){
    const {nom} = useParams();
    //const event = listEvent.find((e) => {
       // return e.name == nom ;
    //} );
    //console.log(event);
    useEffect(()=>{
        const  fetchlistbyid=async()=>{
           const events=await getallEvents(id);
           setEvent(events.data);
        }
        fetchlistbyid();
     },[])

    return <> 
    {
        event?<p>{event.name}</p>:<p>event not found</p>
        

    }
    </>
}