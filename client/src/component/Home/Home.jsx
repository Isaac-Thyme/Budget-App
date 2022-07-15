import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';

function Home() {
    const [searchQuery, setSearchQuery] = useState('');
    const [result, setResult] = useState({});

    // const options = {
    //     method: 'GET',
    //     url: 'https://spotify23.p.rapidapi.com/search/',
    //     params: {
    //         q: searchQuery,
    //         type: 'multi',
    //         offset: '0',
    //         limit: '10',
    //         numberOfTopResults: '5'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': process.env.XRapidAPIKey,
    //         'X-RapidAPI-Host': process.env.XRapidAPIHost
    //     }
    // };

    // const handleClick = () => {
    //     axios.request(options).then(function (response) {
    //         setResult(response.data);
    //         console.log(response.data);
    //     }).catch(function (error) {
    //         console.error(error);
    //     });
    // }
    return (
        <div id="home">
            <SearchBar setSearchQuery={setSearchQuery} />
            <Button onClick={handleClick}>Search</Button>

        </div>
    );
}

export default Home;
