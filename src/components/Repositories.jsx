/**
 * @Author: Aris Setyono <aris>
 * @Date:   Monday, June 5th 2017, 8:49:24 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Repositories.jsx
 * @Last modified by:   aris
 * @Last modified time: Monday, June 5th 2017, 8:49:31 pm
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Repositories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image   : 'https://www.gravatar.com/avatar/00000000000000000000000000000000',
            name    : 'loading...',
            login   : 'loading...',
            bio     : 'loading...',
            company : 'loading...',
            location : 'loading...',
            email   : 'loading...',
            blog    : 'loading...',
            public_repos    : 0,
            stars   : 0,
            followers   : 0,
            following   : 0,
        }
    }

    componentWillMount(){
        this.fetchData();
    }

    fetchData(){
        fetch('https://api.github.com/users/andhikamaheva').then(function(resp){
            return resp.json();
        })
        .then(function(j){
            // console.log(j);
            this.setState({
                image   : j.avatar_url,
                name    : j.name,
                login   : j.login,
                bio     : j.bio,
                company : j.company,
                location : j.location,
                email   : j.email,
                blog    : j.blog,
                public_repos    : j.public_repos,
                followers   : j.followers,
                following   : j.following,

            })
        }.bind(this));
    }

    render(){
        // console.log(this.state);
        return (
            <div className="col-md-8">
                <ul className="timeline">
                    {/*<li className="time-label">
                        <span className="bg-red">
                            10 Feb. 2014
                        </span>
                    </li>*/}
                    <li>
                        <i className="fa fa-github bg-blue"></i>
                        <div className="timeline-item">
                            <span className="time"><i className="fa fa-clock-o"></i> 12:05</span>
                            <h3 className="timeline-header"><a href="#">Support Team</a> ...</h3>
                            <div className="timeline-body">
                                ...
                                Content goes here
                            </div>
                            <div className="timeline-footer">
                                <a className="btn btn-primary btn-xs">...</a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        );
    }
}

export default Repositories;
