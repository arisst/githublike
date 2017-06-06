/**
 * @Author: Aris Setyono <aris>
 * @Date:   Monday, June 5th 2017, 6:57:10 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: App.js
 * @Last modified by:   aris
 * @Last modified time: Tuesday, June 6th 2017, 9:50:08 pm
 */

import React, { Component } from 'react';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Repositories from './components/Repositories';
import Repos from './components/Repos';
import Search from './components/Search';
import Stars from './components/Stars';
import Followers from './components/Followers';
import Following from './components/Following';
import Footer from './components/Footer';

class App extends Component {

    render() {
        let uri = this.props.location.pathname
        let uri1 = uri.split('/')[1] ? uri.split('/')[1] : 'arisst'
        let uri2 = uri.split('/')[2]
        let uri3 = uri.split('/')[3]

        uri2 = uri1 === 'search' ? '/search' : uri2

        let box = null;
        switch (uri2) {
            case 'repositories':
                box = (<Repositories userName={uri1}/>)
                break;
            case 'repos':
                box = (<Repos userName={uri1} repoName={uri3}/>)
                break;
            case 'stars':
                box = (<Stars userName={uri1}/>)
                break;
            case 'followers':
                box = (<Followers userName={uri1}/>)
                break;
            case 'following':
                box = (<Following userName={uri1}/>)
                break;
            case '/search':
                box = (<Search />)
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
                                {uri2 === '/search' ? '' : (<UserInfo userName={uri1} path={uri2}/>)}
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
