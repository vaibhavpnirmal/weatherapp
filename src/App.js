

import './App.css';
import Weather from './Component/Weather';
import {  useState } from 'react';



function App() {
  const [input,setinput]=useState(null)
  const [city,setcity]=useState('')
  const [temp,settemp]=useState(null)
  const [humidity,sethumidity]=useState(null)
  const [speed,setspeed]=useState(null)
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=02d294325ffbf5c381ba1b1f5703dc47`
  const fetchdata=async()=>{
    try {
      let res=await fetch(url)
     
      let data=await res.json()
      console.log(data)

      let temp=data.main.temp
      let humi=data.main.humidity
      let speed=data.wind.speed
      settemp(temp)
      sethumidity(humi)
      setspeed(speed)

      setcity(null)
      
    } catch (error) {
console.log(error)      
    }
    
   
     
  
  }
  const handlechange=(e)=>{
    let city=e.target.value
   
    setcity(city)
    if(city===""){

      settemp("")
      sethumidity("")
      setspeed("")

     }

  }

  const onclick=(e)=>{
     fetchdata();


     setinput(null)
    
  }
const onkeypress=(e)=>{
console.log(e.key)
  if(e.key==="Enter"){
    fetchdata()
  
  }
}
 








  return (
    <Weather city={city} temp={temp} handlechange={handlechange}
    
    fetchdata={fetchdata} humididity={humidity} speed={speed} input={input} onclick={onclick} 
    
    onkeypress={onkeypress}
    ></Weather>
  );
}

export default App;
