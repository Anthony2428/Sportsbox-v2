import React, {useEffect, useState} from 'react'
import DataServices from '../../utils/DataServices';

function NewsLogo({ sport, teamName }) {
    const [error, setError] = useState(null);
    const [logo, setLogo] = useState({});

    useEffect( () => {
        const data = DataServices.getTeamLogo(sport, teamName).then(result => { 
            return result.data 
        })
        .then(logo => {
            setLogo(logo)
        },
        (error) => {
            setError(error);
        })
    }, [sport, teamName]);
    
    return (
    <div className="column is-4 mb-4">
        <img className="image is-fullwidth" src={logo} alt="Team Logo"/>
      </div>
    )
};

export default NewsLogo;