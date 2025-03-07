import { useEffect,useRef, useState } from 'react'
import { parse, format } from 'date-fns';

export default function Departures(props) {
  const [nextTrains, setNextTrains] = useState([]);
  const [departure0, setDeparture0] = useState('');
  const [departure1, setDeparture1] = useState('');
  const [departure2, setDeparture2] = useState('');

  const isFirstUpdate = useRef(0);

//   useEffect(() => {
//      fetch(`https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${props.stationCode}&route:P81/departures`, 
//        {
//          headers: {
//            Authorization: 'c18b1a6c-1e4e-46d0-850c-3e442e26cb84'
//          }
//        }
//      ).then(resp => {
//          return resp.json(); // Transforms the answer into a JSON object and returns it
//        }
//      ).then(json => {
//            const filteredArray = json.departures.filter(departure => departure.display_informations.direction === "Lille Flandres (Lille)"); // filters the array to keep only the trains going to the right direction
//            setNextTrains(filteredArray);
//            isFirstUpdate.current = 1;
//        }
//      ).catch(err => 
//        console.log(err)
//      )
//    }, []);

  useEffect(() => {
    fetch(`https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${props.stationCode}/departures?count=40`, 
      {
        headers: {
          Authorization: 'c18b1a6c-1e4e-46d0-850c-3e442e26cb84'
        }
      }
    ).then(resp => {
        return resp.json(); // Transforms the answer into a JSON object and returns it
      }
    ).then(json => {
          console.log(json);
          if (props.stationCode === "87286864") {

               const filteredArray = json.departures.filter(departure => departure.display_informations.direction === "Lille Flandres (Lille)"); // filters the array to keep only the trains going to the right direction
               setNextTrains(filteredArray);
               isFirstUpdate.current = 1;

          } else {
               const filteredArray = json.departures.filter(departure => departure.display_informations.direction === "Tournai (Tournai)"); // filters the array to keep only the trains going to the right direction
               setNextTrains(filteredArray);
               isFirstUpdate.current = 1;
          }
      }
    ).catch(err => 
      console.log(err)
    )
  }, []);

  function formatTime(departureTime: string) {
    const parsedDate = parse(departureTime, "yyyyMMdd'T'HHmmss", new Date());
    const formatedTime = format(parsedDate, "HH:mm");
    return formatedTime;
  }
  
  useEffect(() => {
    if (isFirstUpdate.current) {
      setDeparture0(formatTime(nextTrains[0].stop_date_time.base_departure_date_time));
      setDeparture1(formatTime(nextTrains[1].stop_date_time.base_departure_date_time));
      setDeparture2(formatTime(nextTrains[2].stop_date_time.base_departure_date_time));
    }
  }, [nextTrains]);

  return (
    <>
      <div>Next trains to {props.stationCode === "87286864" ? "Lille" : "Ascq"}</div>
      <div>{departure0}</div>
      <div>{departure1}</div>
      <div>{departure2}</div>
    </>
  )
}