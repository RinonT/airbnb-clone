import React, { useState} from 'react'
import stays from './stays.json'
import StayComponent from './Components/StayComponent' 
import FormComponent from './Components/FormSearch' 
import randomId from "random-id"

export default function App () {

  const [cities, setcities] = useState(stays);
  const [adultGuests, setAdultGuests] = useState(0);
  const [childrenGuests, setChildrenGuests] = useState(0);

  const handleChange = (e) => {
    const cityName = e.target.value;
    const filteredCities = stays.filter(stay =>  stay.city.toLocaleLowerCase() == cityName)
    setcities(filteredCities)
  }

  const decrementAdults = () => {
    setAdultGuests(decrement => decrement - 1 )
    console.log(adultGuests)
  }

  const incrementAdults = () => {
    setAdultGuests(increment => increment + 1 )
  }

  const decrementChildren = () => {
    setChildrenGuests(decrement => decrement - 1 )
  }

  const incrementChildren = () => {
    setChildrenGuests(increment => increment + 1 )
  }

  const numberOfGuests = adultGuests + childrenGuests;

  const maxGuests = cities.filter(stay => stay.maxGuests > numberOfGuests)
  
  return (
    <>
      <div className="form--header"> 
        <FormComponent 
          stays={stays} 
          handleChange={handleChange}
          incrementAdults={incrementAdults}
          decrementAdults={decrementAdults}
          incrementChildren={incrementChildren}
          decrementChildren={decrementChildren}
          adults={adultGuests}
          children={childrenGuests}
        />
      </div>
      <div className="card--container">
        {maxGuests.map(stay => {
          return (
            <StayComponent key={randomId()} {...stay}/>
          )
        })}
      </div> 
    </>
  )
}

