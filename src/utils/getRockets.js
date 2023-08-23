// import axios from 'axios';

// const BASE_URL = 'https://api.spacexdata.com/v3/capsules'

export const getRockets = async () => {
    const apiResponse = await fetch('https://api.spacexdata.com/v4/rockets')
        .then(res => res.json())
        .then(data => data)

    return apiResponse;
}

