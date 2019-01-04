import React, { Component } from 'react';
import Navigation from './components/Navigation';
import MainRoutes from './components/MainRoutes';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <MainRoutes />
            </div>
        );
    }
}

export default App;
