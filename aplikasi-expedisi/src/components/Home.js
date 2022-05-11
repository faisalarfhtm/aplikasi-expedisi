import React from 'react';
import Sidebar from '../common_components/Sidebar';
import Header from '../common_components/Header';
import Dashboard from './Dashboard';
import '../App.css';

class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Sidebar />
                <Dashboard />
            </div>

        );
    }
}

export default Home;