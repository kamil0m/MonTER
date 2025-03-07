import { is } from 'date-fns/locale';
import './App.css'
import { useEffect,useRef, useState } from 'react'
// import { parse, format } from 'date-fns';

function App() {

  const [nextDepartures, setNextDepartures] = useState([
    {
      "stop_date_time": {
        "arrival_date_time": "2021-10-01T11:00:00Z",
        "base_arrival_date_time": "2021-10-01T11:00:00Z",
        "base_departure_date_time": "2021-10-01T11:00:00Z",
        "departure_date_time": "2021-10-01T11:00:00Z"
      },
    }, {}
  ]);

  const isFirstUpdate = useRef(0);

  useEffect(() => {
    fetch('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87286864/departures', 
      {
        headers: {
          Authorization: 'c18b1a6c-1e4e-46d0-850c-3e442e26cb84'
        }
      }
    ).then(resp => {
        return resp.json(); // Transforms the answer into a JSON object
      }
    ).then(json => {
        setNextDepartures(json.departures); // Transforms the answer into a JSON object and sets the state
        isFirstUpdate.current = 1;
      }
    ).catch(err => 
      console.log(err)
    )
  }, []);

  
  useEffect(() => {
    if (isFirstUpdate.current) {
      console.log(nextDepartures[0].stop_date_time.base_departure_date_time);
    }
  }, [nextDepartures]); // Ten efekt uruchomi się za każdym razem, gdy nextDepartures się zmieni

  return (
    <>
      <h1>MyTER</h1>
      <div>Next trains to Lille</div>
      <div>12:00</div>
      <div>13:00</div>
      <div>14:00</div>
      <div>Next trains to Ascq</div>
      <div>12:00</div>
      <div>13:00</div>
      <div>14:00</div>
    </>
  )
}

export default App
