import React from 'react';
import logo from './img/pika.png';
import './App.css';
import pokemon from './components/pokemon';
import berries from './components/berries';
import machines from './components/machines';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to your pokedex</h1>
          <Link className='showlink' to='/pokemon/page/0'>
            Pokemon
					</Link>
          <Link className='showlink' to='/berries/page/0'>
            Berries
					</Link>
          <Link className='showlink' to='/machines/page/0'>
            Machines
					</Link>
        </header>
        <br />
        <br />
        <div className='App-body'>
          <p>The first link is a complete list of all 890 species of Pokémon currently known to exist.</p>
          <p>The second link is a complete list of all available berries that help your Pokemon grow and improve its powers.</p>
          <p>The third link is a complete list of all available machines that you as a pokemon trainer can buy to train your Pokemon</p>
        {/* This page will have a <Link> to the Pokemon Listing (/pokemon/page/0),
         The Berry Listing (/berries/page/0), and the Machine Listing (/machines/page/0) */}

          <Route path='/pokemon/page/:id' exact component={pokemon} />
          <Route path='/berries/page/:id' exact component={berries} />
          <Route path='/machines/page/:id' exact component={machines} />
        </div>
      </div>
    </Router>
  );
};

export default App;