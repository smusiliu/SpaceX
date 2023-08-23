import { useState, useEffect } from "react"
// import { getRockets } from "../utils/getRockets"
import RocketCard from './RocketCard'


export default function Rockets() {
    const [rockets, setRockets] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://api.spacexdata.com/v4/rockets", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result)
                setRockets(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className='max-w-[76rem] min-h-screen mx-auto my-20 text-gray-300 w-full'>
            <h2 className='text-center text-xl font-medium'>Search for Rockets</h2>
            <p className='text-4xl'> {rockets.length} </p>

            <div className='grid grid-cols-4 gap-4 w-full'>
                {rockets.map(rocket => (
                    <RocketCard
                        rocket={rocket}
                        key={rocket.id}
                    />  
                ))}
        </div>
        </div >
    )
}


