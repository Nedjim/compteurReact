import React from 'react';
import Compteur from './Compteur/Compteur.jsx';
import Header from './Header/Header.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Compteur />
            </div>
        )
    }
}