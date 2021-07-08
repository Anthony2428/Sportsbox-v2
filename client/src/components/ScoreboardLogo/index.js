import React, {useEffect, useState} from 'react'
import DataServices from '../../utils/DataServices';




function ScoreboardLogo({ teamName }) {
    const [error, setError] = useState(null);
    const [logo, setLogo] = useState({});

    useEffect( () => {
        const data = DataServices.getTeamLogo(teamName).then(result => { 
            return result.data 
        })
        .then(logo => {
            setLogo(logo)
        },
        (error) => {
            setError(error);
        })
    }, []);
    
    return (
        <div className="flex justify-center items-center h-32 w-32 mx-auto">

        <img className="object-contain max-h-full" src={logo}/>
        </div>
    )
};

export default ScoreboardLogo;