import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../App.css';



const PokemonList = (props) => {
    const [pokemonList, setPokemonList] = useState(undefined);
    const [url, setUrl] = useState(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${props.match.params.page * 20}}`);
    const [nextData, setNext] = useState(undefined);
    const [prevData, setPrev] = useState(undefined);


    useEffect(() => {


        async function fetchData() {
            try {
                const { data: page } = await axios.get(url);

                if (props.match.params.page > page.count/20) {
                    // Error show page 404
                }
                else {
                    setPokemonList(page);
                    if (page.next != null) {
                        setNext(page.next);
                    }
                    else {
                        setNext(undefined)
                    }
                    if (page.previous != null) {
                        setPrev(page.previous);
                    }
                    else {
                        setPrev(undefined);
                    }
                    console.log(page);
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        fetchData();
    }, [props.match.params.page, url]);


    let onNext = () => {
        setUrl(nextData);
    }

    let nextButton = null;
    if (nextData) {
        nextButton =
            <button onClick={onNext}>Next_Page</button>


    }
    let prevButton = null;
    let onPrev = () => {
        setUrl(prevData);
    }
    if (prevData) {
        prevButton =
            <button onClick={onPrev}>Previous_Page</button>




    }







    return (

        <div className='App-body'>



            <div>
                <span>{nextButton} {prevButton}</span>
            </div>


            <ul>

                {pokemonList && pokemonList.results.map((pokemon) => {
                    return <li key={pokemon.name}>
                        <Link className='showlink' to={`/pokemon/${pokemon.name}`}>
                            {pokemon.name}
                        </Link>

                    </li>

                })}
            </ul>

        </div>


    );

}
export default PokemonList;