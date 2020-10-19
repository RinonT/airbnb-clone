import React, { useEffect, useState } from 'react';
import Stays from '../stays.json';
import Stay from "./Stays";

export default function App() {
    const [stays, setStays] = useState([]);

    const fetchStays = () => {
        setStays(Stays);
        console.log(stays);
    }

    useEffect(() => {
        fetchStays()
    }, [stays])

    return (
        stays.map(stay =>
            <Stay {...stay} key={stay.title}/>
        )
    )
}