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
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <header className="main-header">
              <nav className="navbar navbar-static-top">
                <div className="container">
                  <div className="navbar-header">
                    <a href="." className="navbar-brand"><b>Github</b>Like</a>
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
                      <i className="fa fa-bars"></i>
                    </button>
                  </div>
                  <div className="collapse navbar-collapse pull-left" id="navbar-collapse">
                    <ul className="nav navbar-nav">
                      <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                      <li><a href="#">Link</a></li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">Dropdown <span className="caret"></span></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><a href="#">Action</a></li>
                          <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li className="divider"></li>
                          <li><a href="#">Separated link</a></li>
                          <li className="divider"></li>
                          <li><a href="#">One more separated link</a></li>
                        </ul>
                      </li>
                    </ul>
                    <form className="navbar-form navbar-left" role="search">
                      <div className="form-group">
                        <input type="text" className="form-control" id="navbar-search-input" placeholder="Search" />
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
