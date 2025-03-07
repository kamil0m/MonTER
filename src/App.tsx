import './App.css'

function App() {

  // const myPromise = new Promise((resolve, reject) => {})

  // const apiReturn = fetch('https://c18b1a6c-1e4e-46d0-850c-3e442e26cb84@api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87581009/departures')
fetch('https://api.sncf.com/v1/coverage/sncf/stop_areas/stop_area:SNCF:87286005/departures', 
  {
    headers: {
      Authorization: 'c18b1a6c-1e4e-46d0-850c-3e442e26cb84'
    }
  }).then(resp => console.log(resp)).catch(err => console.log(err))

  // console.log(`answer is : ${apiReturn}`);
  

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
