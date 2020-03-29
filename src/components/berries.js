import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
// import noImage from '../img/download.jpeg';

let li = null;

const Berries = (props) => {

    const [berriesData, setBerriesData] = useState(undefined);

    useEffect(
        () => {
            async function fetchData() {
                try {
                    console.log(props.match.params.id);
                    const { data: berryData } = await axios.get(`https://pokeapi.co/api/v2/berry/${props.match.params.id}/`);
                    if (berryData !== undefined) {

                        setBerriesData(berryData);
                    }
                    else {
                        // show 404 error

                    }
                }
                catch (e) {
                    console.log(e);
                }
            }
            fetchData();
        },
        [props.match.params.id]
    );

    const buildBerryDetails = (berriesData) => {
        
        return (
            <li>
                <label>
                    Name: {berriesData.name}
                </label>

            </li>
        );
    }

    if (berriesData) {

        li = buildBerryDetails(berriesData);
        return (

            <div className='show-body'>



                <h1 className='cap-first-letter'>{berriesData && berriesData.name}</h1>
                
                <br />
                <p>
                    <span className='title'>Growth Time: </span>
                    {berriesData && berriesData.growth_time}
                    <br />
                    <span className='title'>Size:</span> {berriesData && berriesData.size} <br />
                    <span className='title'>Smoothness:</span> {berriesData && berriesData.smoothness} <br />
                    <span className='title'>flavors:</span>
                    <br />
                </p>
                <dl className='list-unstyled'>
                    {berriesData && berriesData.flavors.map((flavors) => {
                        return <dt key={flavors.flavor}>{flavors.flavor.name}</dt>
                    })}
                </dl>
                <br />


            </div>
        );

    }
    else {
        return (
            <div className='show-body'>
                <h1 className='cap-first-letter'>Loading....</h1>
            </div>
        )
    }


}
export default Berries;