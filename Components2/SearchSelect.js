import React from "react";
import Stays from '../stays.json';
import App from './App'
// import Search from "./Search"
import Stay from "./Stays"; 

export default function SearchSelect() {
 const [searchTerm, setSearchTerm] = React.useState("");
 const [cities, setCities] = React.useState([]);
 
 const handleChange = event => {
    setSearchTerm(event.target.value); 
  };
   
 React.useEffect(() => {
    const citiesObj =  Stays.filter(stay => stay.city.toLowerCase().includes(searchTerm.toLowerCase()))
    setCities(citiesObj)
  }, [searchTerm]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      /> 
    </div>
  );
}