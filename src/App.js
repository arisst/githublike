import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Repositories from './components/Repositories';
import Footer from './components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.location.pathname);
        let box = null;
        switch (this.props.location.pathname) {
            case '/repositories':
                box = (<Repositories />)
                break;
            default:

        }
        return (
            <div className="App">

                <Header />

                <div className="content-wrapper">
                    <div className="container">
                        <section className="content">
                            <div className="row">
                                <UserInfo />
                                {box}
                            </div>
                        </section>
                    </div>
                </div>

                <Footer />

            </div>
        );
    }
}

export default App;
