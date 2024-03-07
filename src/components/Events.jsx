import Event from "./Event"
import listEvent from "../data/events.json"
import {Row} from "react-bootstrap"
import { useEffect, useState } from "react"
import Alert from 'react-bootstrap/Alert';
export default function Events (){
    const[ showAlert , setShowAlert ] = useState(false)
    const[ showWelcome , setShowWelcome ] = useState(false)
    const modifAlert= () => {
        setShowAlert(true) 
        setTimeout(()=> setShowAlert(false), 1000)
    }
    useEffect (()=> {
        setShowWelcome(true)
        setTimeout(()=> setShowWelcome(false), 3000) 
        return ()=> { 
            console.log("Welcome unmouting")
        }
    }, []) 

    useEffect(() => {
        const fetchlist = async () => {
           const events = await getallEvents();
           setListEvents(events.data);
        }
        fetchlist();
     }, [])
     
     const deleteEvents = async (id) => {
        // console.log(e.id)
        await deleteEvent(id)
        setListEvents(listEvent.filter((e) => e.id != id))
        console.log(listEvent)
     }

    return <>
    {
        showWelcome && <Alert variant="sucess">
        Bienvenu ! 
      </Alert>
    } 
    {/* Pour eviter le probleme wa9t tebda aana data fergha maa el .map twali naamlou ?.map  */}
    <Row>
    {
        listEvent?.map((element , index)=> {
            return  <Event key={index} e={element} fonctionAlerte={modifAlert} />
        })
    }
    </Row>
    {showAlert && <Alert variant="sucess">
          You have booked an event ! 
        </Alert>}
    </>
}