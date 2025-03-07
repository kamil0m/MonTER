import { useEffect,useRef, useState } from 'react'
import { parse, format } from 'date-fns';

export default function Departures(props) {
  const [nextTrainOut, setNextTrainOut] = useState([]);
  const [departureOut0, setDepartureOut0] = useState('');
  const [departureOut1, setDepartureOut1] = useState('');
  const [departureOut2, setDepartureOut2] = useState('');

  const isFirstUpdate = useRef(0);

  console.log(props);

  useEffect(() => {
    fetch(`https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:${props.stationCode}/departures`, 
      {
        headers: {
          Authorization: 'c18b1a6c-1e4e-46d0-850c-3e442e26cb84'
        }
      }
    ).then(resp => {
        return resp.json(); // Transforms the answer into a JSON object
      }
    ).then(json => {
        setNextTrainOut(json.departures); // Transforms the answer into a JSON object and sets the state
        isFirstUpdate.current = 1;
      }
    ).catch(err => 
      console.log(err)
    )
  }, []);

  function formatTime(departureTime: string) {
    const parsedDate = parse(departureTime, "yyyyMMdd'T'HHmmss", new Date());
    const formatedTime = format(parsedDate, "HH:mm:ss"); // "07/03/2025 16:20:00"
    return formatedTime;
  }
  
  useEffect(() => {
    if (isFirstUpdate.current) {
      setDepartureOut0(formatTime(nextTrainOut[0].stop_date_time.base_departure_date_time));
      setDepartureOut1(formatTime(nextTrainOut[1].stop_date_time.base_departure_date_time));
      setDepartureOut2(formatTime(nextTrainOut[2].stop_date_time.base_departure_date_time));
    }
  }, [nextTrainOut]);

  return (
    <>
      <h1>MyTER</h1>
      <div>Next trains to Lille:</div>
      <div>{departureOut0}</div>
      <div>{departureOut1}</div>
      <div>{departureOut2}</div>
    </>
  )
}