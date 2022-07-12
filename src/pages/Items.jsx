import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Item from '../components/Item';
import axios from 'axios';

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default function Items() {
    const [responseData, setResponseData] = useState('');
    let state = ''

    const handleState = () => {
        if(document.readyState === 'loading'){
            state='loading'
        } else if (document.readyState === 'complete'){
            state='complete'
        } else return
    }

    handleState();

    useEffect(() => {
       const handleRequest = () => {
        const options = {
            method: 'GET',
  url: 'https://community-open-weather-map.p.rapidapi.com/weather',
  params: {
    q: 'London,uk',
    lat: '0',
    lon: '0',
    callback: 'test',
    id: '2172797',
    lang: 'null',
    units: 'imperial',
    mode: 'xml'
  },
  headers: {
    'X-RapidAPI-Key': '7015901614mshbeaa572245b6bffp123fd4jsn9b3a74df405d',
    'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
  }
        }

        axios.request(options).then(function (response) {
            console.log(response.data);
            setResponseData(response.data)
        }).catch(function (error) {
            console.error(error);
        });
       }
       handleRequest()
    }, [state])
  return (
    <Container>
        hey
    </Container>
  )
}
