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
    }, []);
    
    return (
    <div class="column is-4 mb-4">
        <img class="image is-fullwidth" src={logo} alt=""/>
      </div>
    )
};

export default NewsLogo;