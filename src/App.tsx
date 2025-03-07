import './App.css'
import Departures from './components/Departures'

function App() {

  return (
    <>
      <h1>MyTER</h1>
      <Departures stationCode="87286864" />
      <Departures stationCode="87286005" />
    </>
  )
}

export default App
