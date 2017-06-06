/**
 * @Author: Aris Setyono <aris>
 * @Date:   Monday, June 5th 2017, 7:11:03 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Header.jsx
 * @Last modified by:   aris
 * @Last modified time: Monday, June 5th 2017, 7:11:23 pm
 */

import React, { Component } from 'react';

class Header extends Component {
    render(){
        return (
            <header className="main-header">
              <nav className="navbar navbar-static-top">
                <div className="container">
                  <div className="navbar-header">
                    <a href="/" className="navbar-brand"><b>Github</b>Like</a>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse pull-right" id="navbar-collapse">

                    <form className="navbar-form navbar-right" role="search" action="/search">
                      <div className="form-group">
                        <input type="text" name="q" className="form-control" id="navbar-search-input" placeholder="Search" />
                      </div>
                    </form>
                  </div>
                </div>
              </nav>
            </header>
        );
    }
}

export default Header;
