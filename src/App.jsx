import { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Events from './components/Events'
import { Route, Routes } from 'react-router-dom'
import NavigationBar from './components/Navbar'
import EventDetails from './components/EventDetails'
// import { Suspense } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavigationBar/>
      <Routes>
        {/* <Suspense fallback ={<p>Waiting the server ....</p>}>        */}
           <Route path="events">
           <Route index element={<Events/>} />  {/*tekhou auto el route principale events */}
           <Route path="details/:nom" element={<EventDetails/>} /> 
        </Route>

        <Route path="*" element={<><p>Not found</p></>} />
        {/* </Suspense> */}

      </Routes>
    </>
  );
}

export default App
