/**
 * @Author: Aris Setyono <aris>
 * @Date:   Monday, June 5th 2017, 7:18:27 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Footer.jsx
 * @Last modified by:   aris
 * @Last modified time: Monday, June 5th 2017, 7:18:40 pm
 */

import React, { Component } from 'react';

class Header extends Component {

    render(){
        return (
            <footer className="main-footer">
              <div className="container">
                <div className="pull-right hidden-xs">
                  <b>Version</b> 2.4.0
                </div>
                <strong>Copyright &copy; 2014-2016 <a href="https://adminlte.io">Almsaeed Studio</a>.</strong> All rights reserved.
              </div>
            </footer>
        );
    }
}

export default Header;
