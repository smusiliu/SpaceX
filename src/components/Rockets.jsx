import { useState, useEffect } from "react"
import { RocketCard, SearchForm } from './'


export default function Rockets() {
    const [rockets, setRockets] = useState([])

    const [params, setParams] = useState({
        country: '',
        height: '',
        active: '',
    })

    const getParams = ({ country, height, active }) => {
        setParams({
            country: country,
            height: height,
            active: active,
        })
    }

    const filteredResults = rockets.filter(rocket => {
        for (const filterKey in rocket) {
            if (filterKey.country == params.country || filterKey.height == params.height || filterKey.active == params.active) {
                return false;
            }
        }
        return true;
    });

    console.log(filteredResults)

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
        };

        fetch("https://api.spacexdata.com/v4/rockets", requestOptions)
            .then(response => response.json())
            .then(result => {
                setRockets(result)
            })
            .catch(error => console.log('error', error));
    }, [])

    return (
        <div className='max-w-[76rem] min-h-screen mx-auto my-20 text-gray-300 w-full lg:px-0 px-3'>
            <h2 className='text-center text-xl font-medium'>Search for Rockets</h2>
            <SearchForm
                rockets={rockets}
                sendToParent={getParams}
                // setFilteredRockets={setFilteredRockets}
            />

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


