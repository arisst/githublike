/**
 * @Author: Aris Setyono <aris>
 * @Date:   Monday, June 5th 2017, 7:16:01 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: Container.jsx
 * @Last modified by:   aris
 * @Last modified time: Monday, June 5th 2017, 7:16:18 pm
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
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
        let user = this.props.userName
        this.fetchData(user);
    }

    fetchData(user){
        fetch('https://api.github.com/users/'+user).then(function(resp){
            return resp.json();
        })
        .then(function(j){
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
        let user = this.props.userName

        let _class = this.props.path ? 'col-md-4' : 'col-md-12'

        return (
            <div className={_class}>
                <div className="box box-widget widget-user-2">
                    <div className="widget-user-header bg-aqua-active">
                      <div className="widget-user-image">
                        <img className="img-circle" src={this.state.image} alt="User Avatar" />
                      </div>
                      <h3 className="widget-user-username">{this.state.name}  <br/>@{this.state.login}</h3>
                      {this.state.company ? (<h5 className="widget-user-desc">Company : {this.state.company}</h5>) : ''}
                      {this.state.location ? (<h5 className="widget-user-desc">Location : {this.state.location}</h5>) : ''}
                      {this.state.email ? (<h5 className="widget-user-desc">Email : {this.state.email}</h5>) : ''}
                      {this.state.blog ? (<h5 className="widget-user-desc">Blog : {this.state.blog}</h5>) : ''}
                      <h5 className="widget-user-desc">{this.state.bio}</h5>
                    </div>
                    <div className="box-footer no-padding">
                      <ul className="nav nav-stacked">
                        <li><Link to={'/'+user+'/'}>Overview</Link></li>
                        <li><Link to={'/'+user+'/repositories'}>Repositories <span className="pull-right badge bg-aqua">{this.state.public_repos}</span></Link></li>
                        <li><Link to={'/'+user+'/stars'}>Stars <span className="pull-right badge bg-green">{this.state.stars}</span></Link></li>
                        <li><Link to={'/'+user+'/followers'}>Followers <span className="pull-right badge bg-red">{this.state.followers}</span></Link></li>
                        <li><Link to={'/'+user+'/following'}>Following <span className="pull-right badge bg-yellow">{this.state.following}</span></Link></li>
                      </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;
