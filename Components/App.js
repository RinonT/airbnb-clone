import React, { useEffect, useState } from 'react';
import Stays from '../stays.json';
import Search from "./Search"
import Stay from "./Stays";

export default function App() {
    const [stays, setStays] = useState([]);

    const fetchStays = () => {
        setStays(Stays); 
    }

    useEffect(() => {
        fetchStays()
    }, [stays])

    return (
        <>
        <div className="container">
            <Search />
        </div>
        <div className="list-container">
        {stays.map(stay =>
                <Stay {...stay} key={stay.title}/>
            )}
        </div>
        </>
    )
}