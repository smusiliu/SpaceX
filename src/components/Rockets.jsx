import { useState, useEffect } from "react"
import RocketCard from './RocketCard'


export default function Rockets() {
    const [rockets, setRockets] = useState([])

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
        };

        fetch("https://api.spacexdata.com/v4/rockets", requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log(result.length)
                setRockets(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className='max-w-[76rem] min-h-screen mx-auto my-20 text-gray-300 w-full'>
            <h2 className='text-center text-xl font-medium'>Search for Rockets</h2>

            <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 w-full mt-10 lg:px-0 md:px-16 px-8 mx-auto'>
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


